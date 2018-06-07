{"filter":false,"title":"webpack.config.js","tooltip":"/webpack.config.js","ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":10,"column":15},"end":{"row":10,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":175,"mode":"ace/mode/javascript"}},"hash":"2436d2de1521eb1d63edeb177c05b9a0d1dbfe56","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["var path = require(\"path\");","var webpack = require(\"webpack\");","","module.exports = {","  \"devtool\": \"source-map\",","  \"entry\": {","    //main entry","    \"main\": path.resolve(__dirname, \"./js/src/main.ts\"),","","    //third-party libraries","    \"vendor\": [","      //others ommitted","      \"webfontloader\"","    ]","  },","  \"output\": {","    \"path\": \"./js/build\",","    \"filename\": \"[name].bundle.js\"","  },","  \"resolve\": {","    \"alias\": {","","      //webfontloader (https://github.com/typekit/webfontloader)","      \"webfontloader\": path.resolve(__dirname, \"./node_modules/webfontloader/webfontloader.js\")","    },","    \"extensions\": [\"\", \".webpack.js\", \".web.js\", \".js\", \".ts\"],","    \"modulesDirectories\": [\"node_modules\", \"bower_components\"]","  }","};"],"id":1}]]},"timestamp":1528236172634}