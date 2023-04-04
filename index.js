import { updateDataBase } from "./getData.js";


const fiveMinutes = 1000 * 60 * 5;

async function runServer(){
    console.log("Starting server...");
    setInterval(async () => {
        console.log("Updating database...");
        await updateDataBase();
    }, fiveMinutes);
}


runServer();