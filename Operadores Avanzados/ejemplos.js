// Muy buena propuesta

class Productos {
    constructor (marca, costo, stock , tamanio="no aplica"){
    this.marca=marca;
    this.tamanio=tamanio;
    this.precio=costo;
    this.stock=stock;
    this.precioventa= this.tamanio*1.121;
    }
}

const alfajor = new Producto("Terrabusi", 180, 60, "50g");
const chupetin = new Producto ("Arcor", 35, 100)
const cichle = new Producto("Bazooka", 80, 300, "unidad");
const caramelos = new Producto("FlinnPaff", 50, 120, "unidad");


const harina =new Producto("Blanca Flor", 290, 8, "1kg");
const yerba = new Producto ("Tranquera", 359, 12, "500g")
const azucar = new Producto("Fronterita", 425, 10, "1kg");
const mermelada = new Producto("La campagnola", 350, 5, "390g");

const leche = new Producto("la serenísima", 315, 12, "1lt");
const queso = new Producto ("La Paulina", 796, 5, "1kg")
const yogurth = new Producto("Yogurìsimo", 198, 10, "unidad");

const tomate =new Producto("redoondo", 390, 15, "1kg");
const naranja = new Producto ("de ombligo", 399, 20, "1kg")
const pera = new Producto("", 395, 18, "1kg");
const cebolla = new Producto("", 286, 50, "1kg");


// Renderizar tarjetas de producto que muestren en el DOM los productos disponibles organizados por categorìa

// function calcularInversion(tienda) que devuelve cuanto dinero se gastó ens tockear la tienda y cuales la ganancia que se obtendra de la venta de todos los productos en stock

// además me gustaría tb que haya un !formulario" donde haya deplegables con las "categorías" y según que categoría elijo me muestre los productos en la pantalla