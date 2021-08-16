const express = require("express");
const app = express();
const router = express.Router();
const users =[]

//nge-parse form dari halaman sebelumnya
app.use (express.urlencoded({extended: false}))

app.set('view engine', 'ejs');

//menampilkan jumlah user
app.get('/', (req,res) =>{
    res.send(`jumlah usernya:  ${users.length}`)
})

//register page untuk menampilkan form register
app.get ('/register', (req,res)=>{
    res.render('register')
})

// post / register untuk melakukan registrasi user
app.post('/register', (req,res)=>{
    const {email, password} = req.body
    users.push({email,password})
    res.redirect('/')
})

//test view engine sebelumnya
// app.get ('/', (req, res)=>{
//     res.render('index')
// })



 app.get('/greet', (req,res)=>{
     const name = req.query.name || 'void'
     res.render('greet', {
         name
     })
 })


app.listen(8000, () =>{
    console.log("server nyala")
})


