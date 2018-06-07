var path = require("path");
var webpack = require("webpack");

module.exports = {
  "devtool": "source-map",
  "entry": {
    //main entry
    "main": path.resolve(__dirname, "./js/src/main.ts"),

    //third-party libraries
    "vendor": [
      //others ommitted
      "webfontloader"
    ]
  },
  "output": {
    "path": "./js/build",
    "filename": "[name].bundle.js"
  },
  "resolve": {
    "alias": {

      //webfontloader (https://github.com/typekit/webfontloader)
      "webfontloader": path.resolve(__dirname, "./node_modules/webfontloader/webfontloader.js")
    },
    "extensions": ["", ".webpack.js", ".web.js", ".js", ".ts"],
    "modulesDirectories": ["node_modules", "bower_components"]
  }
};