// Shape Base Class
class Shape {
    constructor() {
        this.color = 'black'; // Default color
    }

    setColor(color) {
        this.color = color;
    }

    // The render method will be overridden in derived classes
    render() {
        throw new Error('Render method must be implemented');
    }
}

// Triangle Class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Circle Class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Square Class
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// Exporting the Classes
module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
};
