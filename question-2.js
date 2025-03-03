// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];


inventory[0].quantity = 200
inventory.push({ name: "Orange", price: 20, quantity: 300})

let totalPriceInStock = 0;
for (let fruit of inventory){
  totalPriceInStock += fruit["quantity"] * fruit["price"]
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPriceInStock} บาท`)
 
