let nro1 = Number (prompt("Ingrese un número del 1 al 10"));
let nro2 = Number (prompt("Ingrese otro número del 1 al 10"));
let resultado= nro1+nro2;

if (nro1>10 || nro2>10){
    alert("El número seleccionado no es valido");
    let nro1 = Number (prompt("Ingrese un número del 1 al 10"));
    let nro2 = Number (prompt("Ingrese otro número del 1 al 10"));
    let resultado= nro1+nro2;
}

for (let i= 1; i <= resultado; i++){
    console.log(i);  
}







