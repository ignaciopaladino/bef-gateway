const { authMiddleware } = require('nordic/auth');
const { authentication: authenticationLdap } = require('odin-security');
/**
 * SHIPPING AUTHENTICATION MIDDLEWARE
 *
 * @param {Object} req Ragnar request object
 * @param {Object} res Ragnar response object
 * @param {Function} next Ragnar next function
 */
function isInternal(hostname) {
    const INTERNAL = /\.(ml|adminml|melifrontends)\.com$/;
    return INTERNAL.test(hostname);
}
function auth(options = {}) {
    return (req, res, next) => {
        if (isInternal(req.hostname)) {
            return authenticationLdap(options)(req, res, next);
        }
        return authMiddleware(options)(req, res, next);
    };
}
module.exports = { auth };
