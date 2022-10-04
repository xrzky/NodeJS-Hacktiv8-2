const { verify } = require('../helpers/jwt')

function Authentication (req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization.split("Bearer ");
    if (token.length !== 2) throw { name: 'InvalidToken' };
    const { id, email } = verify(token[1]);
    req.user = {id, email};
    next();
  } catch (error) {
    if(error.name === 'JsonWebTokenError') {
      res.status(401).json({ message: 'invalid token' });
      return;
    } else if (error.name === 'InvalidToken') {
      res.status(401.).json({ message: 'invalid token'});
      return;
    } else if (error) {
      res.status(401).json({message: 'unauthorized'});
      return;
    }
  }
}

module.exports = Authentication;