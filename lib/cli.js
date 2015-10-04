var readline = require('readline');

module.exports = (function (readline) {
  var data  = [],
      intro = '';
      rl    = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

  function addSlashes (str) {
    return str.split('"').join('\"'); 
  }
  
  function ask (index, callBack) {
    if(index < data.length) {
      rl.question(data[index].question + ':' + ( data[index].value ? ('(' + data[index].value + ') ') : ' ' ), function (answer) {
        if(answer != '') data[index].value = (data[index].format ? data[index].format(answer) : answer);
        ask(index + 1, callBack);
      }); 
    } else {
      rl.close();
      callBack(getResult());
    }
  }
  
  function getResult() {
    return data.reduce(function (result, item) {
      result[item.key] = item.value;
      return result;
    }, {});
  }
  
  return {
    intro : function (message) {
      intro = message;
    },
    add : function (key, question, defaultValue, formatCallback) {
      data.push({
        key : key,
        question : question,
        value : (typeof defaultValue === "undefined") ? '' : defaultValue,
        format : formatCallback
      });
      
      return this;
    },
    ask : function (callBack) {
      ask(0, callBack);
    }
  }

})(readline);
