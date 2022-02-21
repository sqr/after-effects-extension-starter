# After Effects 2022 Extension Starter Project

## Installation

- Clone this repository or download it as a .zip and unzip it in your extensions directory. By default, in Windows 10 you can find it in `C:\Program Files\Common Files\Adobe\CEP\extensions`.
- Install Node if you don't already have it, go to the directory using CLI and run `npm install`.
- Enable execution of unsigned and unpacked extensions. For After Effects 2022 this can be done by opening the registry editor (`Windows key + R` and typing `regedit.exe` in the Run window), navigating to `HKEY_CURRENT_USER\SOFTWARE\Adobe\CSXS.11` and adding a new key named PlayerDebugMode with a string value of 1.
- Open After Effects 2022, go to Window --> Extensions and you should see **Starter Extension**

Once the extension is open in After Effects, you can debug the frontend using Chrome Developer Tools by opening Chrome and navigating to `http://localhost:7777`.

Debugging the JSX is much easier with the new [ExtendScript Debugger 2.0](https://community.adobe.com/t5/exchange-discussions/extendscript-debugger-2-0-news/td-p/12477923)

## Description

This repository includes all the necessary elements to start a full-stack plugin for Adobe After Effects 2022.

It has three different elements. A client extension, that handles UI and makes requests, a server extension, that handles requests sent from the client and executes business logic of the extension, and the JSX code, which interacts with After Effects. Functions in JSX code can be triggered from either the client or the server:

- Client extension: **index.html** and **index.js** are the main client files. Buttons and event listeners are added here, as well as requests to the server.
- Server extension: **server/main.js**, an Express server that handles requests on different routes. Loaded in the background using **localServer.html**
- JSX code: **index.jsx**. These functions are the actual code that interacts with After Effects, creating new compositions or importing files into the project.

## More Information

This project has been built thanks to the information contained in different guides, some outdated, some incomplete. In no particular order:

- https://medium.com/adobetech/how-to-build-a-node-js-server-in-a-panel-ba1d63ea67e2
- https://medium.com/adobetech/how-to-create-your-first-adobe-panel-in-6-easy-steps-f8bd4ed5778
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_11.x/Samples/CEP_HTML_Invisible_Extension-10.0
- https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md
- https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md
