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

module.exports = server;

