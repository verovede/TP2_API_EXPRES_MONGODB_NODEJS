//TODO reemplazar con variables de entorno
require('dotenv').config()

const mongoclient = require('mongodb').MongoClient



// la uri esta en mongodb en connect, connect to aplication
//const uri = "mongodb+srv://admin:tallerort22@cluster0.yocxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const uri = process.env.MONGO_URI;

const client = new mongoclient(uri);

// singleton para generar una sola conexion
let instance = null;

async function getConnection() {
    if (instance == null) {

        instance = await client.connect();
    }

    return instance;
}

module.exports = { getConnection };