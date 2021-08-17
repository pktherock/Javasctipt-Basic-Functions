//  sleep hours per day
const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
        case 'sunday':
            return 7;
            break;
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 7;
            break;
        default:
            return 'Please type correct day name!!';
            break;
    }
};

// Total Sleep hours 
const getActualSleepHours = () => {
    // const sunday = parseInt(getSleepHours('Sunday'));
    // const monday = parseInt(getSleepHours('Monday'));
    // const tuesday = parseInt(getSleepHours('Tuesday'));
    // const wednesday = parseInt(getSleepHours('Wednesday'));
    // const thursday = parseInt(getSleepHours('Thursday'));
    // const friday = parseInt(getSleepHours('Friday'));
    // const saturday = parseInt(getSleepHours('Saturday'));
    const totalHours = getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');
    return totalHours;
};

// Total Ideal Hours
/*
const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
}; */
const getIdealSleepHours = idealHours => idealHours * 7;

//  Calculating Sleep Debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfest amount of sleep!!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed!!');
    } else {
        console.log('You should get some rest!!');
    }
}

calculateSleepDebt();














// const hours = getSleepHours('tuesday');
// console.log(hours);