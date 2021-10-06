const mongoose =  require('mongoose');

if(process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <password>');
    process.exit(1)
};

const password = process.argv[2];
const nam = process.argv[3];
const num = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0.by5qy.mongodb.net/myDB?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
});

const Person = mongoose.model('Person', personSchema);

if(process.argv.length === 5){
    const person = new Person({
        name: nam,
        number: num
    });

    person.save().then(result => {
        console.log(`added ${result.name} number ${result.number} to phonebook`);
        mongoose.connection.close()
    });
}

if(process.argv.length === 3){
Person.find({}).then(result => {
    console.log('phonebook:');
    result.forEach(p => {
        console.log(p.name, p.number);
    })
    mongoose.connection.close()
})
}


