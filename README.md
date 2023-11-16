# nodeJs

cours backend de nodeJs

- **resources interessantes:**
    * https://devdocs.io/node
    * https://nodejs.org

### commandes terminal:

- node
- node NomFichier.js



### variables globals:

- **globalThis** variables qui contiens les variables windows (navigateur) et global (server)
- __dirname
- __filename



### systemes de modules de NodeJs:

* .js -> Par default utilize CommonJS  
* .mjs -> Par default utilize ES (ECMAScript) Modules    
* .cjs -> Pour forcer à utilizer CommonJS  

* **Liste des modules integré dans node [https://www.w3schools.com/nodejs/ref_modules.asp]**

- ##### CommonJS Module Export and Require:

```js
// calcul.js
function sum(a, b) {
    return a+b
}
module.exports = sum

// script.js
const sum = require('./calcul')
sum(3, 2)
```
ou

```js
// calcul.js
function sum(a, b) {
    return a+b
}
module.exports = {
    sum
}

// script.js
const { sum } = require('./calcul')
sum(3, 2)
```

- ##### ES (ECMAScript) Module Export and Require:

```js
// calcul.mjs
export function sum(a, b) {
    return a+b
}
export function soustraction(a, b) {
    return a+b
}

// script.mjs
import { sum, soustraction } = from './calcul'
sum(3, 2)
soustraction(3, 2)
```


### File System Module

- fs.readFile(url, (err, data)); // Read file
- fs.writeFile(url, contenu, rappel async); // Write file
- fs.unlink(url); // Delete file
- fs.mkdir(url, rappel async); // Creates a folder
- fs.existsSync(url) // pour verifier si un dossier ou fichier existe (boolean)
- fs.rmdir(url, rappel async); // Delete a folder

```js
const fs = require('node:fs')

const url = __dirname

async function createFile(docier){
    // attendre que le dossier soit creer
    await docier

    // creation du fichier
    fs.writeFile(url+docier+'/hugo.text', 'first test, create !', (ok, err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Fichier creer");
        }
    })
}

function docierCreer() {
    // creation du dossier
    fs.mkdir(url+'/TESTdocier', (ok, err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Docier creer");
            // appel à la creation du fichier
            createFile('/TESTdocier')
        }
    })
}

docierCreer()
```

* *OU*

```js
const fs = require('node:fs')

// creation du dossier
fs.mkdir(`${url}/test`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('dossier creer !!!');

        // creation du fichier
        fs.writeFile(`${url}/test/notes.txt`, 'I am a BeCode warrior !', (error)=>{
            if (error) {
                console.log(error);
            } else {
                console.log('fichier creer !!!');

                // afficher le contenu du dossier
                console.log(fs.readFileSync(`${url}/test/notes.txt`, 'utf-8'));
            }
        })
    }
})
```