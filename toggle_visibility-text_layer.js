// script to toggle visibility of text layers in photoshop file
// 
// USAGE:
// 1. Open a document in PhotoShop
// 2. File > Scripts > Browse... 
// 3. Find this script and open it

var debug = false

var layers = app.activeDocument.artLayers

for (var layer = 0; layer < layers.length; layer++) {

    if (debug == true) {
        $.writeln("------------------------------")
        $.writeln(layers[layer].name)
        $.writeln(layers[layer].kind)
        $.writeln(layers[layer].kind == LayerKind.TEXT)
        $.writeln(layers[layer].visible)
    }
    if (layers[layer].kind == LayerKind.TEXT) {
        if (layers[layer].visible == true) {
            layers[layer].visible = false
        } else {
            layers[layer].visible = true
        }
        if (debug == true) {
            $.writeln(layers[layer].name + " is now visibility: " + layers[layer].visible)
        }
    }
}
