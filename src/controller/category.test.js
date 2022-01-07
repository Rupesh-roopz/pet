const app = require('../../app');
const { Category } = require('../../models');
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

describe('Category API', () => {
    test('Fetch categories', async() => {
        const token = await authorisedUser();
        const res = await request(app)
            .get('/category/fetch')
            .set('Authorization', 'bearer ' + token)

        expect(res.statusCode).toEqual(200)
    });

    test('Return 403(Forbidden) for unauthorised user', async() => {
        const token = await unAuthorisedUser();
        console.log(token)
        const res = await request(app)
            .get('/category/fetch')
            .set('Authorization', 'bearer ' + token)
        expect(res.statusCode).toEqual(403)
    });

    test('Fetch categories for authorised users only', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .get('/category/fetch')
            .set('Authorization', 'bearer ' + token)
        expect(res.statusCode).not.toEqual(403)
    });

    test('Add category', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .post('/category/add')
            .set('Authorization', 'bearer ' + token)
            .send({
                categoryName: 'markety'
            })
        expect(res.status).toBe(201)
    });

    test('return 409 if category already exists', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .post('/category/add')
            .set('Authorization', 'bearer ' + token)
            .send({
                categoryName: 'markety'
            })
        expect(res.status).toBe(409)
    });

    test('On successfull category update', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .put('/category/update')
            .set('Authorization', 'bearer ' + token)
            .send({
                id: 1,
                categoryName: 'Credit'
            })
        expect(res.status).toBe(200)
    });

    test('Should not update if same values', async() => {
        const token = authorisedToken;
        const res = await request(app)
            .put('/category/update')
            .set('Authorization', 'bearer ' + token)
            .send({
                id: 1,
                categoryName: 'Credit'
            })
        console.log(res.status)
        expect(res.status).toBe(409)

    });

})



// const loginUser = (auth) => {
//     await  request
//     .post('/user/signin')
//     .send({
//         email: 'elon.musk@test.com',
//         password: 'testpass@123'
//     })
//     .expect(200)
//     .end(onResponse);
// }

// async function loginUser(auth) {
//     return function(done) {
//         await request
//             .post('/user/signin')
//             .send({
//                 email: 'elon.musk@test.com',
//                 password: 'testpass@123'
//             })
//             .expect(200)
//             .end(onResponse);

//         function onResponse(err, res) {
//             auth.token = res.body.token;
//             return done();
//         }
//     };
// }

// // afterAll(async done => {
// //     db.sequelize.close();
// //     done();
// //     });
// // // const {request} = require('supertest')
// // const { addCategory, fetchCategories } = require('./category');
// // let { Category } = require('../models/category');

// // // let { index } = require('../models/index')
// // // const app = require('../../app');
// // // const { JsonWebTokenError } = require('jsonwebtoken');
// // // // const { Request, Response} = require('supertest')
// // // jest.mock('../models/index', () => (jest.fn()));
// // jest.mock('../models/category', () => ({
// //          Category: jest.fn()
// //     }));
// // jest.mock('../models/index');
// // jest.mock('../models/category');

// test('Fetch categories', async () => {
//     Category.findAll = jest.fn().mockImplementation(() => Promise.resolve([{ username: 'han' }, { username: 'med' }]));
//     const res = {
//         status: jest.fn(() => res),
//         json: jest.fn()
//       }
//       req = {}
//     await fetchCategories(req, res).then(data => console.log(data))
//     // let mRes = { status: jest.fn().mockReturnValue(200), json:  jest.fn().mockReturnValue({ id : 1, categoryName : 'House' }) };
//     // // const mReq = { json : { id : 1, categoryName : 'House'}};
//     // let mReq = {};
//     // await Category.mockReturnValueOnce({id : 1, categoryName : 'House'})
//     // fetchCategories(mReq, mRes);
//     // expect(mRes.status().json).toBeCalledWith({ id : 1, categoryName : 'House' });

//     // Category.mockReturnValue(Promise.resolve(new Response({ id : 1, categoryName : 'House'})));
//     // Category = jest.fn().mockReturnValue();
//     // const cat = await fetchCategories();

//     // expect(cat).toHaveBeenCalledTimes(
//         // const req = {}

//         // const res = {

//         // status : jest.fn().mockReturnValue(200),  
//         // json : jest.fn().mockReturnValue('s')
//         // }



//     // await fetchCategories(req, res).then(data => console.log(data))
//     // expect(res.send).toHaveBeenCalledTimes(1)
//     // expect(res.send.mock.calls.length).toBe(1);
//     // expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');x    
//     // await fetchCategories(mReq, mRes )
//     // expect(mRes.status).toBe(200)
//     // expect(mRes.json).toBe({
//     //     id : 1, categoryName : 'House' 
//     // })

// })