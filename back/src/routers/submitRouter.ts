import { Router } from "express";

const submitRouter : Router = Router();

submitRouter.get("/", async (req, res) => {
    res.send(req.body);
});

export default submitRouter