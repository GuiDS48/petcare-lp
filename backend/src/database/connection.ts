import "dotenv/config"
import { error } from "node:console"
import pg from "pg"

const { pool } = pg

export cont pool = new pool( )

pool.on("error", (error)) => {
    console.error(
        "Conexão idle encontrada ", error
    );
    process.exit(1)
}



