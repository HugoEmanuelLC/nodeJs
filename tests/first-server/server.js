const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer()

const listUrl = [
    {patch: "/", componet: __dirname+'/home.html'},
    {patch: "/page2", componet: __dirname+'/page2.html'}
]

server.on('request', (request, response)=>{
    let verifPatch = false
    let componet = ""

    listUrl.forEach(element => {
        console.log(element.patch == "/");
        element.patch == request.url ? (verifPatch = true, componet = element.componet) : false
    });

    setTimeout(() => {
        if (verifPatch == true) {
            fs.readFile(componet, 'utf-8',(err, data)=>{
                if (err) {
                    console.log(err);
                    response.write('page pas trouve, probleme de server')
                    response.end()
                } else {
                    response.write(data)
                    response.end()
                }
            })
        }else{
            fs.readFile(__dirname+'/error.html', 'utf-8',(err, data)=>{
                if (err) {
                    console.log(err);
                    response.write('page pas trouve, probleme de server')
                    response.end()
                } else {
                    response.write(data)
                    response.end()
                }
            })
        }
    }, 300);
})

server.listen(8000)