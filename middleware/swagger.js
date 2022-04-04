/**
 * @swagger
 * components:
 *   schemas:
 *     users_signup:
 *       type: object
 *       properties:
 *         user_name:
 *           type: string
 *           description: The user name.
 *         user_login:
 *           type: string
 *           description: The user login.
 *         user_password:
 *           type: string
 *           description: The user password.
 *       required:
 *          user_name
 *         - user_login
 *         - user_password
 *       example:
 *         user_name: example_name
 *         user_login: example_login
 *         user_password: example_password
 * 
 */

/**
 * @swagger
 * /api/users/signup:
 *  post:
 *    summary: Create a new user.
 *    tags: [Auntification]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/users_signup'
 *    responses:
 *      201:
 *        description: User successfully created.
 *      500:
 *        description: Sever-side error.
 *      400:
 *        description: Login is taken, try another one.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     users_login:
 *       type: object
 *       properties:
 *         user_login:
 *           type: string
 *           description: The user login.
 *         user_password:
 *           type: string
 *           description: The user password.
 *       required:
 *         - user_login
 *         - user_password
 *       example:
 *         user_login: example_login
 *         user_password: example_password
 * 
 */

/**
 * @swagger
 * /api/users/login:
 *  post:
 *    summary: Login user.
 *    tags: [Auntification]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/users_login'
 *    responses:
 *      200:
 *        description: Successful login.
 *      500:
 *        description: Sever-side error.
 *      400:
 *        description: Invalid login or password.
 */