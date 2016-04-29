/**
 * Created by veladii on 4/25/16.
 */

var util = require('./../config');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var var_db;

var url = util.URL_DB;
MongoClient.connect(url, function (err, db) {
    if (!err) {
        console.log(util.CONNECTION_DB_OK);
        var_db = db;
    } else {
        console.log(util.CONNECTION_DB_ERROR);
    }
});

var Users = {
    selectAll: function (callback) {
        var_db.collection('users').find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    },
    add: function (user, callback) {
        var_db.collection('users').insertOne(user, function (err, result) {
            assert.equal(err, null);
            callback(result)
        })
    },
    selectById: function (id, callback) {
        var_db.collection('users').find({"id": id}).toArray(function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    },
    removeById: function (id, callback) {
        var_db.collection('users').deleteOne({"id": id}, function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    },
    update: function (user, callback) {
        var_db.collection('users').updateOne({id: user.id}, user, function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    },
    remove: function (user, callback) {
        var_db.collection('users').findOneAndDelete({"id":user.id}, function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    }
};

module.exports = Users;




