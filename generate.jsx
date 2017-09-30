//what do we want to do?
//1) Learn how to change the text on the layer
//Learn how to save JPEG or PNG
//Learn how to read JSON  (read file and parse JSON)

#include json2.js

//1)

var obj = loadJson('lessons.json')
//works like DOM    Groups   inside of groups is layer sets
var titleGroup = app.activeDocument.layerSets.getByName('title');
var titleLayer = titleGroup.layers[0]; //can also search layers by name or by order
titleLayer.textItem.contents = obj.title;
alert(titleGroup.name);

(function main(){
      var lessons = loadJson('lessons.json');

      for (var i = 0; i < lessons.length; i++){
        var lesson = lessions[i];
        processLesson(lesson);
      }
})();

//saveJpeg('hello-world');
//var obj = JSON.parse('{"a": 2}');
//alert(obj.a);

//var obj = loadJson('lessons.json')
//alert(obj.a);

//getting the text content out of the file
function loadJson(relPath){
  var script = new File($.fileName);
  var jsonFile = new File (script.path + '/' + relPath);

  jsonFile.open('r');
  var str = jsonFile.read();
  jsonFile.close();

  return JSON.parse(str);
}


//2)
function saveJpeg(name){
        var doc = app.activeDocument;
        var file = new File(doc.path + '/' + name + '.jpg');

        //file representing the page of file options
        var opts = new JPEGSaveOptions();
        opts.quality = 10;

        doc.saveAs(file, opts, true); //true saves copy of doc not doc itself

}

//3)
//cannot parse JSON w standard means in photoshop
