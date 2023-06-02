import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = () => {
  const myLogger = winston.createLogger({
    level: 'info',
    format: winston.format.printf((info) => {
      return `${new Date().toLocaleString('en-GB')} | ${info.level.toUpperCase()} : ${info.message}`;
    }),
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: 'logs/app-%DATE%.log',
        maxSize: '10m'
      })
    ]
  });

  return myLogger;
};

const log = logger();
export default log;
