import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
   id: string;
   email: string;
}

// Modifiying an existing type definition
declare global {
   namespace Express {
      interface Request {
         currentUser?: UserPayload;
      }
   }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
   if(!req.session?.jwt) {
      return next();
   }

   try {
      // what we get back out of verify call have the same structre as UserPayload
      const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
      req.currentUser = payload;
   } catch(err) {

   }
   next();
}