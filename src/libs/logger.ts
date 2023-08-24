import { createLogger, transports, format } from 'winston';
const now = new Date(2021, 3, 1);
const onejan = new Date(now.getFullYear(), 0, 1);
const week = Math.ceil(((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.align(),
        format.timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: `logs/data_request_${week}.log`,
        }),
    ],
});
