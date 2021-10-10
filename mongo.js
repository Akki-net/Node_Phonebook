var mongoose =  require('mongoose');

if(process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <password>');
    process.exit(1)
};

var password = process.argv[2];
var nam = process.argv[3];
var num = process.argv[4];

var url ='mongodb+srv://fullstack:'+password+'@cluster0.by5qy.mongodb.net/myDB?retryWrites=true&w=majority';

mongoose.connect(url);

var personSchema = new mongoose.Schema({
    name: String,
    number: Number
});

var Person = mongoose.model('Person', personSchema);

if(process.argv.length === 5){
    var person = new Person({
        name: nam,
        number: num
    });

    person.save().then(function (result) {
            console.log('added'+ result.name + ' number ' + result.number + ' to phonebook');
            mongoose.connection.close();
        });
}

if(process.argv.length === 3){
Person.find({}).then(function (result) {
        console.log('phonebook:');
        result.forEach(function (p) {
                console.log(p.name, p.number);
            });
        mongoose.connection.close();
    })
}


