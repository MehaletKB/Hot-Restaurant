import express from "express";
import apiRouter from "./routes/api.js"
import reserveRouter from "./routes/reserve.js"

const app = express();
const PORT = 5000;

app.use ("/api", apiRouter);

app.use(express.json());

// for any routes ending with "/reserve" USE reverseRouter to handle the request
app.use("/reserve", reserveRouter);

// `get` is handling GET requests to the homepage directly
app.get("/", (_, res) => {
    res.send("Hello Home!");
});

app.listen(PORT, () => {
    console.info(`Server running on ${PORT}`);
});