const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:5173', 
            'http://localhost:3000',  
            process.env.FRONTEND_URL  
        ].filter(Boolean);
        
    
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
module.exports = app;
