const app = require('../../app');
const request = require('supertest');

let authorisedToken, unAuthorisedToken;
const authorisedUser = async() => {
    const res = await request(app)
        .post('/user/signin')
        .send({
            email: 'elon.test@test.com',
            password: 'hello@123'
        })
    authorisedToken = res.headers.authorization
    return authorisedToken;
}

describe.only('Expense data API', () => {
    test('Current month existed', async() => {
        const token = await authorisedUser();
        const res = await request(app)
            .post('/expense/monthly')
            .set('Authorization', 'bearer ' + token)
            .send({
                monthStartingDate: "2022-01-01 ",
                monthlyEarnings: 100000
            })
        expect(res.status).toBe(201)
    });

    test('On successfull expense entry', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .post('/expense/add')
            .set('Authorization', 'bearer ' + token)
            .send({
                date: "2022-01-01",
                amount: 100000,
                category: "Fuel",
                paymentMethod: "Debit card",
                description: "Invested in spaceX"
            })
        expect(res.status).toBe(201)
    });

    test('Edit expense', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .put('/expense/edit')
            .set('Authorization', 'bearer ' + token)
            .send({
                id: 1,
                amount: 10000,
                paymentMethod: "Debit card",
                date: "2022-01-01",
                category: "Fuel",
                description: "Brought groceries for aliens"
            })
        expect(res.status).toBe(201)
    });

    test('Fetch expense', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .get('/expense/fetch')
            .set('Authorization', 'bearer ' + token)

        expect(res.status).toBe(200)
    });
    test('Delete expense', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .del('/expense/delete?id=1')
            .set('Authorization', 'bearer ' + token)

        expect(res.status).toBe(200)
    });
})