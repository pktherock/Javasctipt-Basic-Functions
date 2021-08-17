//  Todays Temperature  in kelvin is 293
const kelvin = 273;

//  Temperature in Celsius
const celsius = kelvin - 273;

// Temperature in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Math.floor method floors the decimal value to the exact value
fehrenheit = Math.floor(fahrenheit);

// Temperature in newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${kelvin}k, ${celsius}Deg C, ${fahrenheit}Deg F, & ${newton}Deg N.`)