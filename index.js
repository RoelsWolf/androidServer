import { updateDataBase } from "./getData.js";


const fiveMinutes = 1000 * 60 * .1;

async function runServer(){
    console.log("Starting server...");
    setInterval(async () => {
        console.log("Updating database...");
        await updateDataBase();
    }, fiveMinutes);
}


runServer();