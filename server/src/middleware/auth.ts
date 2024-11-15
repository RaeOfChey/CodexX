import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: number;
  username: string;
}

// Extend the Request interface to include user property
interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

export const authenticateToken = (
  req: AuthenticatedRequest, 
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header in Request:", authHeader);

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET_KEY || '';

    return jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        console.error("Token verification failed:", err.message); // Log specific error
        return res.status(403).json({ message: 'Token is invalid or expired' });
      }

      req.user = user as JwtPayload;
      console.log("Decoded user ID:", req.user.id); // Log after setting `req.user`
      return next(); // Ensure next() is called on successful verification
    });
  } else {
    console.error("Authorization header missing");
    return res.status(401).json({ message: 'Authorization header missing' });
  }
};
