// console.log(fs);

const hello = "Hello world";
// console.log(hello);

// //blocking synchrous way
// const textInput = fs.readFileSync("./txt/input.txt", 'utf-8' )
// console.log(textInput);
// const textOut = `${textInput}\n We also love Barishal , It's my home town.\n ${Date.now()}`;
// fs.writeFileSync('./txt/input.txt', textOut);

//blocking asynchronous way

// fs.readFile("./txt/file1.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     fs.readFile(`./txt/${data2}.txt`, "utf-8", (err, data3) => {
//       fs.readFile(`./txt/${data3}.txt`, "utf-8", (err, data4) => {
//         fs.writeFile(`./txt/input.txt`, `${data4}`, `utf-8`, (err) => {
//           console.log(`File has been written👍`);
//         });
//       });
//     });
//   });
// });

// console.log("Read file");

//server

const http = require("http");
const url = require("url");
const fs = require("fs");
const slugify = require('slugify');

const replaceTemplate = require(`./modules/replaceTemplate`);

const productCard = fs.readFileSync(`${__dirname}/product.html`, `utf-8`);
const overView = fs.readFileSync(`${__dirname}/over-view.html`, `utf-8`);
const singleProductTemplete = fs.readFileSync(`${__dirname}/singleProduct.html`, `utf-8`);

const data = fs.readFileSync(`${__dirname}/json/product.json`, `utf-8`);
const dataObject = JSON.parse(data);


const server = http.createServer((req, res) => {
console.log(req.url);  
console.log(url.parse(req.url, true));

const {query, pathname}= url.parse(req.url, true)



  if (pathname === "/login" || pathname === "/") {
    res.end("You want to login");
  } else if (pathname === "/signup") {
    res.end("You want to signup");
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

   
const productCardHtml = dataObject.map((product) => replaceTemplate(productCard, product)).join("");

    const output = overView.replace(" {%PRODUCT_CARD%}", productCardHtml);
    res.end(output);
  } 
  else if(pathname === '/singleproduct'){
      const singleProduct = dataObject[query.id]  ;
     const output =  replaceTemplate(singleProductTemplete, singleProduct);
    res.end(output);

  }
  
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    
    res.end(`<h1>Page not found</h1>`);
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Hello this server is listening on port 8000");
});
 

