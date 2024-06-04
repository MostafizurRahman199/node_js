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

const http = require('http');
const url = require('url');


const server = http.createServer((req, res)=>{
   const pathname = req.url;

   console.log(pathname);

   if(pathname === '/login' || pathname=== '/'){
    res.end("You want to login")
   }
   else if(pathname === '/signup'){
    res.end("You want to signup");
   }
   else{
    res.writeHead(404,{
        'Content-type':'text/html',
    });
    res.end(`<h1>Page not found</h1>`);
   }


 
})


server.listen('8000', '127.0.0.1', ()=>{
    console.log('Hello this server is listening on port 8000');
})






