
const dns = require('dns');
dns.setServers(['8.8.8.8'])

require('dotenv').config();
const mongoose = require('mongoose')
const app = require('./app');

const requiredVars = ['MONGODB_URI', 'JWT_SECRET'];

for (const varName of requiredVars) {
    if (!process.env[varName]) {
        console.error(`Error: ${varName} environment variable is required`);
        process.exit(1);
    }
}

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
   .then(() => {
        console.log('MongoDB connected');

       app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
       });
   })

    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    });



