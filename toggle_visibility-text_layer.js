// script to toggle visibility of text layers in photoshop file
// USAGE:
// 1. Open a document in PhotoShop
// 2. File > Scripts > Browse... 
// 3. Find this script and open it

// get layers
var artLayers = app.activeDocument.artLayers

// iterate through layers
for (var layer = 0; layer < artLayers.length; layer++) {
    // if the layer is a "TEXT" layer...
    if (artLayers[layer].kind == LayerKind.TEXT) {
        // toggle the true/false value of layer visibility
        artLayers[layer].visible = ! artLayers[layer].visible
    }
}
