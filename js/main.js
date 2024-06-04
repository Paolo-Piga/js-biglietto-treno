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

console.log(prezzo);

if (anni < 18){
    let prezzo = (costoKm * percorso) /100 *80;
}

if (anni > 65){
    let prezzo = (costoKm * percorso) /100 *60;
}

document.getElementById("messaggio").innerHTML = `Il biglietto costa: ${prezzo}`
