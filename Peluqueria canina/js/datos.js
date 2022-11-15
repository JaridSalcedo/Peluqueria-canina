//Creamos la función recibir_datos()
function recibir_datos()
{
    var nombre = document.getElementById('nombre').value;
    var nombre_mascota = document.getElementById('nombre_mascota').value;
    var edad = document.getElementById('edad').value;
    var fecha = document.getElementById('fecha').value;

    console.log(nombre);
    console.log(nombre_mascota);
    console.log(edad);
    console.log(fecha);
    alert('Nombre: '+nombre+'\nNombre mascota: '+nombre_mascota+'\nEdad: '+edad+'\nFecha: '+fecha);
    //Mostrar datos
    document.getElementById('txtnombre').value=nombre;
    document.getElementById('txtnombre mascota').value=nombre_mascota;
    document.getElementById('txtedad').value=edad;
    document.getElementById('txtfecha').value=fecha;
    //Limpiar campos
    document.getElementById('nombre').value="";
    document.getElementById('nombre mascota').value="";
    document.getElementById('edad').value="";
    document.getElementById('fecha').value="";
}
/**
//Función sumar
function sumar()
{
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    let suma= num1+num2;
    document.getElementById('resultado').value=suma;
}

function restar()
{
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    let resta= num1-num2;
    document.getElementById('resultado').value=resta;
}
*/