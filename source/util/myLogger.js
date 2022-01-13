import { logger } from './loggerSettings';

export const myLogger = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const date = new Date();
    const myFormat = `Method: ${
      req.method
    }, time: ${date}, payload: ${JSON.stringify(req.body)}`;
    logger.log('info', myFormat);
    next();
  }
};
