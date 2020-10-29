// import using require


// declare class

// es6 default import syntax
import Shape from './shape';

// Circle Class extending Shape Class
module.exports = class Circle extends Shape {
    constructor() {
        // first line of subclass constructor should call superclass constructor with appropriate parameters
        super();
    }
    // to overrride function in JS, redeclare the function in SubClass with same name as of Super Class
    calculateArea() {
        console.log("Area of Circle with color: " + this.color);// since Circle has extended Shape, we can 
                                                                //access color variable of Shape here
        return 3.14*5*5;
    }
}
/*
class GreenCircle extends Circle {
    constructor() {
        super("Green");
    }
}
*/

// export class using module.exports