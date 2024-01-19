const {readFile,writeFile, read} = require('fs')

readFile('./content/text.txt','utf-8',(err,result) => {
    if(err){
        console.log(err)
        return 
    }
    const first = result
    readFile('./content/sub-content/first.txt','utf-8',(err,result) => {
        if(err){
            console.log(err)
            return 
        } 
        const second = result
        writeFile('./content/result.txt',`Here is the data required:${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})