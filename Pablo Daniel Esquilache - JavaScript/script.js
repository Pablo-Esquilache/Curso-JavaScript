
//Tabla de multiplicar con ciclo FOR

/*let numero = parseInt(prompt("Ingrese un numero del 1 al 10 para generar su tabla de multiplicacion"))

for(let i = 1; i <= 10; i++){
    let multiplicacion = numero * i;
    document.write(numero + " x " + i + " = " + multiplicacion + "<br>")
}*/

// Ingreso de Palabra correcta con ciclo WHILE

/*let palabra = prompt("Ingrese la palabra correcta").toLowerCase()

while(palabra != "hola"){
    alert("Por favor ingrese la labra correcta");
    palabra = prompt("Vuelva a ingresar la plabra").toLowerCase()
}
alert("Perfector, has ingresado la palabra correcta")*/

//Calculador de cuotas de prestamos

/*let importe = parseInt(prompt("Ingrese el monto del credito a solicitar"));
let cuotas = parseInt(prompt("Ingrese el numero de cuotas que desea, podran ser en 6, 12, 18 y 24 cuotas"));

let resultado = (importe/cuotas);
    
if(cuotas === 6){
    document.write("La cuota de su prestamos es " + (resultado*1.3))
}
else if(cuotas === 12){
    document.write("La cuota de su prestamos es " + (resultado*1.3))
}
else if(cuotas === 18){
    document.write("La cuota de su prestamos es " + (resultado*1.3))
}
else if(cuotas === 24){
    document.write("La cuota de su prestamos es " + (resultado*1.3))
}
else {
    alert("Por favor ingrese un numero correcto")
    cuotas = parseInt(prompt("Ingrese el numero de cuotas que desea"))
    document.write("La cuota de su prestamos es " + (resultado*1.3));
}*/

//Primer desafio entregable
/*
alert("El siguiente algoritmo calculara el precio del prodcuto que desees, sumandole la ganancia establecida al precio indicado")

function saludo (){
    let mensaje = alert("Hola " +nombre + " calculemos el precio del producto que desees...")
}
let nombre = prompt("Dime tu nombre")

saludo(nombre)

//-----------------------------------------------------------------------------------------------------------------

function precioProducto (dato1,dato2){
    let resultado = (dato1*dato2)
    document.write("El precio del prodcuto " + nombreProducto + " es " + resultado)
}

const nombreProducto = prompt("Ingrese el nombre del produto");
let precioInicial;
let ganancia;

do {
    precioInicial = parseFloat(prompt("Ingrese el precio de su producto"))
    ganancia = parseFloat(prompt("Ingrese el porcentaje de ganancia que desea sumar a su producto (por ejemplo, si es %30, igresar 1.3)"))
} while(isNaN(precioInicial) || isNaN(ganancia))

precioProducto(precioInicial,ganancia)*/

