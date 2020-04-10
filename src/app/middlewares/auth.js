import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import auth from '../../config/auth';


async function AuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token is necessary' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, auth.secret);
    req.userId = id;

    return next();
  } catch (err) {
    return res.status(400).json({ error: 'Token invalid' });
  }
}

export default AuthMiddleware;
