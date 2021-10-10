var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var url = process.env.MONGODB_URI;

console.log('Connecting to', url);

mongoose.connect(url)
.then(function(result){console.log('Connected to mongoDB')})
.catch(function(error){console.log('Error connecting to MongoDB: ',error.message)})

var personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    number: {
        type: Number,
        required: true,
        maxlength: 10,
        minlength: 8,
    }
});

(function(){personSchema.plugin(uniqueValidator)})()

personSchema.set('toJSON', {
    transform: function (document, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Person', personSchema)
