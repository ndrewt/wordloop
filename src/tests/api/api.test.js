const request = require('supertest')
const app = require('../../app')

let token, lang_id, lang2_id, lang3_id, word_id, word2_id, word3_id, list_id, list2_id

const newUser = {
    user_name: "test name",
    user_login: "test_login",
    user_password: "testpass_wordloop"
}

beforeAll(done => {
    done()
})

describe("Test application ", () => {
    test("Not Found route", async() => {
        const res = await request(app).get("/api/wrong-endpoint")
        expect(res.statusCode).toEqual(404)
    })

    describe("Test authorization", () => {
        describe("Test user registration", () => {
            test("User can successfully register with correct data", async() => {
                const res = await request(app)
                    .post('/api/users/signup')
                    .send(newUser)
                expect(res.statusCode).not.toEqual(500)
            })
        })

        describe("Test login", () => {
            test("Successfull login with correct data", async() => {
                const res = await request(app)
                    .post('/api/users/login')
                    .send({
                        user_login: "test_login",
                        user_password: "testpass_wordloop"
                    })
                expect(res.statusCode).toEqual(200)
                token = res.body.token
            })
        })

        describe("Test error access", () => {
            test("Should require authorization", async() => {
                const res = await request(app)
                    .get("/api/languages/all")
                expect(res.statusCode).toEqual(403)
            })
        })

        describe("Test success access", () => {
            test("Success authorization with JWT key", async() => {
                const res = await request(app)
                    .get("/api/languages/all")
                    .set('Authorization', `Bearer ${token}`)
                expect(res.statusCode).not.toEqual(500)
            })
        })
    })

    describe("Test Languages routes", () => {
        test("Successfull added language", async() => {
            const res = await request(app)
                .post("/api/languages/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    lang_name: "TEST RANDOM DATA1:" + Math.random() * 100
                })
            expect(res.statusCode).toEqual(201)
            const res2 = await request(app)
                .post("/api/languages/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    lang_name: "TEST RANDOM DATA2:" + Math.random() * 100
                })
            expect(res2.statusCode).toEqual(201)
            const res3 = await request(app)
                .post("/api/languages/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    lang_name: "TEST RANDOM DATA3:" + Math.random() * 100
                })
            expect(res3.statusCode).toEqual(201)
        })

        test("Successfull error with not valid data", async() => {
            const res = await request(app)
                .post("/api/languages/add")
                .set('Authorization', `Bearer ${token}`)
                .send({})
            expect(res.statusCode).toEqual(403)
        })

        test("Successfull fetching all languages", async() => {
            const res = await request(app)
                .get("/api/languages/all")
                .set('Authorization', `Bearer ${token}`)
            lang_id = res.body.data[0].lang_id
            lang2_id = res.body.data[1].lang_id
            lang3_id = res.body.data[2].lang_id
            expect(res.statusCode).toEqual(200)
        })

        test("Successfully finded language by lang_id", async() => {
            const res = await request(app)
                .get("/api/languages/id/" + lang_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

        test("Successfully updated language", async() => {
            const res = await request(app)
                .put("/api/languages/update")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    lang_id: lang_id,
                    lang_name: "Test update"
                })
            expect(res.statusCode).toEqual(201)
        })

        test("Successfully deleted language by lang_id", async() => {
            const res = await request(app)
                .delete("/api/languages/delete/" + lang3_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

    })

    describe("Test Words routes", () => {
        test("Successfully added new word", async() => {
            const res = await request(app)
                .post("/api/words/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    word_lang1: "Test word 1",
                    word_lang2: "Test word 2",
                    lang1_id: lang_id,
                    lang2_id: lang2_id,
                    description: "--Test--"
                })
            expect(res.statusCode).toEqual(201)
            const res2 = await request(app)
                .post("/api/words/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    word_lang1: "Test word 1",
                    word_lang2: "Test word 2",
                    lang1_id: lang_id,
                    lang2_id: lang2_id,
                    description: "--Test--"
                })
            expect(res2.statusCode).toEqual(201)
            const res3 = await request(app)
                .post("/api/words/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    word_lang1: "Test word 1",
                    word_lang2: "Test word 2",
                    lang1_id: lang_id,
                    lang2_id: lang2_id,
                    description: "--Test--"
                })
            expect(res3.statusCode).toEqual(201)
        })

        test("Successfully fetched  all words", async() => {
            const res = await request(app)
                .get("/api/words/all")
                .set('Authorization', `Bearer ${token}`)
            word_id = res.body.data[0].word_id
            word2_id = res.body.data[1].word_id
            word3_id = res.body.data[2].word_id

            expect(res.statusCode).toEqual(200)
        })

        test("Successfully finded word by word_id", async() => {
            const res = await request(app)
                .get("/api/words/id/" + word_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

        test("Successfully updated word", async() => {
            const res = await request(app)
                .put("/api/words/update")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    word_id: word_id,
                    word_lang1: "Test word 1",
                    word_lang2: "Test word 2",
                    lang1_id: lang_id,
                    lang2_id: lang2_id,
                    description: "--Test Update--"
                })
            expect(res.statusCode).toEqual(201)
        })

        test("Successfully deleted word", async() => {
            const res = await request(app)
                .delete("/api/words/delete/" + word3_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

    })

    describe("Test Words Lists routes", () => {
        test("Successfully added new list", async() => {
            const res = await request(app)
                .post("/api/words-lists/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    list_name: "Test name1",
                    lang1_id: lang_id,
                    lang2_id: lang2_id
                })
            expect(res.statusCode).toEqual(201)
            const res2 = await request(app)
                .post("/api/words-lists/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    list_name: "Test name2",
                    lang1_id: lang_id,
                    lang2_id: lang2_id
                })
            expect(res2.statusCode).toEqual(201)
        })

        test("Successfully fetched  all words lists", async() => {
            const res = await request(app)
                .get("/api/words-lists/all")
                .set('Authorization', `Bearer ${token}`)
            list_id = res.body.data[0].list_id
            list2_id = res.body.data[1].list_id

            expect(res.statusCode).toEqual(200)
        })

        test("Successfully finded word list by list_id", async() => {
            const res = await request(app)
                .get("/api/words-lists/id/" + list_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

        test("Successfully updated words list", async() => {
            const res = await request(app)
                .put("/api/words-lists/update")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    list_id: list_id,
                    list_name: "Test update",
                    lang1_id: lang_id,
                    lang2_id: lang2_id
                })
            expect(res.statusCode).toEqual(201)
        })

        test("Successfully deleted words list", async() => {
            const res = await request(app)
                .delete("/api/words-lists/delete/" + list2_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

    })

    describe("Test Words-List-Words routes", () => {
        test("Successfully added new word to list", async() => {
            const res = await request(app)
                .post("/api/words-lists-words/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    list_id: list_id,
                    word_id: word_id
                })
            expect(res.statusCode).not.toEqual(500)
            const res2 = await request(app)
                .post("/api/words-lists-words/add")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    list_id: list_id,
                    word_id: word2_id
                })
            ress = res2.body
            expect(res2.statusCode).not.toEqual(500)
        })

        test("Successfully finded all words from list by list_id", async() => {
            const res = await request(app)
                .get("/api/words-lists-words/id/" + list_id)
                .set('Authorization', `Bearer ${token}`)
            list_word_id = res.body.data[0].word_id
            list2_word_id = res.body.data[1].word_id
            expect(res.statusCode).toEqual(200)
        })

        test("Successfully deleted word from list", async() => {
            const res = await request(app)
                .delete("/api/words-lists-words/delete/" + word2_id)
                .set('Authorization', `Bearer ${token}`)
            expect(res.statusCode).toEqual(200)
        })

    })


})
afterAll(done => {
    jest.useFakeTimers();
    done()
})