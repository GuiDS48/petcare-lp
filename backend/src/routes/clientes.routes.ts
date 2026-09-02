import express, { Router, Request, type Response } from "express";
import { ClienteService } from "../database/services/cliente.service";

const clientesRouter = Router()

clientesRouter.get("/cliente", (_request: Request, response: Response) => {
    try {
        const res = await
        ClienteService.getAll()

        response.json(res)
    } catch (error) {

    }

})
