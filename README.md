# PhotoShop Scripts

## Using scripts

In PhotoShop, you can run a script by:
1. **File > Scripts > Browse...**
2. Open

### To run a script on multiple PSD files:

1. create a new Action (call it something like `toggle-text-layer-visibility`) and record...
   1. **File > Scripts > Browse...** 
   2. Find this script and open it
   3. File > Save (`command`+`s`)

2. Then, use **File > Automate > Batch...**
   1. Select the action
   2. Select the folder of images
   3. Don't override the save location, unless you want to save duplicates elsewhere

## Scripts

### toggle_visibility-text_layer.js

This script goes through the layers in the current document and toggles the visibility of text layers.

You must have a document already open to run this script.

## PhotoShop script development – the basics

You can code your script in any editor (e.g. VS Code, Atom, Sublime Text, etc), and save the `.js` file wherever. Then, in PhotoShop, you can run that script with **File > Scripts > Browse...**.

**console.log() / print to console**

If you want log stuff during development (you probably do), you will need to install ExtendScript, then use `$.writeln()`.

To install ExtendScript: in Creative Cloud, go to the menu item **Creative Cloud > Preferences > Apps > Settings > Show Older Apps**. This will then let you see and install ExtendScript in the list of CC apps.

Open ExtendScript. When you run a script from PhotoShop, log statements will show up in the console of  ExtendScript. You can detach this console window and put it next to your main code editor & PhotoShop, and pretty much ignore the rest of the ExtendScript window.

```JavaScript
$.writeln("hello world")
```

**Getting stuff**

To access the object model and do stuff, use `app`. To do stuff to the current document, use `app.activeDocument`. Make this faster by creating variables:

```JavaScript
var currentDoc = app.activeDocument // get current doc
var artLayers = currentDoc.artLayers // get art layers
$.writeln(currentDoc, artLayers)
```

**Doing stuff**

See the PhotoShop [JavaScript API Docs](https://www.adobe.com/content/dam/acom/en/devnet/photoshop/pdfs/photoshop-cc-javascript-ref-2019.pdf) for a reference of the document object model and what you can do to those objects.

See `toggle_visibility-text_layer.js` for a simple example of a script that does stuff to PhotoShop documents.