/**
Acceptance Criteria

Create a base class called "Shape" with methods drawShape, calculateArea and color property that is initialised with a color.

In another module make a class called "Circle" that extends the "Shape" class and overrides the calculateArea method.

Write code for Shape class in shape.js and Circle in circle.js

Export the class from each file.

Note: Don't remove any file from the cloned repo, otherwise all test cases will fail. Use module.exports for export and require for import. If it is not covered in class, google it :)
 */

// declare class

export default class Shape {  // es6 default export syntax
    constructor() {
        this.color = "blue";
    }
    drawShape() {
        console.log("Drawing a Shape");
    }
    calculateArea() {
        console.log("Area of unknow Shape");
    }
}


// export class using module.exports