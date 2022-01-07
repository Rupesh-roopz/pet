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

const unAuthorisedUser = async() => {
    const res = await request(app)
        .post('/user/signin')
        .send({
            email: 'elon.test1@test.com',
            password: 'hello@123'
        })

    unAuthorisedToken = res.headers.authorization;
    return unAuthorisedToken
}

// beforeAll(async() => await PaymentMethod.sync({ force: true }))
// afterAll( async () => await Category.destroy({ truncate : true}) )

describe('Payment methoad API', () => {
    test('Fetch payment methoad names', async() => {
        const token = await authorisedUser();
        const res = await request(app)
            .get('/payment-method')
            .set('Authorization', 'bearer ' + token)
        expect(res.statusCode).toEqual(200)
    });

    test('Return 403(Forbidden) for unauthorised user', async() => {
        const token = await unAuthorisedUser();

        const res = await request(app)
            .get('/payment-method')
            .set('Authorization', 'bearer ' + token)
        expect(res.statusCode).toEqual(403)
    });

    test('Fetch payment method for authorised users only', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .get('/payment-method')
            .set('Authorization', 'bearer ' + token)
        expect(res.statusCode).not.toEqual(403)
    });

    test('Add payment method', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .post('/payment-method')
            .set('Authorization', 'bearer ' + token)
            .send({
                paymentMethodName: 'markety'
            })
        expect(res.status).toBe(201)
    });

    test('return 409 if payment methoad already exists', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .post('/payment-method')
            .set('Authorization', 'bearer ' + token)
            .send({
                paymentMethodName: 'markety'
            })
        expect(res.status).toBe(409)
    });

    test('On successfull payment methoad update', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .put('/payment-method')
            .set('Authorization', 'bearer ' + token)
            .send({
                id: 2,
                paymentMethodName: 'Credit'
            })
        expect(res.status).toBe(200)
    });

    test('Should not update if same values', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .put('/payment-method')
            .set('Authorization', 'bearer ' + token)
            .send({
                id: 2,
                paymentMethodName: 'Credit'
            })
        expect(res.status).toBe(409)
    });

})