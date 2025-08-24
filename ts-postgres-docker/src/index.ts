import express, { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3000);

const pool = new Pool({
    host: process.env.DB_HOST || "db",
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "mydb",
    max: 10
});

pool.on("error", (err) => {
    console.error("Unexpected PG error:", err);
});

app.get("/:id(\\d+)", async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const result = await pool.query<{ name: string }>(
            "SELECT name FROM people WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "not found" });
        }
        return res.json({ id, name: result.rows[0]!.name });
    } catch (err) {
        console.error("DB query failed:", err);
        return res.status(500).json({ error: "internal error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} - http://localhost:${PORT}`);
});