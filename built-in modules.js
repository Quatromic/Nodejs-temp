const os = require('os')
const path = require('path')

//Get user info
const user = os.userInfo()
//Get system uptime in seconds
const uptime = os.uptime()
//Get OS info

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
const filePath = path.join('/content','/text.txt')
const base = path.basename(filePath)
const resolve = path.resolve(__dirname,'content','text.txt')

console.log(`System uptime: ${uptime}s`)
console.log(currentOS)

console.log(filePath)
console.log(base)
console.log(resolve)