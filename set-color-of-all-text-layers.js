// script to set color of all text layers in a photoshop document
// USAGE:
// 1. Open a document in PhotoShop
// 2. File > Scripts > Browse... 
// 3. Find this script and open it

// Set the color values by changing only the numbers here (0–100 as a percentage)
var C = 0
var M = 100
var Y = 0
var K = 0

// loop through all groups and layers
processLayers(app.activeDocument);

// adapted from https://community.adobe.com/t5/photoshop-ecosystem-discussions/accessing-all-the-layers-in-all-the-layer-sets/m-p/10392739
function processLayers(o) {
    var i;
    var layer;
    for (i = 0; i < o.layers.length; i++) {
        layer = o.layers[i];
        // if (layer instanceof LayerSet) {
        if (layer.typename === "LayerSet") {
            // If it’s a layer set (AKA "a group"), recurse (call self).
            processLayers(layer);
        }
        else {
            // if it’s a layer, try to change the text color
            if (layer.kind === LayerKind.TEXT) {
                changeTextColor(layer);
            }
        }
    }
}

// set color
function changeTextColor(layer) {
    layer.textItem.color.cmyk.cyan = C
    layer.textItem.color.cmyk.yellow = Y
    layer.textItem.color.cmyk.magenta = M
    layer.textItem.color.cmyk.black = K
}
