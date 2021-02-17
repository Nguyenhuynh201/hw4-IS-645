const r = Number(prompt("Enter the circle redius: "));

const cirle = {
    radius: r,
    circumference(){
    return this.radius * 2 * Math.PI
    },
    area() {
    return this.radius ** 2 * Math.PI
    },
    
};

console.log(`Its circumference is ${cirle.circumference()}`)
console.log(`Its area is ${cirle.area()}`)