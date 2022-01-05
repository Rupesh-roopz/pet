const app = require('../../app');
const request = require('supertest');

let authorisedToken;
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

describe.only('Search data API', () => {
    test('Search between dates', async() => {
        const token = await authorisedUser();
        const res = await request(app)
            .post('/search/dates')
            .set('Authorization', 'bearer ' + token)
            .send({
                "fromDate": "2022-01-01",
                "endDate": "2022-01-15"
            })
        expect(res.status).toBe(200)
    });
    test('Current month existed', async() => {
        const token = await authorisedUser();
        const res = await request(app)
            .post('/search/advancedSearch')
            .set('Authorization', 'bearer ' + token)
            .send({
                "fromDate": "2022-01-01",
                "endDate": "2022-01-15",
                "categoryName": "Fuel",
                "paymentMethod": "Credit",
                "priceRange": 200000
            })
        expect(res.status).toBe(200)
    });
})