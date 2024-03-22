import { Router } from 'express'
import { createEmployees, deleteEmployees, getEmployee, getEmployees, updateEmployees } from '../controllers/employees.controller.js'

const router = Router()

/**
 * @openapi
 * /api/employees:
 *   get:
 *     tags:
 *       - Empleados
 *     summary: Return an array of objects with employees data
 *
 *     responses:
 *       '200':
 *         description: Un array de objetos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Juan
 *                   salary:
 *                     type: integer
 *                     example: 1000
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
router.get('/employees', getEmployees)

/**
 * @openapi
 * /api/employees/{id}:
 *   get:
 *     tags:
 *       - Employee by id
 *     summary: Return an employee by ID.
 *     parameters:
 *       - name: Id
 *         in: path
 *         required: true
 *         description: employee id.
 *         schema:
 *           type: integer
 *           format: int64
 *           minimum: 1
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Juan
 *                 salary:
 *                   type: integer
 *                   example: 1000
 *       '404':
 *         description: No existe el empleado con ese Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee not found
 *       '500':
 *         description: Algo salió mal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Someting goes wrong
 */
router.get('/employees/:id', getEmployee)

/**
 * @openapi
 * /api/employees:
 *   post:
 *     tags:
 *       - Empleados
 *     summary: Add a new emplyee to the array
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               salary:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Juan
 *                 salary:
 *                   type: integer
 *                   example: 1000
 *       '500':
 *         description: Algo salió mal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Someting goes wrong
 */
router.post('/employees', createEmployees)

/**
 * @openapi
 * /api/employees/{id}:
 *   patch:
 *     tags:
 *       - Update employee data
 *     summary: Update an employee by ID.
 *     parameters:
 *       - name: Id
 *         in: path
 *         required: true
 *         description: employee id.
 *         schema:
 *           type: integer
 *           format: int64
 *           minimum: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               salary:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Juan
 *                 salary:
 *                   type: integer
 *                   example: 1000
 *       '404':
 *         description: No existe el empleado con ese Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee not found
 *       '500':
 *         description: Algo salió mal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Someting goes wrong
 */
router.patch('/employees/:id', updateEmployees)

/**
 * @openapi
 * /api/employees/{id}:
 *   delete:
 *     tags:
 *       - Delete Employee
 *     summary: Delete an employee by ID.
 *     parameters:
 *       - name: Id
 *         in: path
 *         required: true
 *         description: employee id.
 *         schema:
 *           type: integer
 *           format: int64
 *           minimum: 1
 *     responses:
 *       '204':
 *         description: OK
 *
 *       '404':
 *         description: No existe el empleado con ese Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee not found
 *       '500':
 *         description: Algo salió mal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Someting goes wrong
 */
router.delete('/employees/:id', deleteEmployees)

export default router
