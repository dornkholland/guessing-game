const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 1;

const checkGuess = (num) => {
    // console.log('here');
    if (num > secretNumber) {
        console.log("Too high.")
        return false;
    } else if (num < secretNumber) {
        console.log("Too low.")
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

// console.log(checkGuess(2))
// console.log(checkGuess(1))
// console.log(checkGuess(0))
function askGuess() {
    rl.question('Enter a guess: ', (answer) => {
        // console.log(Number(answer));
        let guess = checkGuess(Number(answer));
        if (guess) {
            console.log('You win!')
            rl.close();
        } else {
            askGuess();
        }

    })
}
// askGuess();

function askRange() {
    let min;
    let max;
    rl.question('Enter a min number: ', (answer) => {
        min = Number(answer);
        rl.question('Enter a max number: ', (answer) => {
            max = Number(answer);
            console.log(`I'm thinking of a number between ${min} and ${max}`);
            secretNumber = randomInRange(min, max);
            askGuess();
        });
    });
}

askRange();

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
