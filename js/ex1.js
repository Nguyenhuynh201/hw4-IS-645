let x = parseInt(prompt("Enter the first number"))
let y = parseInt(prompt("Enter the second number"))
let ops = prompt("Enter the mathematical operation(+,-,*,/)")

function calculate(x, y, ops){
    let result = 0;
switch (ops){
    case "+":
        result = x + y;
        break;
    case "-":
        result = x - y;
        break;
    case "*":
        result = x * y;
        break;
    case "/":
        result = x / y;
        break;
}
return result;
}




console.log(`${x} ${ops} ${y} = ${calculate(x,y,ops)}`)
