
require('dotenv').config();
const app = require('./src/app');
const requiredVars = ['MONGODB_URI', 'JWT_SECRET'];

for (const varName of requiredVars) {
    if (!process.env[varName]) {
        console.error(`Error: ${varName} environment variable is required`);
        process.exit(1);
    }
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});