import { Client } from 'pg';

const connectionData = {
    host: 'localhost',
    user:'postgres',
    port:5432,
    password: 'magodeoz100',
    database:'stivenj'
};

const client = new Client(connectionData);

client.connect();
console.log('Conexión exitosa a la base de datos');


export default client;



