import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma';
import { appRoutes } from './routes';
import dayjs from 'dayjs';

const app = Fastify();


app.register(cors); // QUALQUER APLICAÇÃO PODE CONSUMIR A API, CONFIGURÁVEL
app.register(appRoutes);

app.listen({
    port: 3333,
    host:'0.0.0.0'
}).then(() => {
    console.log("HTTP Server started!");
    console.log(encodeURIComponent('2023-02-21T14:00:00.000z'))
});
