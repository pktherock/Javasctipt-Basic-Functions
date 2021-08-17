// User Input Section start
const getUserChoice = userInput => {
    if (userInput) {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock') {
            return userInput;
        } else if (userInput === 'paper') {
            return userIput;
        } else if (userInput === 'scissors') {
            return userInput;
        } else if (userInput === 'bomb') {
            return userInput;
        } else {
            console.log('You did not chose correct option!');
        }
    } else {
        return console.log('You did not choose any option!!');
    }
};
// User Input Section ends

// Computer Choice Section start
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

/*
  if(randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } return 'scissors';
*/

// Computer Choice Section ends


//  Determining Winner code starts

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Heeee!! You got the secret of the Game.. WaaaooowWWWW!!'
    } else {
        if (userChoice === computerChoice) {
            return 'Tie! Your guess and computer guess was same!';
        } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Computer Won! Because paper covered the rock!';
            } return 'You Won! Congrats!!, Your rock destroys the scissors!'
        } else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                return 'You Won! Congrats!!, Your paper coverrd the rock!';
            } return 'Computer Won! Because Scissors cuts your paper haha!!'
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'Computer won! Because rock destroy your scissors! haha!';
            } return 'You won! Congrats Your scissors cut the paper!';
        } else {
            return 'Please Choose correct Input! rock, paper, scissors .';
        }
    }

};

//  Determining Winner code ends
const playGame = () => {
    const userInput = getUserChoice('ahkjsdhadgh');
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userInput, computerChoice);
    console.log(winner);
};

playGame();

