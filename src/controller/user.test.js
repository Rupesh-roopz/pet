const app = require('../../app');
const request = require('supertest');
// const { User } = require('../../models');

// beforeAll(async() => await User.sync({ force: true }))
// afterAll(() => console.log(app))
let token;

describe('Register user', () => {
    test('Successfull user signup', async() => {
        const res = await request(app)
            .post('/user/signup')
            .send({
                firstName: 'Elon',
                lastName: 'Musk',
                gender: 'male',
                dateOfBirth: '2000-06-29',
                profession: 'Chief Incharge - tesla',
                phoneNumber: '9515084728',
                email: 'elon.musk@test.com',
                password: 'testPass@123',
                reEnterPassword: 'testPass@123',
                isAdmin: 1
            })
        expect(res.statusCode).toBe(201)
    });

    test('Return userExists if email already exists', async() => {
        const res = await request(app)
            .post('/user/signup')
            .send({
                firstName: 'Elon',
                lastName: 'Musk',
                gender: 'male',
                dateOfBirth: '2000-06-29',
                profession: 'Chief Incharge - tesla',
                phoneNumber: '9515084728',
                email: 'elon.musk@test.com',
                password: 'testPass@123',
                reEnterPassword: 'testPass@123',
                isAdmin: 1
            })
        expect(res.statusCode).toBe(409)
        expect(res.body).toHaveProperty('message')
    });

    test('Successfull user login', async() => {
        const res = await request(app)
            .post('/user/signin')
            .send({
                email: 'elon.musk@test.com',
                password: 'testPass@123'
            })
        token = res.headers.authorization;
        expect(res.statusCode).toBe(200)
        expect(res.headers).toHaveProperty('authorization')
    });

    test('Invalid user credentials', async() => {
        const res = await request(app)
            .post('/user/signin')
            .send({
                email: 'elon.musk@test.com',
                password: 'testPass@12'
            })
        expect(res.statusCode).toBe(401)
        expect(res.body).toHaveProperty('message')
    });

    test('On successfull profile update', async() => {
        const res = await request(app)
            .put('/user/profile/update')
            .set('Authorization', 'bearer ' + token)
            .send({
                firstName: 'Mukesh',
                lastName: 'Ambani',
                gender: 'male',
                reEnterPassword: 'testPass@123',
                dateOfBirth: '1968-12-29',
                profession: 'CEO',
                phoneNumber: '9515084728',
                password: 'testPass@123',
            });
        expect(res.statusCode).toBe(200)
    });

    test('Should not update if same values ', async() => {
        const res = await request(app)
            .put('/user/profile/update')
            .set('Authorization', 'bearer ' + token)
            .send({
                firstName: 'Mukesh',
                lastName: 'Ambani',
                gender: 'male',
                reEnterPassword: 'testPass@123',
                dateOfBirth: '1968-12-29',
                profession: 'CEO',
                phoneNumber: '9515084728',
                password: 'testPass@123',
            })
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.status).toBe(400);
    })
})