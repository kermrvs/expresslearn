import winston from 'winston';

export const loggerDebug = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      info => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
  ),
  transports: [new winston.transports.Console()],
});

export const loggerError = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} ${info.message}`),
  ),
  transports: [
    new winston.transports.File({
      filename: 'source/logs/errors.log',
    }),
  ],
});
export const validationLoggerError = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} ${info.message}`),
  ),
  transports: [
    new winston.transports.File({
      filename: 'source/logs/validation_errors.log',
    }),
  ],
});
export const notFoundLoggerError = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} ${info.message}`),
  ),
  transports: [
    new winston.transports.File({
      filename: 'source/logs/not_found_errors.log',
    }),
  ],
});
