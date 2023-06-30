"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionData = {
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'magodeoz100',
    database: 'stivenj'
};
const client = new pg_1.Client(connectionData);
client.connect();
console.log('Conexión exitosa a la base de datos');
exports.default = client;
