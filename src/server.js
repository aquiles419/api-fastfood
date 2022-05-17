import app from './app';

const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3333;
const { CONTEXT } = process.env;
app.listen(PORT);

console.log(`http://localhost:${PORT}${CONTEXT}`);
