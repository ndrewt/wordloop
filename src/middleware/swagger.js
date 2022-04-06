/**
 * @swagger
 * components:
 *   schemas:
 *     users_signup:
 *       type: object
 *       properties:
 *         user_name:
 *           type: string
 *           description: User name.
 *         user_login:
 *           type: string
 *           description: User login.
 *         user_password:
 *           type: string
 *           description: User password.
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
 * components:
 *   schemas:
 *     users_login:
 *       type: object
 *       properties:
 *         user_login:
 *           type: string
 *           description: User login.
 *         user_password:
 *           type: string
 *           description: User password.
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
 * components:
 *   schemas:
 *     language_add:
 *       type: object
 *       properties:
 *         lang_name:
 *           type: string
 *           description: Language name.
 *       required:
 *         - lang_name
 *       example:
 *         lang_name: example_name
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

/**
 * @swagger
 * /api/languages/add:
 *  post:
 *    summary: Add new language.
 *    tags: [Languges]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/language_add'
 *    responses:
 *      201:
 *        description: Language successfully added.
 *      400:
 *        description: Language is taken, try another one.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */

/**
 * @swagger
 * /api/languages/all:
 *   get:
 *     summary: Gets all languages
 *     tags: [Languges]
 *     description: Fetching all data from languages
 *     responses:
 *       200:
 *         description: Successfull 
 *       404:
 *         description: Language list is empty.
 *       500:
 *         description: Sever-side error.   
 */