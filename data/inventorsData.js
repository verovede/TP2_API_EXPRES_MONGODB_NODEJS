const res = require('express/lib/response');
const connection = require('./conexion');
const objectId = require('mongodb').ObjectId

//get inventors
async function getInventors() {
    const clientMongo = await connection.getConnection();
    const inventors = await clientMongo
        .db('sampleTP2')
        .collection('inventors')
        .find()
        .toArray();
    return inventors;
}

//get inventor
async function getInventor(id) {
    const clientMongo = await connection.getConnection();
    const inventor = await clientMongo
        .db('sampleTP2')
        .collection('inventors')
        .find({ _id: new objectId(id) })
        .toArray();
    return inventor;
}

// ADD INVENTOR (INVENTOR)
async function addInventor(inventor) {
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
        .db('sampleTP2')
        .collection('inventors')
        .insertOne(inventor)
    return result;
}



// TODO: UPDATE INVENTOR (INVENTOR)
async function updateInventor(inventorId, inventor) {

    const clientMongo = await connection.getConnection();

    const result = await clientMongo
        .db('sampleTP2')
        .collection('inventors')
        .updateOne(
            { _id: new objectId(inventorId) }, // Filter
            { $set: { first: inventor.first, last: inventor.last, year: inventor.year } }, // Update                         )
        )
    return result;
}


// TODO: DELETE INVENTOR (INVENTOR)
async function deleteInventor(id) {
    const clientMongo = await connection.getConnection();
    const inventor = await clientMongo
        .db('sampleTP2')
        .collection('inventors')
        .deleteOne({ _id: new objectId(id) })

    return inventor;
}

module.exports = { getInventors, getInventor, addInventor, updateInventor, deleteInventor }
