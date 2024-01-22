const app = require('express')()
const path = require('path')

app.use(require('express').static('./public'))
//app.get('/',(_,res) => {
    /*res.status(200).send(`
        <h1 style="text-align:center;font-family:sans-serif;text-decoration:underline;">Hello World</h1>
    `)*/
    /*res.sendFile(path.resolve(__dirname,'./index.html'))*/
//})

app.all('*',(_,res) => {
    res.status(404).send(`
        <h1>Not found</h1>
    `)
})

app.listen(5006,() => {
    console.log("User is in the page")
})