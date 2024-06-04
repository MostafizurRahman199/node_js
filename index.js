const fs = require("fs");
// console.log(fs);

const hello = "Hello world";
// console.log(hello);

// //blocking synchrous way
// const textInput = fs.readFileSync("./txt/input.txt", 'utf-8' )
// console.log(textInput);
// const textOut = `${textInput}\n We also love Barishal , It's my home town.\n ${Date.now()}`;
// fs.writeFileSync('./txt/input.txt', textOut);

//blocking asynchronous way

fs.readFile("./txt/file1.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile(`./txt/${data2}.txt`, "utf-8", (err, data3) => {
      fs.readFile(`./txt/${data3}.txt`, "utf-8", (err, data4) => {
        fs.writeFile(`./txt/input.txt`, `${data4}`, `utf-8`, (err) => {
          console.log(`File has been written👍`);
        });
      });
    });
  });
});

console.log("Read file");
