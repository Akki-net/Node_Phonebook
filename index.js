require('dotenv').config();
const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const Person = require('./models/person');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    if(error.name == 'CastError'){
        return response.status(400).send({error: 'malformatted id'})
    }
    else if(error.name == 'ValidationError'){
        return response.status(400).send({error: error.message})
    }
    next(error)
};

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/api/persons', (req, res,next) => {
    Person.find().then(result => {
        res.json(result);  
    })
    .catch(error => next(error))
});

app.get('/info', (req, res,next) => {
    Person.find().then(returnedObj => {
        const len = returnedObj.length;
        const d = new Date();
        const str = `<div> <p>Phonebook has info for ${len} people</p>
                     <p> ${d.toString()} </p> </div>`;
        res.send(str);
    })
    .catch(error => next(error))
});

app.get('/api/persons/:id', (req,res,next) => {
    Person.findById(req.params.id)
    .then(result => {
        if(result){
            res.json(result)
        }
        else{
            res.status(404).end()
        }
})
    .catch(error => next(error))
});

app.delete('/api/persons/:id', (req,res,next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => next(error))
});

app.post('/api/persons', (req,res, next) => {
    const body = req.body;

    if(!body.name || !body.number){
        return res.status(400).json({
            error: "missing content"
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    });
    
    person.save().then(savedPerson => {
        res.json(savedPerson);
    })
    .catch(error => next(error))
});

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body;
    const person = {
        name: body.name,
        number: body.number
    };

    Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatedPerson => res.json(updatedPerson))
    .catch(error => next(error))
});

const unknownEndPoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
};

app.use(unknownEndPoint);
app.use(errorHandler);

const Port = process.env.PORT || 3001;
app.listen(Port,() => {
    console.log(`Server is running on Port ${Port}`)
});
