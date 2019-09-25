const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

module.exports = function(req, res) {
    if (!req.body.code.trim()) {
        return res.status(400).json({err: "code is empty"});
    }
            
    jwt.sign({code: req.body.code}, SECRET_KEY, function(err, token) {
        if (err) throw err;
        res.cookie("token", token, {httpOnly: true, maxAge: 600000, signed: true});
        res.json({success: true});
    });
}