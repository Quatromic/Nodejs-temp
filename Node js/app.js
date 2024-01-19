const {createReadStream} = require('fs')
const {writeFileSync} = require('fs')

writeFileSync('./content/sub-content/fourth.txt',"A yikibo a shayo")
const stream = createReadStream('./content/sub-content/fourth.txt',{highWaterMark:9000,encoding:"utf-8"})

stream.on('data',(result) => {
    console.log(result)
})
stream.on('error',(result) => {
    console.log(result)
})