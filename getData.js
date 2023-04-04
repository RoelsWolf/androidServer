import { firestore, increment } from "./firebase.js";
import config from "./config.js";

const ip = config.ip;
const port = config.port;

const getCurrentPlayers = async () => {
    const data = await fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port}`)
        .then(response => response.json())
        .then(data => data.players);
    return data;
}

const writeDataToDatabase = async (data) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    //collection(year).doc(year).collection(month).doc(month).collection(day).doc(day).collection(hour).doc(hour).collection(minute).doc(minute).set(data)

    const docRef = firestore.collection("playerCount")
                                    .doc(year.toString())
                                    .collection(month.toString())
                                        .doc(day.toString())
                                        .collection(hour.toString())
                                            .doc(minute.toString())
    await docRef.set(data);
}

export const updateDataBase = async () => {
    const data = await getCurrentPlayers();

    await writeDataToDatabase({
        nrOfPlayers: data.now,
        timestamp: new Date(),
    });

    await data.sample.forEach(player => {
        firestore.collection('playerActivity').doc(player.name).update({
            count: increment(1),
        })
        console.log(player.name)
    });
}