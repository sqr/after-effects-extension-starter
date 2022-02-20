// Loading Jquery
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

// Create an instance of CSInterface.
var csInterface = new CSInterface();

// Use a CEP method to open the server extension.
csInterface.requestOpenExtension("com.my.localserver", "");

// Make a reference to your HTML button and add a click handler.
var alertButton = document.querySelector("#alert-button");
alertButton.addEventListener("click", runAlert);

// Write a helper function to pass instructions to the ExtendScript side.
function runAlert() {
  csInterface.evalScript("alert()");
}

var importButton = document.querySelector("#import-button");
importButton.addEventListener("click", openFile);

function openFile() {
  csInterface.evalScript("openFile()");
}

var alertExternalButton = document.querySelector("#alert-external-button");
alertExternalButton.addEventListener("click", alertExternal);

function alertExternal() {
  // Use ajax to communicate with your server
  $.ajax({
    type: "GET",
    url: "http://localhost:3002/test",
    success: (response) => {
      // Executes a JSX function with custom code based on the response from the server.
      csInterface.evalScript(`customAlert("${response.message}")`);
    },
    error: (jqXHR, textStatus, errorThrown) => {
      alert(errorThrown, jqXHR.responseJSON);
    },
  });
}

// Other Useful Snippets. Feel free to PR to add more

// Get the path for your panel
var extensionDirectory = csInterface.getSystemPath("extension");
