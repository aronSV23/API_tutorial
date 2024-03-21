import { Router } from 'express'
import { ping } from '../controllers/index.controller.js'

const router = Router()

/**
 * @openapi
 * /ping:
 *   get:
 *     tags:
 *       - PingPong
 *     sumary: Retorna un archivo Json con mensaje Pong
 *
 *     responses:
 *       200:
 *         description: a Pong object from database
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pong
 *
 *       500:
 *         description: something goes wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something goes wrong
 */
router.get('/ping', ping)

export default router