//---------------------------------------------------------------------------------------------------------------
/*
let seccion_art = prompt("Elija en que seccion ingresara su articulo. Las opciones son limpieza, bazar, almacen y bebida")
let nombre_art = prompt("Ingrese el nombre del articulo")
let precio_art = parseFloat(prompt("Ingrese el precio del articulo"))
let stock_art = parseInt(prompt("Ingrese el stock del articulo"))
let cantidad_art = 3

class Articulo{
    constructor(seccion, nombre, precio, stock){
        this.seccion = seccion;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    agregar(){
        base_de_datos.push(nuevo_articulo);
        console.log(base_de_datos);
    }
}

nuevo_articulo = new Articulo(seccion_art, nombre_art, precio_art, stock_art);
console.log(nuevo_articulo);

const base_de_datos = [];       
nuevo_articulo.agregar();
*/
//----------------------------------------------------------------------------------------------------------
//Primer entrega Proyecto Final
/*
                    //Declaracion de arrays y variables
const base_datos = [];
let cant_art = 3;
                    //Aplicacion de class para crear objetos
class Articulo {
    constructor (seccion, producto, precio, stock) {
        this.seccion = seccion;
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }
}
                    //Incorporar objetos al array
do {
    let nombre_pro = prompt("Nombre producto").toLocaleLowerCase();
    let seccion_pro = prompt("Ingrese la seccion a la que pertenece el producto").toLocaleLowerCase();
    let precio_pro = parseFloat(prompt("Precio producto"));
    let stock_pro = parseInt(prompt("Stock producto"));
    const prodcuto1 = new Articulo (seccion_pro, nombre_pro, precio_pro, stock_pro);
    base_datos.push(prodcuto1);
}
while (base_datos.length != cant_art);
                    //Mostrar array con objetos
console.log(base_datos);
                    //Aplicando el metodo sort (Ordenando alfabeticamente la seccion de lo productos)
// const stock_productos = base_datos.sort((a,b) => a.producto - b.producto);
// console.log(stock_productos);
base_datos.sort((a,b)=> {
    if (a.seccion > b.seccion){
        return 1;
    }
    if (a.seccion < b.seccion){
        return -1;
    }
    return 0;
}
)
                    //Aplicando el metodo find
let buscar_nombre = prompt("Ingrese el nombre del producto a buscar").toLocaleLowerCase();
const buscar = base_datos.find((articulo) => articulo.producto === buscar_nombre);
console.log(buscar);
*/
//-----------------------------------------------------------------------------------------------------------
//Segundo desafio complementario
/*
const base_datos = [];
let cant_art = 3;
                    
class Articulo {
    constructor (producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }
}

do {
    let nombre_pro = prompt("Nombre producto").toLocaleLowerCase();
    let precio_pro = parseFloat(prompt("Precio producto"));
    let stock_pro = parseInt(prompt("Stock producto"));
    const prodcuto1 = new Articulo (nombre_pro, precio_pro, stock_pro);
    base_datos.push(prodcuto1);
}
while (base_datos.length != cant_art);
               
console.log(base_datos);

for (const producto of base_datos) {
    let pantalla = document.createElement("div");
    pantalla.innerHTML =   `<h2>${producto.producto}</h2>
                            <p>${producto.precio}</p>
                            <p>${producto.stock}</p>`
    add .document.body.appendChild(pantalla);
}
*/
//-------------------------------------------------------------------------------------------------------------
//Desafio incorparar objetos al DOM

const boton = document.getElementById('formulario_carga');

const div_producto = document.getElementById('productos')

const base_datos = [];

class Articulo {
    constructor (producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }
}

boton.addEventListener('submit', (e) => {  
    e.preventDefault()      

    let nombre_art = document.getElementById('nombre_producto').value;
    let precio_art = parseFloat(document.getElementById('precio_producto').value);
    let stock_art = parseInt(document.getElementById('stock_producto').value);

    const producto1 = new Articulo (nombre_art, precio_art, stock_art);

    base_datos.push(producto1)

    div_producto.innerHTML = " "

    for (const producto of base_datos) {
        let pantalla = document.createElement("div");
        pantalla.classList.add('div_articuulo')
        pantalla.innerHTML =   `<h2>${producto.producto}</h2>
                                <p>${producto.precio}</p>
                                <p>${producto.stock}</p>`
        div_producto.appendChild(pantalla);}
        
        formulario_carga.reset()
        })


const ordenar = document.getElementsByClassName('ordenar');

ordenar.addEventListener('click', () => {
    const nueva_base_datos = base_datos.map((user) => user.producto, user.precio, user.stock);

    nueva_base_datos.sort((a,b)=> {
        if (a.producto > b.producto){
            return 1;
        }
        if (a.producto < b.producto){
            return -1;
        }
        return 0;
    })

    div_producto.innerHTML = " "    

    for (const producto of nueva_base_datos) {
        let pantalla = document.createElement("div");
        pantalla.classList.add('div_articuulo')
        pantalla.innerHTML =   `<h2>${producto.producto}</h2>
                                <p>${producto.precio}</p>
                                <p>${producto.stock}</p>`
        div_producto.appendChild(pantalla);}
        
        formulario_carga.reset()

    })
        
    
//------------------------------------------------------------------------------------------------------------


