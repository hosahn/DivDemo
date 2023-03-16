import { Router } from "express";

const pdfRouter : Router = Router();

pdfRouter.get("/", async (req, res) => {
    res.send(req.body);
});

export default pdfRouter