import { Router } from "express";

let app = new Router();

app.get("/", (req,res) => {
    res.render("index");
});

export default app;
