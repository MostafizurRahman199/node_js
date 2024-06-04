
const fs = require('fs');
// console.log(fs);

const hello = "Hello world";
// console.log(hello);


const textInput = fs.readFileSync("./txt/input.txt", 'utf-8' )
console.log(textInput);

const textOut = `${textInput}\n We also love Barishal , It's my home town.\n ${Date.now()}`;
fs.writeFileSync('./txt/input.txt', textOut);

