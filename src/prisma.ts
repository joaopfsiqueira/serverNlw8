import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    //mostrando no log do terminal as query que o prisma utiliza.
    log: ['query']
});
