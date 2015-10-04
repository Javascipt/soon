# soon
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

The README.md file will look like this :

_______________________

<p align="center">

  <br><br>
  <b> We are not ready yet, we are probably wearing our hardhats and hardgloves to get this package released !!</b>
  <br>

  <img src="https://raw.githubusercontent.com/Javascipt/soon/master/ressources/icons/icon.png" />
  <br><br><br>

  Make sure to follow us on twitter and github to be updated and be the first one to test our <b>AWSOME</b> package !
  <br><br>
  
  <a target="_blank" href="http://twitter.com/javascipt">
    <img src="https://raw.githubusercontent.com/Javascipt/soon/master/ressources/icons/twitter.png">
  </a>
  
  <a target="_blank" href="http://github.com/javascipt">
    <img src="https://raw.githubusercontent.com/Javascipt/soon/master/ressources/icons/github.png">
  </a>
</p>

______________________

### Quick tip:

after generating your files you can take a quick look on the README.md file using the [detail](https://www.npmjs.com/package/detail) package, you can then modify your file and then publish your package

### License
MIT
