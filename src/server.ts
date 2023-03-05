import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma';
import { appRoutes } from './routes';

const app = Fastify();


app.register(cors); // QUALQUER APLICAÇÃO PODE CONSUMIR A API, CONFIGURÁVEL
app.register(appRoutes);

app.listen({
    port: 3333,
    host:'192.168.1.104'
}).then(() => {
    console.log("HTTP Server started!");
});
