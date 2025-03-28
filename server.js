const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Winston Logger Configuration
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Middleware to log each request
app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
});

// Function to validate numbers
const validateNumbers = (num1, num2, res) => {
    if (!num1 || !num2) {
        logger.error('Missing parameters');
        return res.status(400).json({ error: 'Missing parameters' });
    }
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid numbers');
        return res.status(400).json({ error: 'Invalid numbers' });
    }
};

// Addition Endpoint
app.get('/add', (req, res) => {
    let { num1, num2 } = req.query;
    validateNumbers(num1, num2, res);
    res.json({ operation: 'addition', result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    let { num1, num2 } = req.query;
    validateNumbers(num1, num2, res);
    res.json({ operation: 'subtraction', result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    let { num1, num2 } = req.query;
    validateNumbers(num1, num2, res);
    res.json({ operation: 'multiplication', result: parseFloat(num1) * parseFloat(num2) });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    let { num1, num2 } = req.query;
    validateNumbers(num1, num2, res);
    if (parseFloat(num2) === 0) {
        logger.error('Cannot divide by zero');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    res.json({ operation: 'division', result: parseFloat(num1) / parseFloat(num2) });
});

// Start Server
app.listen(port, () => {
    logger.info(`Calculator microservice running on http://localhost:${port}`);
});
