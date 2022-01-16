import {
  loggerDebug,
  loggerError,
  notFoundLoggerError,
  validationLoggerError,
} from './loggerSettings';

export const myDebugLogger = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const myFormat = `Method: ${req.method}, payload: ${JSON.stringify(
      req.body,
    )}`;
    loggerDebug.log('debug', myFormat);
    next();
  }
};

export const myErrorLogger = (error, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') {
    let myFormat = '';
    if (error.name === 'NotFoundError') {
      myFormat = `${req.method}: ${req.url}`;
      notFoundLoggerError.error(myFormat);
      res.sendStatus(404);
    } else if (error.name === 'ValidationError') {
      const body = req.body;
      myFormat = `${req.method}: ${req.url} ${JSON.stringify(body)}`;
      validationLoggerError.error(myFormat);
      res.sendStatus(400);
    } else {
      myFormat = `${error.name}: ${error.message}`;
      loggerError.error(myFormat);
      res.sendStatus(404);
    }
  } else {
    next();
  }
};
