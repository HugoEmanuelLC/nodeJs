const {profil, pi} = require('./part')

console.log(profil);
console.log(pi);

console.log("///////////////////////////////////////");

const os = require('node:os')
const fs = require('node:fs')

const url = __dirname

async function createFile(docier){
    await docier;
    fs.appendFile(url+docier+'/hugo.text', 'first test, create !', (ok, err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Fichier creer");
        }
    })
}

function docierCreer() {
    fs.mkdir(url+'/TESTdocier', (ok, err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Docier creer");
            createFile('/TESTdocier')
        }
    })
}
// docierCreer()


console.log("///////////////////////////////////////");

// console.log(fs.readFileSync(`${url}/TESTdocier/hugo.text`, 'utf-8'));

fs.mkdir(`${url}/test`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('dossier creer !!!');
        fs.writeFile(`${url}/test/notes.txt`, 'I am a BeCode warrior !', (error)=>{
            if (error) {
                console.log(error);
            } else {
                console.log('fichier creer !!!');
                console.log(fs.readFileSync(`${url}/test/notes.txt`, 'utf-8'));
            }
        })
    }
})

setTimeout(() => {
    console.log(fs.existsSync(`${url}/test/notes.txt`));
}, 3000);

setTimeout(() => {
    fs.unlink(`${url}/test/notes.txt`, (err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log('Fichier supprimer !');

            fs.rmdir(`${url}/test`, (err)=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log('Dossier supprimer');
                }
            })
        }
    })
}, 5000);

setTimeout(() => {
    console.log(fs.existsSync(`${url}/test/notes.txt`));
}, 8000);