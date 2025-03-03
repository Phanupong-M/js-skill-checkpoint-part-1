// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";

const calculateTotalPrice = (products,promotionCode) =>{
    let totalPrice = 0
    let discountPrice = 0
    for (let productArr of products){
      totalPrice += productArr["price"] * productArr["quantity"] 
    }

    if (promotionCode === "SALE50"){
        discountPrice = totalPrice - (totalPrice*0.5)
    }else if (promotionCode === "SALE20"){
        discountPrice = totalPrice - (totalPrice*0.2)
    }else{
        discountPrice = totalPrice
    }

    return discountPrice
}

console.log(calculateTotalPrice(products,promotionCode))