import { ValidationError } from './Errors/ValidationError';

export const passMiddleware = (req, res, next) => {
  const authPass = req.get('Authorization');
  if (authPass === process.env.PASSWORD) {
    next();
  } else {
    next(new ValidationError('user name is not valid', 400));
  }
};
