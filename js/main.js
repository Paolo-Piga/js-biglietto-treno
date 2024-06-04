// anni
let anni = prompt("Quanti anni ha?")


console.log(anni);
// percorso
let percorso = prompt("Quanti kilometri desidera percorrere?");


// costo
const costoKm = 0.21;

console.log(percorso);

// prezzo biglietto
let prezzo = costoKm * percorso;



if (anni < 18){
    prezzo = (costoKm * percorso) /100 *80;
}

if (anni > 65){
    prezzo = (costoKm * percorso) /100 *60;
}

console.log(prezzo);

const arr_num = prezzo.toFixed(2);

console.log(arr_num);

document.getElementById("messaggio").innerHTML = `Il biglietto costa: ${arr_num}`
