const kelvin = 293;

// Convert kelvin to celsius
const celsius = kelvin - 273;

// Calculate Fahrenheit
let Fahrenheit = celsius * (9/5) + 32;

// Round down the Fahrenheit temperature
Fahrenheit = Math.floor(Fahrenheit);

// Log the temperature in Fahrenheit
console.log("The temperature is " + Fahrenheit + " degrees Fahrenheit.");

// convert Celsius to Newton
const newton = celsius * (33/100);

// Round down the Newton temperature
const newtonRounded = Math.floor(newton);

// Log the temperature in Newton
console.log("The temperature is " + newtonRounded + " Newton.");
