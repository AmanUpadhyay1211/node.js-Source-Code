const os = require(`os`)

console.log(os.arch())
console.log(os.platform())
console.log(os.platform())
console.log(os.hostname())
console.log(os.machine())
console.log(os.version())
console.log(os.freemem()/(1024*1024*1024))
console.log(os.totalmem()/(1024*1024*1024))

