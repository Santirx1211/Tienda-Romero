class Producto{
    constructor(id, nombre, valor, stock, img){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.valor = valor;
        this.stock = stock;
        this.img = img;
    }
}
//array
const productos= []

//Listado
function listadoProductos() {
    productos.push(new Producto(1,"DADOS DE ROL ROJOS",700,5,'img/Dados-rojos.png' ));
    productos.push(new Producto(2,"DADOS DE ROL AMARILLOS",700,2,'img/Dados-amarillos.png'));
    productos.push(new Producto(3,"TAZA DE STAR WARS",530,4,'img/Taza-Star-Wars.png'));
    productos.push(new Producto(4,"MANGA DE DRAGON BALL",750,10,'img/Manga-Dbs.png'));
    productos.push(new Producto(5,"CARTAS DE YUGIOH",350,150,'img/Sobre-Yugioh.png'));
    productos.push(new Producto(6,"CARTAS MAGIC",350,50,'img/Sobre-Magic.png'));
    productos.push(new Producto(7,"TAZA DE DEATH NOTE",530,2,'img/Taza-Death-Note.png'));
}

listadoProductos()

//agregar DOM

function renderizarProductosAlDom() {
    let container = document.querySelector(".container");
    productos.forEach(el =>{
        let div = document.createElement("div");
        div.className = "card"
        div.innerHTML = `<img class="card-img" src="${el.img}" />
        <p class="card-title">${el.nombre}</p>
        <p class="card-price">$${el.valor}</p>
        <button id="${el.id}" class="card-btn">Comprar</button>
        `
        container.append(div)
    })
}
renderizarProductosAlDom()


//array carrito
let carrito= [];

//funcion comprar

function comprar(){
    let cardBtn = document.querySelectorAll(".card-btn")
    cardBtn.forEach(el=>{
        el.addEventListener("click", (ev)=>{
            let button = ev.target
            let id = button.id
            console.log(id);
            agregarAlCarrito(id)
        })
    })
}

comprar()
//agregar carrito
function agregarAlCarrito(IdParametro){
    const buscar = productos.find(el=>el.id === parseInt(IdParametro))
    carrito.push(buscar)
    agregarCarritoAlDom()
}

//agregar dom carrito

function agregarCarritoAlDom(){
    let tabla = document.querySelector(".tabla")
    tabla.innerHTML = ""
    carrito.forEach(el =>{
        let tr = document.createElement("tr");
        tr.className = "cart"
        tr.innerHTML = `<td class="table-id">${el.id}</td>
        <td><img class="table-img" src="${el.img}" /></td>
        <td>${el.nombre}</td>
        <td>$${el.valor}</td>
        <td><button class="eliminar-btn">X</button></td>
        `
        tabla.append(tr)
    })
    eliminarProductoDom()
}

//eliminar carrito

function eliminarProductoDom(){
    let eliminarBtn = document.querySelectorAll(".eliminar-btn");
    eliminarBtn.forEach(el=>{
        el.addEventListener("click", (ev)=>{
            let button = ev.target.parentElement.parentElement;
            let eliminarDom = button.querySelector(".table-id");
            button.remove();
            eliminarProductoCart(eliminarDom.innerText);
        });
    })
}

function eliminarProductoCart(id){
    carrito = carrito.filter(el=> el.id !== parseInt(id));
}