import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'restroqrsecretkey';

export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.Email
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}; 