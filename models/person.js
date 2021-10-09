const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const url = process.env.MONGODB_URI;

console.log('Connecting to', url);

mongoose.connect(url)
.then(result => console.log(`Connected to mongoDB`))
.catch(error => console.log(`Error connecting to MongoDB: ${error.message}`))

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20
    },
    number: {
        type: Number,
        required: true,
        maxlength: 10,
        unique: true
    }
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Person', personSchema)
