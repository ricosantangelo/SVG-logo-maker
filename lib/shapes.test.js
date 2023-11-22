const { Triangle, Circle, Square } = require('./shapes'); // Adjust the path as necessary

describe('Shape Class Tests', () => {
    describe('Triangle', () => {
        test('should render a blue triangle', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Circle', () => {
        test('should render a red circle', () => {
            const circle = new Circle();
            circle.setColor('red');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });

    describe('Square', () => {
        test('should render a green square', () => {
            const square = new Square();
            square.setColor('green');
            expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
        });
    });
});
