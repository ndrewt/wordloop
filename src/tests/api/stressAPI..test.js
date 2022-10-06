const request = require('supertest')
const app = require('../../app')

jest.setTimeout(600000)

// let users = []
// for (let i = 0; i <= 50; i++) {
//     users.push({
//         user_name: `User name#${i}`,
//         user_login: `login#${i}`,
//         user_password: "testpass_wordloop"
//     })
// }

// describe("Users stress test", () => {
//     test("Successfull creation 50 users", async() => {
//         let res
//         for (let i = 0; i < users.length + 1; i++) {
//             let req = await request(app)
//                 .post("/api/users/signup")
//                 .send(users[i])
//             if (!users[i + 1]) {
//                 res = req
//                 break
//             }
//         }
//         expect(res.statusCode).toEqual(201)
//     })
// })

afterAll(done => {
    jest.useFakeTimers();
    done()
})