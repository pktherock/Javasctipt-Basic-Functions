// Write your function here:


const howOld = (currentAge, year) => {
    // const currentYear = 2021;
    // The following two lines make it so that our function always knows the current year.
    let dateToday = new Date();
    let currentYear = dateToday.getFullYear();
    const yearDifference = year - currentYear;
    const newAge = currentAge + yearDifference;
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > currentAge) {
        return `You will be ${newAge} in the year ${year}`;
    } return `You were ${newAge} in the year ${year}`;
}


// Once your function is written, write function calls to test your code!

console.log(howOld(24, 2023));
