import { pool } from '../config/db.js'

export const ping = async (req, res) => {
  try {
    console.log('ping recibido')
    const [result] = await pool.query('SELECT "pong"AS result')
    res.json(result[0])
    console.log('pong enviado')
  } catch (error) {
    console.log('fallo en db')
    return res.status(500).json({ message: 'Someting goes wrong' })
  }
}
