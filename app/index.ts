import { Hono } from "hono";
//import { PrismaClient } from "../generated/prisma/client";
import PrismaClient from "@prisma/client";                                                                                         


const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => c.text("Hello World!"));

app.get("/about", (c) => {
    return c.json ({
        mwssage: "Anupong Janjaroen"
    });
});
app.get("/profile",() => {
    //logic
    const profile = prisma.profile.findmany();
    return profile;
});

export default app;
