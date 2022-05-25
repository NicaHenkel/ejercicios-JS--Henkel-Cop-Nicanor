// Pedir al usuario que elija una bebida entre: cerveza, vino, gin, agua o nada. 
// en el caso de no querer nada -> fin de transacción: cartel de GRACIAS VUELVAS PRONTOS. 
// Si quiere alguna bebida preguntar Cuantas quiere? 
// Preguntar si quiere alguna otra bebida.
// Sumar el total.
// Pedir con cuanto va a pagar. 
// Dar vuelto

/* Se que lo que tengo que hacer es hacer que las bebidas sean objetos y despues agregarlos a un array y sumar el total, asi mismo le puedo agregar otro array con el pedido y que se sume el total de la cuenta*/ 

let opcion = mostrarMenu ();
let dineroIngresado = 0 

if (opcion !=5){
    venderProducto (opcion);
}
else {
    alert ("GRACIAS, VUELVA PRONTO");
}



function mostrarMenu (){
    prompt (`SELECCIONE LA OPCIÓN DESEADA:
                    1- AGUA ($1)
                    2- VINO ($3,50)
                    3- CERVEZA ARTESANAL ($5)
                    4- GIN TONIC ($4)
                    5- FIN`)
}




function Productos (nombre, precio){
     
}

/*class Productos

let productos (
    { 
        nombre: "agua",
        precio: 1
    },
    {
        nombre: "vino",
        precio: 3.5,
    },
    {
        nombre: "cerveza",
        precio: 5
    },
    {
        nombre: "Gin Tonic",
        precio: 4
    }
)*/
