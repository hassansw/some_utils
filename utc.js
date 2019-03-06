console.clear()

const moment = require('moment')

const currentDate = moment().format('ZZ')
const finDate = parseFloat(currentDate)/100

console.log(finDate)