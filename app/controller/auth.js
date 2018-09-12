const jwt = require('jsonwebtoken')
const {SECRET_TOKEN} = require('../config')

module.exports.getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer g1jipjgi1ifjioj
        // Handle token presented as a Bearer token in the Authorization header
        return req.headers.authorization.split(' ')[1];
    }

    // If we return null, we couldn't find a token.
    // In this case, the JWT middleware will return a 401 (unauthorized) to the client for this request
    return null;
}

module.exports.createToken = (payload, age = 365*86400) => {
    return `Bearer ${jwt.sign(payload, SECRET_TOKEN, {expiresIn: age})}`;
}