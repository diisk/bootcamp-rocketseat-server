import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)// QUALQUER APLICAÇÃO PODE CONSUMIR A API, CONFIGURÁVEL

app.get('/', () => {
    const habits = prisma.habit.findMany();

    return habits;
});

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP Server started!");
});
