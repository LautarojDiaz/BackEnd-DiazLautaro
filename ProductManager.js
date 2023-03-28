export default class ProductManager {
    #products
    #productId
    constructor(){
        this.#products = []
        this.#productId=1
    }

    addProduct(title,description,price,thumbnail,code,stock){
        const prodWithSameCode=this.#products.find((prod)=>prod.code===code)
        if(!title||!description||!price||!thumbnail||!code||!stock||prodWithSameCode){
            if(prodWithSameCode){
                console.log("Error el codigo de producto ya existe");
            }else{
                console.log("Error Alguno de los campos esta incompleto");
            }
        }else{
            let product={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id:this.#productId
        }
            this.#products.push(product)
            this.#productId++  
        }
    }
    getProducts(){
        return this.#products
    }
    getProductById(id){
        const productFindById=this.#products.find((prod)=>prod.id===id)
        if(!productFindById){
            console.log("Not Found");
        }else{
            return productFindById
        }
    }
}