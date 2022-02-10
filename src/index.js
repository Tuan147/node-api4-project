const express = require('express');

const server = express();

require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

