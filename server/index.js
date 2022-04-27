const express = require('express');
const app = express();
require('dotenv').config();
const body_parser = require('body-parser');
const cors = require('cors');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors());
// MongoDB configuration
const { MongoClient } = require('mongodb');
const dbURL = process.env.URL;
const dbName = 'sc';

let _db;

// establish connection to MongoDB
function _getDb() {
    return new Promise((resolve, reject) => {
        if (_db) {
            resolve(_db);
        }
        else {
            MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(client => {
                    _db = client.db(dbName);
                    resolve(_db);
                })
                .catch(err => {
                    reject(err);
                });
        }
    });
}

// get products of collection "designshop"
function getProducts() {
    return _getDb()
        .then(db => {
            return db.collection('designshop').find().toArray();
        });
}
//


// serve products of collection "designshop"
app.get('/products', (req, res) => {
    getProducts().then(products => {
        res.send(products);
    });
});

// add product to collection "designshop"
app.post('/api/add', (req, res) => {
    const product = req.body;
    console.log(req.body)
    _getDb()
        .then(db => {
            db.collection('designshop').insertOne(product)
                .then(() => {
                    res.redirect("localhost:8080/add");
                })
                .catch(err => {
                    res.send(err);
                });
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});