// Write your function here:
// const weightOnMercury = earthWeight * 0.378;
// const weightOnVenus = earthWeight * 0.907;
// const weightOnMars = earthWeight * 0.377;
// const weightOnJupiter = earthWeight * 2.36;
// const weightOnSaturn = earthWeight * 0.916;

const calculateWeight = (earthWeight, planet) => {
    if (typeof (earthWeight) === 'number') {
        if (typeof (planet) === 'string') {
            const planetName = planet.toLowerCase();
            if (planetName === 'mercury') {
                return `${earthWeight * 0.378} kg`;
            } else if (planetName === 'venus') {
                return `${earthWeight * 0.907} kg`;
            } else if (planetName === 'mars') {
                return `${earthWeight * 0.377} kg`;
            } else if (planetName === 'sun') {
                return `${earthWeight * 27.01} kg`;
            } else if (planetName === 'moon') {
                return `${earthWeight * 0.166} kg`;
            } else if (planetName === 'uranus') {
                return `${earthWeight * 0.92} kg`;
            } else if (planetName === 'jupiter') {
                return `${earthWeight * 2.34} kg`;
            } else if (planetName === 'neptune') {
                return `${earthWeight * 1.19} kg`;
            } else if (planetName === 'pluto') {
                return `${earthWeight * 0.06} kg`;
            } else if (planetName === 'saturn') {
                return `${earthWeight * 0.916} kg`;
            } return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, Pluto, Neptune, Uranus, Moon, Sun, or Saturn.';
        } return `${planet} is not a string type!`;
    } return `${earthWeight} is not a number type!`;
}



// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(200, 'neptune')) // Should print 236
console.log(calculateWeight(100, 'moon')) // Should print 236

  // We encourage you to add more function calls of your own to test your code!