const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

// Function to generate the SVG content
function generateSVG(shape, textColor, text, shapeColor) {
    let svgShape;

    switch (shape) {
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgShape = triangle.render();
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgShape = circle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgShape = square.render();
            break;
        default:
            throw new Error('Invalid shape type');
    }

    // Adding text to the SVG
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;

    // Complete SVG content
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgText}</svg>`;
}

// Function to save the SVG content to a file
function saveSVG(content) {
    fs.writeFileSync('logo.svg', content);
    console.log('Generated logo.svg');
}

// Main function to run the application
function main() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: input => input.length <= 3 && input.length > 0
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or a hexadecimal number for the text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or a hexadecimal number for the shape color:'
        }
    ]).then(answers => {
        const svgContent = generateSVG(answers.shape, answers.textColor, answers.text, answers.shapeColor);
        saveSVG(svgContent);
    }).catch(error => {
        console.error('An error occurred:', error);
    });
}

main();
