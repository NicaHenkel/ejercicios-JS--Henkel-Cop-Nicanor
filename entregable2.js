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

function venderProducto (opcion){
    if (opcion===1){
        pedirDinero (1);
    }

    else if (opcion===2){
        pedirDinero (3,5);
    }

    else if (opcion===3){
        pedirDinero (5);
    }

    else if (opcion=== 4){
        pedirDinero (3,5)
    }
    
    else {
        alert ("opcion invalida")
    }
}

function pedirDinero (numMin){
    
    while (dineroIngresado<numMin){
        let dinero = Number (prompt ("ingrese un monto"));

        if (dinero !==1 && dinero !== 5 && dinero !==10){
            alert ("Monto Invalido");
        }
        else {
            dineroIngresado+=dinero; 
        }
    }

    let cambio = dineroIngresado-numMin; 
    alert ("Su cambio es:  "+ cambio);
    alert ("Gracias");
}
