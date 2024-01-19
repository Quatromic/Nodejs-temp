//Synchronous calling - blocking

const {readFileSync,writeFileSync, read} = require('fs')
const path = require('path')
const actual = path.resolve(__dirname,'content','sub-content','first,txt')

const first = readFileSync('./content/sub-content/first.txt','utf-8'),second = readFileSync('./content/text.txt','utf-8')
writeFileSync('./content/text.txt','Here is the second file using noddejs',{flag:'a'})
console.log(first + " " + second)