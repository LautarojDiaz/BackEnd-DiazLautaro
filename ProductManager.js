
export default class ProductManager {
    #products
    #productId
    #route

    constructor(route){
        this.#products = []
        this.#productId=1
        this.#route = route
    }

    addProduct(title, description, price, thumbnail, code, stock){
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

            this.#route.save(this.#products)  
        }
    }

    updateProduct(id, newProduct){
        const index = this.#products.findIndex((prod)=>prod.id===id)
        if(index === -1){
            console.log("Product not found")
        } else {
            this.#products[index] = {...newProduct, id}
            this.#route.save(this.#products)
        }
    }

    deleteProduct(id){
        const index = this.#products.findIndex((prod)=>prod.id===id)
        if(index === -1){
            console.log("Product not found")
        } else {
            this.#products.splice(index, 1)
            this.#route.save(this.#products)
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