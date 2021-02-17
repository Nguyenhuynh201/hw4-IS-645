const values = [3, 11, 7, 2, 9, 10];

//Find MAX
let max = values[0];

for (let i = 1; i < 6; i++){
    if ( values[i] > max ){
        max = values[i];
    }
}

//Find MIN
let min = values[0]
for ( let i = 1; i < 6; i++){
    if( values[i] < min){
        min = values[i];
    }
}

//Find SUM
let sum = 0
for ( let i = 0; i < 6; i++) {
    sum += values[i];
} 

console.log(`The sum of all array values is: ${sum}`)
console.log(`The maximum value is: ${max}`)
console.log(`The minimum value is: ${min}`)