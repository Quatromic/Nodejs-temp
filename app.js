const lodash = require('lodash')
const moment = require('moment')

const date = new Date()
const newDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

const items = [1,[2,[4,[5,[6,[7]]]]]]
const newItems = lodash.flattenDeep(items)
console.log(newItems)
console.log(newDate)