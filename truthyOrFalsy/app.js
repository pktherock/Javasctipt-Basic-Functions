// Write your function here:

const truthyOrFalsy = (input) => {
    switch (input) {
        case false:
            return false;
            break;
        case 0:
            return false;
            break;
        case '':
            return false;
            break;
        case null:
            return false;
            break;
        case undefined:
            return false;
            break;
        case NaN:
            return false;
            break;
        default:
            return true;
            break;
    }
}


// const truthyOrFalsy = input => {
//     if (input) {
//         return true;
//     } return false;
// }


// Uncomment the line below when you're ready to try out your function

console.log(truthyOrFalsy(null)) // Should print false
console.log(truthyOrFalsy(5)) // Should print true

  // We encourage you to add more function calls of your own to test your code!






