#!/usr/bin/env node

var path      = require("path"),
    generator = require("./lib/generator"),
    cli       = require("./lib/cli");

cli.add('name', 'What is the name of your package ?', path.basename(path.resolve('.')))
  .add('version', 'what is its version ?', '0.0.0')
  .add('description', 'write a little description')
  .add('keywords', 'some keywords seperated by commas', '', function (entry) { 
    return entry.split(',').map(function (item) { 
      return item.trim() 
    }) 
  })
  .add('twitter', 'your Twitter username')
  .add('github', 'your GitHub username')
  .ask(function (data) {
    generator(path.resolve('.'), data, function (err) {
      if(err) console.log(err);
      process.exit(0);
    });
  });