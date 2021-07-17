import {Router} from "express";
import api from "../services/api.js"

const router = new Router();

// localhost:5000/api/
router.get("/", (_, res) => {
    res.send("hello api")
});

// localhost:5000/api/
router.get("/tables", async (_, res) => {
    const tables = await api.index("tables");
    res.status(200).json(tables)
});

router.get("/waitlist", async (_, res) => {
    const waitlist = await api.index("reservations")
    res.status(200).json(waitlist)
});

export default router;