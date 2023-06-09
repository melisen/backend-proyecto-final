const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({
      filename: "./src/logger/warn.log",
      level: "warn",
    }),
    new winston.transports.File({
      filename: "./src/logger/error.log",
      level: "error",
    }),
  ],
});

module.exports = logger;
