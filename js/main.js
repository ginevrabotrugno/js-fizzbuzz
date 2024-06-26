// Scrivi un programma che stampi in console i numeri da 1 a 100
// creazione ciclo 
for (let i=1; i<=100; i++) {

    // dichiarazione variabile
    let numero = i;

    // Crea un container nel DOM
    const box = document.createElement("div");

    // aggiungi classe al container 
    box.classList.add("square");
    

    if (i % 3 === 0 && i % 5 === 0)  {  // che per i multipli di 3 stampi “Fizz” al posto del numero
        numero = "FizzBuzz";

        // aggiungi classe per variare stile in base alla variabile
        box.classList.add("FizzBuzz")

    } else if (i % 5 === 0) { // per i multipli di 5 stampi “Buzz”
        numero = "Buzz";

        // aggiungi classe per variare stile in base alla variabile
        box.classList.add("Buzz")

    } else if (i % 3 === 0) { // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        numero = "Fizz";

        // aggiungi classe per variare stile in base alla variabile
        box.classList.add("Fizz")

    } 

    console.log(numero);

    // aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
    document.querySelector(".container").appendChild(box);

    box.innerHTML = `<span>${numero}</span>`;

}


