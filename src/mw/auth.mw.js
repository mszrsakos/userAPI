const authService = require('../service/auth.service');
const AppError = require('../utils/AppError');


function authenticate(req, res, next) {
    const [type, token] = (req.headers.authorization || '' ).split(' ')
    if(type!=='Bearer'||!token)throw new AppError('Bejelentkezés szükséges')
}