import { Router } from "express";

const submitRouter : Router = Router();

submitRouter.get("/result", async (req, res) => {
    res.send(req.body);
});

export {submitRouter}