import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("HELLO WORLD!");
});

app.get("/:name", (req: Request, res: Response) => {
    const { name } = req.params;
    res.send(`Hi there, ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} - http://localhost:${PORT}`);
});