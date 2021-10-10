require('dotenv').config();
var express = require('express');
var morgan = require('morgan');
var Person = require('./models/person');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

var errorHandler = function (error, request, response, next) {
    console.error(error.message);
    if (error.name == 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    }
    else if (error.name == 'ValidationError') {
        return response.status(400).send({ error: error.message });
    }
    next(error);
};

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/api/persons', function (req, res, next) {
        Person.find({}).then(function (result) {
                res.json(result);
            })
            .catch(function (error) {
                    return next(error);
                });
    });

app.get('/info', function (req, res, next) {
        Person.find().then(function (returnedObj) {
                var len = returnedObj.length;
                var d = new Date();
                var str = '<div> <p>Phonebook has info for' + len + 'people</p> \
                <p>' + d.toString() + '</p> </div>';
                res.send(str);
            })
            .catch(function (error) {
                    return next(error);
                });
    });

app.get('/api/persons/:id', function (req, res, next) {
        Person.findById(req.params.id)
            .then(function (result) {
                    if (result) {
                        res.json(result);
                    }
                    else {
                        res.status(404).end();
                    }
                })
            .catch(function (error) {
                    return next(error);
                });
    });

app.delete('/api/persons/:id', function (req, res, next) {
        Person.findByIdAndRemove(req.params.id)
            .then(function (result) {
                    res.status(204).end();
                })
            .catch(function (error) {
                    return next(error);
                });
    });

app.post('/api/persons', function (req, res, next) {
        var body = req.body;

        if (!body.name || !body.number) {
            return res.status(400).json({
                error: "missing content"
            });
        }

        var person = new Person({
            name: body.name,
            number: body.number
        });

        person.save().then(function (savedPerson) {
                res.json(savedPerson);
            })
            .catch(function (error) {
                    return next(error);
                });
    });

app.put('/api/persons/:id', function (req, res, next) {
        var body = req.body;
        var person = {
            name: body.name,
            number: body.number
        };

        Person.findByIdAndUpdate(req.params.id, person, { new: true })
            .then(function (updatedPerson) {
                    return res.json(updatedPerson);
                })
            .catch(function (error) {
                    return next(error);
                });
    });

var unknownEndPoint = function (request, response) {
    response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndPoint);
app.use(errorHandler);

var Port = process.env.PORT || 3001;
app.listen(Port,function () {
        console.log('Server is running on Port', Port);
    });
