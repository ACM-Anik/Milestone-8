// use localStorage to manage cart data:--

/*
const addToDB = id => {
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log('Already exists');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
        console.log('new item')
        localStorage.setItem(id, 1); 
    }  
}
*/

const addToDB = id => {
    let shoppingCart = {};

// get the shopping cart from local storage:
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }

// add quantity:
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] =newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDB = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {addToDB, removeFromDB, deleteShoppingCart};