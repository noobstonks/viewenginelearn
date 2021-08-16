const express = require("express");
const app = express();
const router = express.Router();


app.set('view engine', 'ejs');
// app.set("view engine", "ejs");

app.get ('/', (req, res)=>{
    res.render('index')
})

  app.listen(8000, () =>{
      console.log("server nyala")
  })

app.get('/greet', (req,res)=>{
    const name = req.query.name || 'void'
    res.render('greet', {
        name
    })
})


