//-----------SCHEMAS-----------

//-----------AUTH-----------

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

//-----------LANGUAGES-----------

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
 * components:
 *   schemas:
 *     language_update:
 *       type: object
 *       properties:
 *         lang_id:
 *           type: string
 *           description: Language id.
 *         lang_name:
 *           type: string
 *           description: Language name.
 *       required:
 *         - lang_id
 *         - lang_name
 *       example:
 *         lang_id: 1
 *         lang_name: example_name
 * 
 */


//-----------WORDS-----------


/**
 * @swagger
 * components:
 *   schemas:
 *     word_add:
 *       type: object
 *       properties:
 *         word_lang1:
 *           type: string
 *           description: Word lang 1 .
 *         word_lang2:
 *           type: string
 *           description: Word lang 2 .
 *         lang1_id:
 *           type: string
 *           description: Word lang 1 id.
 *         lang2_id:
 *           type: string
 *           description: Word lang 2 id.
 *         description:
 *           type: string
 *           description: Description for word.
 *       required:
 *         - word_lang1
 *         - word_lang2
 *         - lang1_id
 *         - lang2_id
 *         - description
 *       example:
 *         word_lang1: dummy word 1
 *         word_lang2: dummy word 2
 *         lang1_id: 1
 *         lang2_id: 2 
 *         description: Hello from wordloop api docs.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     word_update:
 *       type: object
 *       properties:
 *         word_id:
 *           type: string
 *           description: Word id.
 *         word_lang1:
 *           type: string
 *           description: Word lang 1 .
 *         word_lang2:
 *           type: string
 *           description: Word lang 2 .
 *         lang1_id:
 *           type: string
 *           description: Word lang 1 id.
 *         lang2_id:
 *           type: string
 *           description: Word lang 2 id.
 *         description:
 *           type: string
 *           description: Description for word.
 *       required:
 *         - word_id
 *         - word_lang1
 *         - word_lang2
 *         - lang1_id
 *         - lang2_id
 *         - description
 *       example:
 *         word_id: 1
 *         word_lang1: dummy word 1
 *         word_lang2: dummy word 2
 *         lang1_id: 1
 *         lang2_id: 2 
 *         description: Hello from wordloop api docs update.
 */


//-----------WORDS-LISTS-----------

/**
 * @swagger
 * components:
 *   schemas:
 *     list_add:
 *       type: object
 *       properties:
 *         list_name:
 *           type: string
 *           description: Word lang 1.
 *         lang1_id:
 *           type: string
 *           description: Word lang 1 id.
 *         lang2_id:
 *           type: string
 *           description: Word lang 2 id.
 *       required:
 *         - list_name
 *         - lang1_id
 *         - lang2_id
 *       example:
 *         list_name: Wordloop API
 *         lang1_id: 1
 *         lang2_id: 2 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     list_update:
 *       type: object
 *       properties:
 *         list_id:
 *           type: string
 *           description: List Id.
 *         list_name:
 *           type: string
 *           description: Word lang 1.
 *         lang1_id:
 *           type: string
 *           description: Word lang 1 id.
 *         lang2_id:
 *           type: string
 *           description: Word lang 2 id.
 *       required:
 *         - list_id
 *         - list_name
 *         - lang1_id
 *         - lang2_id
 *       example:
 *         list_id: 1
 *         list_name: Wordloop API
 *         lang1_id: 1
 *         lang2_id: 2 
 */

//-----------WORDS-LISTS-WORDS-----------

/**
 * @swagger
 * components:
 *   schemas:
 *     words_list_add:
 *       type: object
 *       properties:
 *         list_id:
 *           type: number
 *           description: List id 1.
 *         word_id:
 *           type: number
 *           description: Word id 2.
 *       required:
 *         - list_id
 *         - word_id
 *       example:
 *         list_id: 1
 *         word_id: 1
 */

//-----------REQUESTS-----------

//-----------AUNTIFICATION-----------

/**
 * @swagger
 * /api/users/signup:
 *  post:
 *    summary: Creates a new user.
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

//-----------LANGUAGES-----------

/**
 * @swagger
 * /api/languages/add:
 *  post:
 *    summary: Add new language.
 *    tags: [Languages]
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
 *     summary: Gets all languages.
 *     tags: [Languages]
 *     description: Fetching all data from languages.
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Language list is empty.
 *       500:
 *         description: Sever-side error.   
 */

/**
 * @swagger
 * /api/languages/id/{lang_id}:
 *   get:
 *     summary: Gets language by id.
 *     tags: [Languages]
 *     description: Fetching by id from languages.
 *     parameters:
 *        - in: path
 *          name: lang_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error. 
 */

