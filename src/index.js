const express = require('express');

const server = require('./server')

require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

server.use('*', (req, res) => {
    res.send('<h1>Welcome to Retroville</h1>')
})