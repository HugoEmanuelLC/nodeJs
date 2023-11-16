const express = require('express')
const app = express()
// const router = express.Router()
const port = 3000

// moteur ejs
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const posts = [
    {
        title: "Post one",
        description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "King Philippe",
    },
    {
        title: "Post two",
        description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Barack Obama",
    },
    {
        title: "Post three",
        description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Nelson Mandela",
    },
];

let addlist = []

// router
const rootFolio = __dirname+'/views/'
app.get('/', (req, res)=>{
    res.render(rootFolio+'index', {page:rootFolio+'pages/home', titre: "home" })
})

app.post('/', (req, res)=>{
    res.json({
        school: "BeCode",
        year: "2023"
    })
})

app.get('/about', (req, res)=>{
    res.render(rootFolio+'index', {page:rootFolio+'pages/about', titre: "about" })
})

app.get('/about-us', (req, res)=>{
    res.status(301).redirect('/about')
})

app.get('/hours', (req, res)=>{
    res.render(rootFolio+'index', {page:rootFolio+'pages/hours', titre: "hours" })
})

app.get('/tabeau-objets', (req, res)=>{
    if (posts.length == 0) {
        res.render(rootFolio+'index', {page:rootFolio+'pages/tableau_test', titre: "tableau d'objets", error: "no posts found"})
    } else {
        res.render(rootFolio+'index', {page:rootFolio+'pages/tableau_test', titre: "tableau d'objets", posts: posts})
    }
})

app.get('/add', (req, res)=>{
    res.render(rootFolio+'index', {page:rootFolio+'pages/add', titre: "add", error: "" })
})
app.post('/add', (req, res)=>{
    if(req.body.msg == '' || req.body.msg == undefined){
        res.render(rootFolio+'index', {page:rootFolio+'pages/add', titre: "add", error: "rien envoie !" })
    }else{
        addlist.push(req.body.msg)
        res.redirect('/listAdd')
    }
})
app.get('/listAdd', (req, res)=>{
    if (addlist.length >= 1) {
        res.render(rootFolio+'index', {page:rootFolio+'pages/list-add', titre: "listadd", tableau: addlist })
    } else {
        res.render(rootFolio+'index', {page:rootFolio+'pages/list-add', titre: "listadd", error: "tableau vide" })
    }
})


app.get('*', (req, res)=>{
    res.status(404).render(rootFolio+'index', {page:rootFolio+'pages/error', titre: "error 404" })
})

// app.use((req, res) => {
//     res.status(404).render(rootFolio+'index', {page:rootFolio+'pages/error'})
// });

app.listen(port, ()=>{
    console.log("express connecter");
})

