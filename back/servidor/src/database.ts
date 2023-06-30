import { Client } from 'pg';

const connectionData = {
    host: 'localhost',
    user:'Artezanal',
    port:5432,
    password: '1234',
    database:'proyect_artesanal'
};

const client = new Client(connectionData);

client.connect();
console.log('Conexión exitosa a la base de datos');


export default client;



