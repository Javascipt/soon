var ejs   = require("ejs"),
    fs    = require("fs"),
    path  = require("path");

module.exports = (function () {
  var packagePath;
  
  function generatePkgJson (data, callBack) {
    var url         = path.join(packagePath, 'package.json');
        templateUrl = path.join(path.resolve(__dirname), '..', 'ressources', 'templates', 'package.template.json'),
        pkgJson = require(templateUrl);
    
    for(var key in pkgJson) {
      if(data[key]) pkgJson[key] = data[key];
    }
    
    fs.writeFile(url, JSON.stringify(pkgJson, null, 4), callBack);
  }
  
  function generateReadMe (data, callBack) {
    var url         = path.join(packagePath, 'README.md');
        templateUrl = path.join(path.resolve(__dirname), '..', 'ressources', 'templates', 'readme.template.ejs');
    
    fs.readFile(templateUrl, function (err, content) {
      if(err) return callBack(err);
      fs.writeFile(url, ejs.render(content.toString(), data), callBack);
    });
  }
  
  function generateMainScript (callBack) {
    var url         = path.join(packagePath, 'soon.js');
        templateUrl = path.join(path.resolve(__dirname), '..', 'ressources', 'templates', 'soon.js');
    
    fs.readFile(templateUrl, function (err, content) {
      if(err) return callBack(err);
      fs.writeFile(url, content.toString(), callBack);
    });
  }
  
  return function (pkgPath, data, callBack) {
    packagePath = pkgPath;
    generatePkgJson(data, function (err) {
      if(err) return callBack(err);
      generateReadMe(data, function (err) {
        if(err) return callBack(err);
        generateMainScript(callBack);
      });
    });
  }
  
}())