//remember to put it in an index.js file to access it due to search error encountered
const app = require('express')()

app.get('/',(_,res) => {
    console.log("User is in")
    res.send('Home Page')
})

app.get('/about',(_,res) => {
    res.status(200).send("About page bro")
    console.log("User is in about page")
})

app.all('*',(_,res)=>{
    res.status(404).send('<h1>Cannot get the resource trying to be accessed</h1>')
})

app.listen(5007,() => {
    console.log("Im in bro")
})