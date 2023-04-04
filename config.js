import dotenv from "dotenv";
dotenv.config();

const config = {
    ip: process.env.SERVERIP,
    port: process.env.SERVERPORT,
    apiKey: process.env.APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

export default config;