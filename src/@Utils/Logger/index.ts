import winston from "winston";
import path from "path";

const logFilePath = path.join(__dirname, "logs");

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath }),
  ],
});
