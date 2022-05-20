const connection = require('./conexion')

async function getAllUsers() {
    const connectiondb = await connection.getConnection();

    const users = await connectiondb
        .db('sampleTP2')
        .collection('users')
        .find()
        .toArray();

    return users;

    async function addUser(user) {

        const connectiondb = await connection.getConnection();

        const user = await connectiondb
            .db('sampleTP2')
            .collection('users')
            .insertOne(user);

        return user;

    }