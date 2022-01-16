import { NotFoundError } from './index';

export const checkEndpoints = (req, res, next) => {
  next(new NotFoundError(`Method: ${req.method}, url: ${req.url}`), 404);
};
