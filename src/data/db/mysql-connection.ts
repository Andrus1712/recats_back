import mysql, { Connection } from 'mysql';
import { configEnv } from '../../config';
import { parsenumber } from '../../utilities';
import { logger } from '../../libs/logger';

const { host, port, user, password, database } = configEnv.mysql;

const portNumber: number | undefined = parsenumber(port);

const mysqlConn: Connection = mysql.createConnection({
    host: host,
    port: portNumber,
    user: user,
    password: password,
    database: database,
});

mysqlConn.connect((error) => {
    if (error) {
        logger.error('ERROR CONNECTING TO THE DATABASE: ', error);
        return;
    }
    logger.info(`CONNECTED TO THE MySQL DATABASE ${host}:${port}`);
});

export default mysqlConn;
