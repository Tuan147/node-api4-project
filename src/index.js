const express = require('express');

const server = express();

require('dotenv').config();

const PORT = process.env.PORT;

server.listen((process.env.PORT || 9000), () => {
    console.log(`listening on port ${PORT}`);
});

server.use('*', (req, res) => {
    res.send('<h1>Welcome to Retroville</h1>')
});

const users = [
    {
        username: 'Tuan',
        password: 'badpass'
    },
    {
        username: 'Jimmy',
        password: 'goodpass'
    },
];

const register = [
    {
        username: 'Carl',
        password: 'jimmysmom'
    }
];

const login = [
    {
        username: 'Sheen',
        password: 'ultralord'
    }
];

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
});

server.post('/api/register', (req, res) => {
    res.status(201).json(register)
});

server.post('/api/login', (req, res) => {
    if(!login) {
        res.status(404).json({
            message: 'Username and password incorrect'
        })
    } else {
        res.status(200).json({
            message: 'Welcome to RetroVille'
        })
    }
});