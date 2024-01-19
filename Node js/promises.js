const util = require('util')
const {readFile,writeFile} = require('fs').promises
/*const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)*/

/*const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf-8',(err,data) => {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

//getText('./content/result.txt').then((result) => console.log(result)).catch(error => console.log(error))*/

const Start = async () => {
    try{
        const First = await readFile('./content/result.txt','utf-8')
        const second = await readFile('./content/sub-content/first.txt','utf-8')
        await writeFile('./content/sub-content/second.txt',`This is very cool of node.js: ${second}`)
        console.log(First + " : " + second)
    }catch(error){
        console.log(error)
    }
    finally{
        console.log("Promise complete")
    }
}

Start()