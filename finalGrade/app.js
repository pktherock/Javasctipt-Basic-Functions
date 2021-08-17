// Write your function here:


// const finalGrade = (grade1, grade2, grade3) => {
//     if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
//         return 'You have entered an invalid grade.'
//     }
//     const avg = (grade1 + grade2 + grade3) / 3;
//     if (avg < 60) {
//         return 'F';
//     } else if (avg < 70) {
//         return 'D';
//     } else if (avg < 80) {
//         return 'C';
//     } else if (avg < 90) {
//         return 'B';
//     } return 'A';
// };


// Another version
const finalGrade = (grade1, grade2, grade3) => {
    if (grade1 > 0 && grade1 <= 100) {
        if (grade2 > 0 && grade2 <= 100) {
            if (grade3 > 0 && grade3 <= 100) {
                const avg = (grade1 + grade2 + grade3) / 3;
                if (avg < 60) {
                    return 'F';
                } else if (avg < 70) {
                    return 'D';
                } else if (avg < 80) {
                    return 'C';
                } else if (avg < 90) {
                    return 'B';
                } return 'A';
            }
        }
    }
    return 'You have entered an invalid grade.';
};


// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 99, 99)) // Should print 'A'
console.log(finalGrade(99, 99, 999)) // Should print 'You have entered an invalid grade.'
console.log(finalGrade(99, 99, -999)) // Should print 'You have entered an invalid grade.'
console.log(finalGrade(1, 1, 1)) // Should print 'F'

// We encourage you to add more function calls of your own to test your code!