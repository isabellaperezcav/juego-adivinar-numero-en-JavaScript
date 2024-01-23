//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin', 'Python'] ;

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'Golang'); 

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function listaLenguages(){
    for (var i = 0; i < lenguagesDeProgramacion.length ; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
listaLenguages();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function listaLenguagesInversa(){
    for (var i = lenguagesDeProgramacion.length - 1; i>= 0 ; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
listaLenguagesInversa();

//Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros){
    let suma = 0;
    for(var i= 0; i< listaNumeros.length ; i++){
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}
let promedio = calcularPromedio([2.0 , 3.5 , 4.0 , 5.0]);
console.log('el promedio es:' + promedio);


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function numeroMayorMenor(Numeros){
    let menor = Numeros[0];
    let mayor= Numeros[0];
    for(var i = 0; i < Numeros.length ; i++){
        if(Numeros[i] < menor){
            menor= Numeros[i];
        }
        if (Numeros[i] > mayor){
            mayor = Numeros[i];
        }
    }
}
numeroMayorMenor([10,100,200,2,80]);
console.log(`el numero mas grande de la lista es ${mayor} y el mas pequeño de la lista es ${menor}`)


//otra manera de hacerlo
let menor = Infinity; // Inicializa con un valor grande para asegurar que cualquier número sea menor
let mayor = -Infinity; // Inicializa con un valor pequeño para asegurar que cualquier número sea mayor

function numeroMayorMenor(Numeros) {
    for (var i = 0; i < Numeros.length; i++) {
        if (Numeros[i] < menor) {
            menor = Numeros[i];
        }
        if (Numeros[i] > mayor) {
            mayor = Numeros[i];
        }
    }
}
numeroMayorMenor([10, 100, 200, 2, 80]);
console.log(`El número más grande de la lista es ${mayor} y el más pequeño de la lista es ${menor}`);


//Crea una función que devuelva la suma de todos los elementos en una lista.
function Suma(elemento){
    let sumar = 0
    for (var i = 0; i < elemento.length; i++){
        sumar += elemento[i];
        // En cada iteración del bucle, sumamos el número actual en la posición "i" al valor acumulado en "sumar".
    }
    return sumar;
}
let sumatoria = Suma([2, 3, 1]);
console.log('la suma de los numeros es '+ sumatoria);


//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function devolverElemento(elementoPasado, lista){
    for(var i = 0; i < lista.length; i++){
        if (lista[i] == elementoPasado){
            return i;
        } else {
            return -1 ;
        }
    }
}

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let lista1 = [2,3,5];
let lista2 = [3,6,1]
function listas( lista1 , lista2){
    let SUMA = [];  //creamos una lista vacia que iremos llenando con el .push
    for (var i = 0; i < lista1.length; i++){   
        SUMA.push( lista1[i] + lista2[i]) ;
    }
    return SUMA;
}
let listaResultados = listas(lista1, lista2);
console.log('La lista de resultados sumados es: ' + listaResultados);

//si no puedes garantizar que ambas listas siempre tendrán la misma longitud y deseas sumar los elementos hasta la longitud de la lista más corta, 
//podrías usar Math.min(lista1.length, lista2.length) asi " for (var i = 0; i < Math.min(lista1.length, lista2.length); i++) { } "
 

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaNumeros(LISTA){
    let cuadrado = [];
    for (var i = 0; i < LISTA.length; i++){
        cuadrado.push(LISTA[i] * LISTA[i]);
    }
    return cuadrado;
}
let listaCuarados = listaNumeros([3,4,8]);
console.log('la lista con los numeros al cuadrado es '+ listaCuarados)