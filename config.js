import dotenv from "dotenv";
dotenv.config();

const config = {
    ip: process.env.SERVERIP,
    port: process.env.SERVERPORT,
}

export default config;