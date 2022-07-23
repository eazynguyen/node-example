const rec = require('./rectangle.js');

function solveRect(l,b) {
    console.log(`Solving for rectangle with l=${l} and b=${b}`);
    if(l <=0 || b <=0){
        console.log(`Rectangle dimensions should be greater than 0: l=${b} and b=${b}`);
    }else {
        console.log(`The area of the rectangle is: ${rec.area(l,b)}`);
        console.log(`The perimeter of the rectangle is: ${rec.perimeter(l,b)}`);
    }
}

solveRect(2,3);