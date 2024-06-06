// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



// Scrivi un programma che stampi in console i numeri da 1 a 100
// creazione ciclo 
for (let i=1; i<=100; i++) {

    let numero = i;

    if (i % 3 === 0 && i % 5 === 0)  {  // che per i multipli di 3 stampi “Fizz” al posto del numero

        numero = "FizzBuzz";

    } else if (i % 5 === 0) { // per i multipli di 5 stampi “Buzz”
        
        numero = "Buzz";

    } else if (i % 3 === 0) { // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        
        numero = "Fizz";

    } 

    console.log(numero);

}


