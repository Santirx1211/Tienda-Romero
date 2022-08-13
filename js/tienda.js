class Producto{
    constructor(id, nombre, valor, stock, img){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.stock = stock;
        this.img = img;
    }
}

const productos = []
const carrito = []


listadoProductos()
console.table(productos)


renderizarProductosAlDom()


comprar()