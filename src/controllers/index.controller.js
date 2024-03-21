import { pool } from '../config/db.js'

export const ping = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT "pong"AS result')
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({ message: 'Someting goes wrong' })
  }
}
