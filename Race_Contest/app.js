let raceNumber = Math.floor(Math.random() * 1000);

// let registeredOnTime = true;
let registeredEarly = true;

let runnerAge = 50;

if (runnerAge > 50) {
    console.log('You are not allowed to run in the Race. You can enjoy our the race contest!!');
} else {
    if (registeredEarly && runnerAge > 18) {
        raceNumber += 1000;
        console.log(`Your Race will start at 9:30 am. And your Race number is ${raceNumber}`);
    } else if (!registeredEarly && runnerAge > 18) {
        raceNumber += 1000;
        console.log(`Your Race will start at 11:00 am. And Your Race Number is : ${raceNumber}`);
    } else if (runnerAge < 18) {
        console.log(`You Race will start at 12:30 am. And you race number is : ${raceNumber}`)
    } else if (runnerAge === 18) {
        console.log('You can see your information on the registration desk!');
    } else {
        console.log('Please read out instruction carefully!');
    }
}


// if(registeredEarly && runnerAge > 18) {
//   console.log(`Your Race will start at 9:30 am. And your Race nomber is ${raceNumber}`);
// } else if (!registeredEarly && runnerAge > 18) {
//   console.log(`Your Race will start at 11:00 am. And Your Race Nomber is : ${raceNumber}`);
// } else if (runnerAge < 18 ) {
//   console.log(`You Race will start at 12:30 am. And you race number is : ${raceNumber}`);
// } else {
//   console.log('You can see your information on the registration desk!');
// }
