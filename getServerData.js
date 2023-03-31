import fetch from 'node-fetch';
import { firestore } from './firebase.js';
import dotenv from 'dotenv';

dotenv.config();

const fivemMinutes = 1_000 * 60 * 5;
const ip = process.env.SERVERIP;
const port = process.env.SERVERPORT;

const initServerData = async () => {
    console.log("ip: " + ip);
    console.log("port: " + port);

    const data = await fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port}`)
    .then(response => response.json())
    .then(data => data.players);

    const serverData = {
        nrPlayers: data.now,
        datetime: new Date()
    }

    firestore.collection('playerCount').add(serverData);

    data.sample.forEach(player => {
        //check if player name is db document id
        firestore.collection('playerActivity').doc(player.name).get().then(doc => {
            if(!doc.exists) {
                //if not, create it
                firestore.collection('playerActivity').doc(player.name).set({
                    count: 1,
                });
            } else {
                //if yes, update lastSeen
                firestore.collection('playerActivity').doc(player.name).update({
                    count: doc.data().count + 1,
                });
            }
        });
    });

};

setInterval(initServerData, fivemMinutes);