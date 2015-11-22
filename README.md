# soon

![soon](https://travis-ci.org/Javascipt/soon.svg)

This is a coming soon package generator, it allows you to generate a package with all its files (package.json, README.md and a script returns empty object when required) just to let you first publish a package and work on it later!

### Installation
```bash
$ [sudo] npm install -g soon
```
### How does it work

You just need to get to a directory and run the command `soon`

```bash
$ cd /path/to/your/directory
$ soon
```

You'll be asked some simple questions, once you answer them, you'll find a package.json, a sample script as main script and a README.md files. All you need to do then, is to run 

```bash
$ npm publish
```

Here is a [demo](https://www.npmjs.com/package/soon-example) of a generated package !


### Quick tip:

after generating your files you can take a quick look at the README.md file using the [detail](https://www.npmjs.com/package/detail) package, you can then modify your file and then publish your package

### License
MIT
