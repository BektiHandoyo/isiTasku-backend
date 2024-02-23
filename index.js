const express = require('express');
const db = require('./config/Databse.js');
const dotenv = require('dotenv');
const models = require('./models/index.js')
const bodyParser = require('body-parser')
const api = require('./routes/api.js')

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

const checkDB = async() => {
    try {
        await db.authenticate();
        for(let model of models){
            model.sync();
        }
    } catch (error) {
        console.log(error);
    }
} 


async function main(){
    await checkDB();
    app.use(express.json());
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(api)

    app.listen(port, () => {
        console.log(`Server Running on Port ${port}`);
    })
}

main()

