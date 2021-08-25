// Write function below
const isEven = number => {
  if(typeof(number) === 'number') {
      if(number % 2 === 0 || number === 0) {
        return true;
      } return false;
  } return 'Number is not given or incorrect type!' ;
};

console.log(isEven(12));
