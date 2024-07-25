import dotenv from 'dotenv';

dotenv.config();


const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5500;


export const config = {
    database: {

    },
    server: {
        port: SERVER_PORT
    }
};
