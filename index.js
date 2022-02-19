var url = "http://localhost:3001/test";
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface()

/* 2) Make a reference to your HTML button and add a click handler. */
var openButton = document.querySelector('#open-button')
openButton.addEventListener('click', openDoc)

/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
    csInterface.evalScript('alerta()')
}

/* 2) Use a CEP method to open the server extension. */
csInterface.requestOpenExtension("com.my.localserver", "");

var openButton = document.querySelector("#import-button");
openButton.addEventListener("click", openFile);

function openFile() {
    csInterface.evalScript('openFile()')
}


var alertButton2 = document.querySelector("#alert-external-button");
alertButton2.addEventListener("click", importDoc2);

function importDoc2() {
	/* Make sure to include the full URL */

    /* Use ajax to communicate with your server */
	$.ajax({
		type: "GET",
		url: "http://localhost:3002/test",
		success: response => {
			/* Use the ExtendScript function to display the downloaded file */
			csInterface.evalScript(`openDocument2("${response.message}")`);
		},
		error: (jqXHR, textStatus, errorThrown) => { 
			alert(errorThrown, jqXHR.responseJSON);
		}
	})

}


var alertButton = document.querySelector("#alert-button");
alertButton.addEventListener("click", importDoc);

/* Get the path for your panel */
var extensionDirectory = csInterface.getSystemPath("extension");

function importDoc() {
	/* Make sure to include the full URL */

    /* Use ajax to communicate with your server */
	$.ajax({
		type: "GET",
		url: url,
		success: response => {
			/* Use the ExtendScript function to display the downloaded file */
			csInterface.evalScript(`openDocument("${response.message}")`);
		},
		error: (jqXHR, textStatus, errorThrown) => { 
			alert(errorThrown, jqXHR.responseJSON);
		}
	})

}

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
    res.json({ message: 'Welcome to the application.' })
})

const server = app.listen(3001, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('Listening on %s port %s', host, port)
})