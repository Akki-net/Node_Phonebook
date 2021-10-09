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
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/api/persons', (req, res) => {
    Person.find().then(result => {
        res.json(result);  
    })
});

app.get('/info', (req, res) => {
    Person.find().then(returnedObj => {
        const len = returnedObj.length;
        const d = new Date();
        const str = `<div> <p>Phonebook has info for ${len} people</p>
                     <p> ${d.toString()} </p> </div>`;
        res.send(str);
    })
});

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id);
    const person = persons.find(p => p.id === id);

    if(person){
        res.json(person);
    }
    else{
        res.status(404).end()
    }
});

app.delete('/api/persons/:id', (req,res) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => {
        console.error(error.message);
        if(error.name == 'CastError'){
            return response.status(400).send({error: 'malformatted id'})
        }
    })
});

app.post('/api/persons', (req,res) => {
    const body = req.body;

    if(!body.name || !body.number){
        return res.status(400).json({
            error: "no content"
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    });
    
    person.save().then(savedPerson => {
        morgan.token('body', (req, res) => JSON.stringify(savedPerson));
        res.json(savedPerson);
    })
});

const Port = process.env.PORT || 3001;
app.listen(Port,() => {
    console.log(`Server is running on Port ${Port}`)
});
