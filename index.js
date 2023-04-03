import { updateDataBase } from "./getData.js";


const fiveMinutes = 1000 * 60 * 5;

async function runServer(){
    setInterval(async () => {
        await updateDataBase();
    }, fiveMinutes);
}


runServer();