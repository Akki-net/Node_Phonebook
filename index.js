require('dotenv').config();
const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const Person = require('./models/person');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static('build'));

app.get('/',(req, res) => {
    res.send('<h1>Hello World</h1>')
});

app.get('/api/persons', (req, res) => {
    Person.find().then(result => res.json(result))
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
    const id = Number(req.params.id);
    persons = persons.filter(p => p.id !== id);
    res.status(202).end()
});

app.post('/api/persons', (req,res) => {
    const getRandId = () => {
        return parseInt(Math.random() * 100);
    };

    const body = req.body;

    if(!body.name || !body.number){
        res.status(400).json({
            error: "no content"
        })
    }
    else{
        persons.filter(p => {
            if(p.name === body.name){
        res.status(400).json({
            error: 'name must be unique'
        })
        }
    })
    }

    const person = {
        id: getRandId(),
        name: body.name,
        number: body.number
    };
    
    const newObj = persons.concat(person);
    morgan.token('body', (req, res) => JSON.stringify(person));
    res.json(newObj);
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
});

const Port = process.env.PORT || 3001;
app.listen(Port,() => {
    console.log(`Server is running on Port ${Port}`)
});
