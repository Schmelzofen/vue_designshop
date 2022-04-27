const express = require('express');
const app = express();
require('dotenv').config();

// MongoDB configuration
const { MongoClient } = require('mongodb');
const url = process.env.URL;
const dbName = 'sc';

let _db;

// establish connection to MongoDB
function _getDb() {
    return new Promise((resolve, reject) => {
        if (_db) {
            resolve(_db);
        }
        else {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});