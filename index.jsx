function openDocument(location) {
    alert(location)
}

function alerta() {
    alert('Ahhh jarringui')
}

function openFile() {
    var archivoRef = new File("I:/huffpost/2022/febrero/1_hipra.jpg")
    var importOptions = new ImportOptions(archivoRef)
    app.project.importFile(importOptions)
}

function openDocument2(location) {
    alert(location)
}