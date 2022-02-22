/* function myFunction() {
    let bill = parseFloat(prompt("per favore inserisci i kilometri che devi percorrere");

        if (bill != null) {
            
        }

        document.getElementById("prezzo").innerHTML =
        bill ;
    } */
let bill = parseInt(prompt("per favore inserisci i kilometri che devi percorrere"));
console.log(bill);

console.log(bill * 0.21);
bill = (bill * 0.21);

let age = parseInt(prompt("per favore inserisci la tua età"));
console.log(age);

if (age <= 18) {
    console.log(bill - (bill * (20 / 100)));
    bill = Math.round(bill - (bill * (20 / 100)));
} else if (age >= 65) {
    console.log(bill - (bill * (40 / 100)));
    bill = Math.round(bill - (bill * (40 / 100)));
} else {
    console.log(bill)
}

document.getElementById("prezzo").innerHTML = Math.round(bill) + "€";

if ((isNaN(bill) || (isNaN(age)))) {
    document.getElementById("prezzo").innerHTML =
        "Hai scelto un numero non valido";
}