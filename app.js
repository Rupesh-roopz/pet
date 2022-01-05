const express = require('express');
const router = require('./src/routes/index');
const { sequelize } = require('./models');
require('dotenv').config();
const logger = require('morgan');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(logger('dev'))
app.use('/', router());

const connection = async() => {
    try {
        await sequelize
            .authenticate()
            .then(() => {
                console.log('Connection to database successfully');

            }).catch(err => {
                throw err
            })
            .catch((error) => console.log('Database connection failed...', error));

    } catch (error) {
        console.error('SERVER ERROR', error);
    }
};
connection();

// app.listen(port, (error) => {
//     if (error)
//         console.log(error);
//     console.log(`Connected to the server at port ${port}`);
// });



// app.listen(port).then(() => console.log("connected")).catch((e) => console.log(e))



module.exports = app;