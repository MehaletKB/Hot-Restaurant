import {Router} from "express";
import api from "../services/api.js";

const router = new Router();

// `reserve/`
router.get("/", (_, res) => {
    res.send("Reserve Page");
});

router.post("/", (req,res) => {
    api.add(req.body);
    res.send("Reserve Post")
})

export default router;