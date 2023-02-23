console.log("Celicus to fahrenheit");

//  c * (9/5) +32


const Celicus = (c) => (c*(9/5) +32 ).toFixed(2);

// console.log(Celicus(process.argv[2]))

// Array destructring 
const [,,c] = process.argv;
console.log(Celicus(c))