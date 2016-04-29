/**
 * Created by veladii on 4/26/16.
 */

var express = require('express');
var config = require('./config');
var User = require('./models/user');
var Task = require('./models/task');
var repository = require('./repository/repository');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var morgan = require('morgan');
var path = require('path');
var jwt = require('jsonwebtoken');

app.listen(config.PORT);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(config.URL_DB);
var apiRoutes = express.Router();
app.use('/api', apiRoutes);
app.use(morgan('dev'));

/*  users  */

apiRoutes.get('/v1/users', function (req, res) {
    User.find(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

apiRoutes.get('/v1/users/:name', isAuth, function (req, res) {
    User.find({username: req.params.username}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

app.use(express.static(__dirname+"/home"));

apiRoutes.post('/v1/users', function (req, res) {

    var user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save(function (err) {
        if (err) throw err;
        console.log('User saved successfully');
        res.json({success: true});
    });
});

apiRoutes.put('/v1/users/:username', function (req, res) {
    User.find({username: req.body.username}, function (err, user) {
        if (err)
            req.send(err);
        user.username = req.body.username;
        user.save(function (err) {
            if (err) throw err;
            console.log('user saved successfully');
            res.json(user);
        });
    });
});

apiRoutes.delete('/v1/users', function (req, res) {
    User.remove({username: req.body.username}, function (err) {
        if (err)
            res.send(err);

        res.json({success: true});
    });
});

/*  tasks  */

apiRoutes.post('/v1/tasks',function (req, res) {
    var task = new Task({
        id: req.body.id,
        name: req.body.name,
        data:req.body.data,
        idUser:req.body.idUser
    });
    task.save(function (err) {
        if (err) throw err;
        console.log('task saved successfully');
        res.json({success: true});
    });
});

apiRoutes.get('/v1/tasks', function (req, res) {
    Task.find(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

apiRoutes.delete('/v1/tasks', function (req, res) {
    Task.remove({id: req.body.id}, function (err) {
        if (err)
            res.send(err);
        res.json({success: true});
    });
});

/* token */

function isAuth(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.SECRET, function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {

        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
}

apiRoutes.post('/v1/users/auth', function (req, res) {
    User.findOne({
        username: req.body.name
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        } else {
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {
                var token = jwt.sign(user, config.SECRET, {});
                res.json({
                    success: true,
                    token: token
                });
            }
        }
    });
});




