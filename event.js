const  EventEmitter = require('events');
// const myEmmiter = new EventEmitter();

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmmiter = new Sales();

myEmmiter.on('newSale', ()=>{
    console.log('There was a new sale!');
})

myEmmiter.on('newSale', ()=>{
    console.log('Customer name is Jhonas');
})

myEmmiter.on("newSale", (stock)=>{
    console.log(`There are ${stock} items left in the stock`);
})

myEmmiter.emit('newSale', 9);


//-----------------------------------------

