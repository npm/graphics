var cleanSketch = require("clean-sketch")
var fs = require("fs")
var svg = cleanSketch(fs.readFileSync(__dirname + "/../output/npm_logo_pixels.svg", "utf-8"))

fs.writeFileSync(__dirname + "/../output/npm_logo_pixels_clean.svg", svg)
