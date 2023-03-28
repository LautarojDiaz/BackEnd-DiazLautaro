import ProductManager from './ProductManager.js'


const productManager = new ProductManager()

console.log(productManager.getProducts()); 
productManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log(productManager.getProducts()); 
productManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log(productManager.getProductById(2)); 
console.log(productManager.getProducts());
