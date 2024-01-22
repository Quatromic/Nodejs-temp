const express = require('express')
const app = express()
const products = require('./objects.js')
console.log(products)

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, Header, Description } = product
    return { id, Header, Description }
  })

  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})
app.get('/api/v1/query',(req,res) => {
    const {search,limit} = req.query
    let sortedProducts = [...products]

    if(search){
      sortedProducts = sortedProducts.filter((products) => {
        return products.name.startsWith(search)
      })
    }
    if(limit){
      sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
      //res.status(200).send("No product found that matched your search")
      return res.status(200).json({
        success:true,
        data:[]})
    }
    res.status(200).json(sortedProducts)
    res.send('Hello World')
})

app.listen(5006, () => {
  console.log('Server is listening on port 5000....')
})