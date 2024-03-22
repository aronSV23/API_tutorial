import { Router } from 'express'
import { ping } from '../controllers/index.controller.js'

const router = Router()

/**
 * @openapi
 * /ping:
 *   get:
 *     tags:
 *       - PingPong
 *     summary: Return a Pong object from database
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
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
