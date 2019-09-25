const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_here";

module.exports = function(req, res, next) {
    const token = req.signedCookies.token;
    if (token) {
        jwt.verify(token, SECRET_KEY, function(err, payload) {
            if (err) throw err;
            req.code = payload.code || undefined;
            next();
        });
    }
    else {
        res.status(403).json({err: "forbidden"});
    }
}