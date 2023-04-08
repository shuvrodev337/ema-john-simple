import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async ()=>{
const loadedProducts = await fetch('products.json')
const products = await loadedProducts.json()

// If Data is in the Database, we have to use async await
const storedCart = getShoppingCart()
const savedCart = []
for (const id in storedCart) {
    const addedProduct = products.find(pd => pd.id === id)
    if (addedProduct) {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
    }
}

//If we need to send two things
// return [products, savedCart]
// or
//  return {products, cart: savedCart}


return savedCart
}
export default cartProductsLoader