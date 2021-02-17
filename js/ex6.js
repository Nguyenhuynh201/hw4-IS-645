let answer = Math.ceil(Math.random() * 100 )

let guess = Number(prompt("Please guess a number between 1 and 100: "));

let count = 0

while ( guess !== answer ) {
    if (guess > answer){
        guess = Number(prompt(" Too high, please guess again! "));
        count ++;
    }
    if (guess < answer){
        guess = Number(prompt(" Too low, please guess again !"));
        count ++;
    }
}

if ( guess === answer ){
    console.log(`Correct ! It took you ${count} attempts to guess the correct number.`)
}