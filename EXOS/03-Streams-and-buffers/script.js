


const fs = require('node:fs');

const readStream = fs.createReadStream(__dirname+"/hugeText.html", 'utf-8');
const writeStream = fs.createWriteStream(__dirname+"/newText.html", 'utf-8');

// function fichier(params) {
//     fs.watchFile(`${__dirname}/newFile.html`)
// }

// readStream.on("data", (chunk) => {
//     console.log("--------- NEW CHUNK --------");
//     console.log(chunk);

//     writeStream.write('---------  new text --------- ')
//     writeStream.write(chunk)
// });

readStream.pipe(writeStream)

writeStream.on('finish', ()=>{
    console.log('Copie terminee avec succés.');
})