/**
 * @swagger
 * /api/languages/update:
 *  put:
 *    summary: Updates existing language.
 *    tags: [Languages]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/language_update'
 *    responses:
 *      201:
 *        description: Updated successfully.
 *      404:
 *        description: Invalid id.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */

/**
 * @swagger
 * /api/languages/delete/{lang_id}:
 *  delete:
 *     summary: Deletes language by id.
 *     tags: [Languages]
 *     description: Deleting by id from languages.
 *     parameters:
 *        - in: path
 *          name: lang_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Record successfully deleted.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error.  
 */

//-----------WORDS-----------


/**
 * @swagger
 * /api/words/add:
 *  post:
 *    summary: Add new words.
 *    tags: [Words]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/word_add'
 *    responses:
 *      201:
 *        description: Word successfully added.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */


/**
 * @swagger
 * /api/words/all:
 *   get:
 *     summary: Gets all words.
 *     tags: [Words]
 *     description: Fetching all data from words.
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Words list is empty.
 *       500:
 *         description: Sever-side error.   
 */


/**
 * @swagger
 * /api/words/id/{word_id}:
 *   get:
 *     summary: Gets words by id.
 *     tags: [Words]
 *     description: Fetching by id from languages.
 *     parameters:
 *        - in: path
 *          name: word_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error. 
 */

/**
 * @swagger
 * /api/words/update:
 *  put:
 *    summary: Updates existing words.
 *    tags: [Words]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/word_update'
 *    responses:
 *      201:
 *        description: Updated successfully.
 *      404:
 *        description: Invalid id.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */

/**
 * @swagger
 * /api/words/delete/{word_id}:
 *  delete:
 *     summary: Deletes word by id.
 *     tags: [Words]
 *     description: Deleting by id from words.
 *     parameters:
 *        - in: path
 *          name: word_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Record successfully deleted.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error.  
 */

//-----------WORDS-LISTS-----------

/**
 * @swagger
 * /api/words-lists/add:
 *  post:
 *    summary: Add new list for words.
 *    tags: [Words Lists]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/list_add'
 *    responses:
 *      201:
 *        description: List successfully added.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */

/**
 * @swagger
 * /api/words-lists/all:
 *   get:
 *     summary: Gets all words lists.
 *     tags: [Words Lists]
 *     description: Fetching all data from words ;ists.
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Words list is empty.
 *       500:
 *         description: Sever-side error.   
 */

/**
 * @swagger
 * /api/words-lists/id/{list_id}:
 *   get:
 *     summary: Gets words list by id.
 *     tags: [Words Lists]
 *     description: Fetching by id from languages.
 *     parameters:
 *        - in: path
 *          name: list_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error. 
 */

/**
 * @swagger
 * /api/words-lists/update:
 *  put:
 *    summary: Updates existing words list.
 *    tags: [Words Lists]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/list_update'
 *    responses:
 *      201:
 *        description: Updated successfully.
 *      404:
 *        description: Invalid id.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */

/**
 * @swagger
 * /api/words-lists/delete/{list_id}:
 *  delete:
 *     summary: Deletes word list by id.
 *     tags: [Words Lists]
 *     description: Deleting by id from words lists.
 *     parameters:
 *        - in: path
 *          name: list_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Record successfully deleted.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error.  
 */

//-----------WORDS-LISTS-----------


/**
 * @swagger
 * /api/words-lists-words/add:
 *  post:
 *    summary: Adds new words to list.
 *    tags: [Words Lists Words]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/words_list_add'
 *    responses:
 *      201:
 *        description: Word to list successfully added.
 *      403:
 *        description: Access denied! You need to be authorized.
 *      500:
 *        description: Sever-side error.
 */

/**
 * @swagger
 * /api/words-lists-words/id/{list_id}:
 *   get:
 *     summary: Gets all words from list by id.
 *     tags: [Words Lists Words]
 *     parameters:
 *        - in: path
 *          name: list_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Successfull.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error. 
 */

/**
 * @swagger
 * /api/words-lists-words/delete/{word_id}:
 *  delete:
 *     summary: Deletes word from list by id.
 *     tags: [Words Lists Words]
 *     description: Deleting word by id from words-lists-words.
 *     parameters:
 *        - in: path
 *          name: word_id
 *          required: true
 *          description: Numeruc ID required.
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Record successfully deleted.
 *       403:
 *        description: Access denied! You need to be authorized.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Sever-side error.  
 */