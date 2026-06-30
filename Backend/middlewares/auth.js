const { getUser } = require("../services/auth");

function restrictToLoggedInUser(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "Authorization header missing"
        });
    }

    const token = authHeader.split(" ")[1];

    const user = getUser(token);

    if (!user) {
        return res.status(401).json({
            error: "Invalid token",
        });
    }

    req.user = user;

    next();
}

module.exports = {
    restrictToLoggedInUser
};