// filtering the product I can buy when I don't have much money



const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];


 const cheapone= items.filter(item=>item.price <= 10)
 console.log(cheapone)


const expensive = items.filter(item=>item.price > 500)
console.log(expensive)


// to calculate the full price of the price
const result = items.reduce((initialnumber, curentItem)=> initialnumber + curentItem.price,0 );
console.log(result)


// to calculate the full price but remove the product which is under $10
let a = items.filter((item)=>item.price > 10).reduce((v,c)=>v+c.price,0);
 console.log(a)


 let b = items.filter((item)=>item.name.startsWith("b"))
 