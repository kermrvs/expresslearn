import { loggerDebug } from './loggerSettings';

export const myDebugLogger = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const date = new Date();
    const myFormat = `Method: ${
      req.method
    }, time: ${date}, payload: ${JSON.stringify(req.body)}`;
    loggerDebug.log('debug', myFormat);
    next();
  }
};
