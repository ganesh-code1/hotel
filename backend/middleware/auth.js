import { verifyToken } from '../config/jwt.js';

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Authentication error' });
  }
};

export default authMiddleware; 