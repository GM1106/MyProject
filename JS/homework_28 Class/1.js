'use strict';


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radiusCreate() {
        return this.radius;
    }
    set radiusCreate(newrad) {
        return this.radius = newrad
    }
    get diameter() {
        return this.radius * 2;
    }
    circleSquare() {
        const square = Math.PI * Math.pow(this.radius, 2);
        // или const square = Math.PI * (this.radius*this.radius);
        return square;
    }
    circleLength() {
        const length = 2 * this.radius * Math.PI;
        return length;
    }
}


let circle = new Circle(+prompt('Укажите желаемый радиус окружности', ''));




console.log(circle.radius);
console.log(circle.radiusCreate);
circle.radius = +prompt('Укажите новое занчение радиуса радиус окружности', '')
console.log(circle.radiusCreate);
console.log(circle.diameter);
console.log(circle.circleSquare().toFixed(2));
console.log(circle.circleLength().toFixed(2));
