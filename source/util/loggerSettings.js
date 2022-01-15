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
