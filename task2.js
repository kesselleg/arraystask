// filtering the product I can buy when I don't have much money



const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];


// const cheapone= items.find(item=>item.price <= 10)
// console.log(cheapone)


// const expensive = items.find(item=>item.price > 500)
// console.log(expensive)

const result = items.reduce((initialnumber, curentItem)=> initialnumber + curentItem.price,0 );
console.log(result)