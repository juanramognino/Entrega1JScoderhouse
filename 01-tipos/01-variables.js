//buscarpelis
//reever para alquiler
//reveer como usar while y condiciones
//buscar como hacer para que no de numeros grandes
//averiguar como usar el carrito de compras 
//usar chatgpt para que mejore las palabras, mayusculas, tildes.

function round(numero, decimales = 3) {
    const factor = Math.pow(10, decimales);
    return Math.round(numero * factor) / factor;
}

//funcion peliculas por cada titulo
function Pelicula(titulo, genero, año, edad, precio, alquiler = false, costoAlquilerPorDia = 0, duracionAlquiler = 0) {
    this.titulo = titulo;
    this.genero = genero;
    this.año = año;
    this.edad = edad;
    this.precio = precio;
    this.alquiler = alquiler;
    this.costoAlquilerPorDia = costoAlquilerPorDia;
    this.duracionAlquiler = duracionAlquiler;
}

//creacion de peliculas
let pelicula1 = new Pelicula("Avengers: Infinity War", "Acción", "2018", "+18", 1200);
let pelicula2 = new Pelicula("El Sexto Sentido", "Suspenso", "2002", "+18", 1300);
let pelicula3 = new Pelicula("Titanic", "Romance", "1997", "ATP", 1150);
let pelicula4 = new Pelicula("Thor", "Acción", "2011", "ATP", 1200);
let pelicula5 = new Pelicula("La La Land", "Romance", "2016", "ATP", 3150);
let pelicula6 = new Pelicula("El Conjuro", "Terror", "2013", "+21", 200, true, 50, 7);

//array que contiene todas las peliculas que cree
let items = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6];

//en caso de no pagar en efectivo, aca se defina las tasas de interes para las dif cuotas
let InteresCuotas = {
    3: 5,
    6: 8
};

//variables 
let total = 0;
let carrito = [];

//proceso de compra y alquiler, usando un bucle while para cada opcion, dentro de el estan las diferetes opciones para alquiler
// compra , ver el carrito, finalizar la compra (averiguar como hacer para no poder finalizar la compra sin haber selecc algo)
//
function carritoCompra() {
    console.log("¡Bienvenido a nuestro sistema de compra y alquiler de películas!");

    while (true) {
        console.log("Para comprar una película, ingrese la letra 'A'.");
        console.log("Para alquilar una película, ingrese la letra 'B'.");
        console.log("Para ver el carrito de compras, ingrese la letra 'C'.");
        console.log("Para finalizar la compra, ingrese la letra 'D'.");
        let selector = prompt('Ingrese la opción deseada').toLowerCase();

    //SELECCION CON LETRA A compra de pelis
        if (selector === "a") {
            console.log("PELÍCULAS DISPONIBLES PARA SU COMPRA");
            for (let i = 0; i < items.length; i++) {
                console.log(`${i + 1}: ${items[i].titulo} - ${items[i].genero} (${items[i].año}) - ${items[i].precio} pesos`);
            }
            let seleccion = parseInt(prompt('Seleccione el número de la película que desea comprar:')) - 1;
            total += items[seleccion].precio;
            carrito.push(items[seleccion]);

    //SELECCION CON LETRA B, que esta sea de alquiler
        } else if (selector === "b") {
            console.log("PELÍCULAS DISPONIBLES PARA ALQUILER");
            for (let i = 0; i < items.length; i++) {
                if (items[i].alquiler) {
                    console.log(`${i + 1}: ${items[i].titulo} - ${items[i].genero} (${items[i].año}) - ${items[i].costoAlquilerPorDia} pesos por día`);
                }
            }
            let seleccion = parseInt(prompt('Seleccione el número de la película que desea alquilar:')) - 1;
            let diasAlquiler = parseInt(prompt('Ingrese la cantidad de días de alquiler:'));
            total += items[seleccion].costoAlquilerPorDia * diasAlquiler;
            carrito.push(items[seleccion]);

    //SELECCION CON LETRA C carro de compras
        } else if (selector === "c") {
            console.log("CARRITO DE COMPRAS");
            for (let i = 0; i < carrito.length; i++) {
                console.log(`${i + 1}: ${carrito[i].titulo} - ${carrito[i].genero} (${carrito[i].año}) - ${carrito[i].precio} pesos`);
            }
            console.log(`Total: ${total} pesos`);
        } else if (selector === "d") {
            break;
        }
    }

    console.log(`El total de la compra es de ${total} pesos.`);
    console.log("Para pagar en efectivo, ingrese 'E'.");
    console.log("Para pagar en cuotas, ingrese 'F'.");
    let metodoPago = prompt('Seleccione la forma de pago:').toLowerCase();
    //SELECCION CON LETRA E pago efectivo
    if (metodoPago === "e") {
        console.log(`El total de su compra es de ${total} pesos.`);
        console.log("¡Gracias por su compra!");
    //SELECCION CON LETRA E pago cuotas
    } else {
        let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas (3 o 6):'));
        console.log(`La tasa de interés en ${cuotas} cuotas es del ${InteresCuotas[cuotas]}%.`);
        let totalInteres = round(total * (1 + (InteresCuotas[cuotas] / 100)), 2);
        const valorCuota = round(totalInteres / cuotas, 2);
        console.log(`El total a pagar con intereses es de ${totalInteres} en ${cuotas} cuotas de ${valorCuota} cada una.`);
        console.log("¡Gracias por su compra!");
    }
}

carritoCompra();