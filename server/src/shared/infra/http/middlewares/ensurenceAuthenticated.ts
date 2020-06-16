import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { authConfig } from '@config/auth';
import { AppError } from '@shared/errors/AppError';

interface TokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const jwtAuthorization = request.headers.authorization;

  if (!jwtAuthorization) {
    throw new AppError('JWT Token is missing.', 401);
  }

  const [, token] = jwtAuthorization.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as TokenPayLoad;

    request.user = { id: sub };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token.', 401);
  }
}
