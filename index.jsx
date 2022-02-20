// Function that sends an alert in After Effects
function sendAlert() {
    alert("Custom Alert")
}

// Function that sends an alert with a custom message
function customAlert(alertMessage) {
    alert(alertMessage)
}
// Function that imports a file into the current project.
function openFile() {
    var fileRef = new File("C:/link/to/your/file.jpg")
    var importOptions = new ImportOptions(fileRef)
    app.project.importFile(importOptions)
}
