const { application } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

let persons = [
    { 
        id: 1,
        name: "Arto Hellas", 
        number: "0470123456"
      },
      { 
        id: 2,
        name: "Ada Lovelace", 
        number: "3945323523"
      },
      { 
        id: 3,
        name: "Dan Abramov", 
        number: "1432344345"
      },
      { 
        id: 4,
        name: "Mary Poppendieck", 
        number: "3946423122"
      }
];

app.get('/',(req, res) => {
    res.send('<h1>Hello World</h1>')
});

app.get('/api/persons', (req, res) => {
    res.json(persons)
});

app.get('/info', (req, res) => {
    const len = persons.length;
    const d = new Date();
    const str = `<div> <p>Phonebook has info for ${len} people</p>
    <p> ${d.toString()} </p> </div>`;
    res.send(str)
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
    res.json(newObj);
});

const Port = 3001;
app.listen(Port,() => {
    console.log(`Server is running on Port ${Port}`)
});
