const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const counterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
  
const CounterJoke = mongoose.model('CounterJoke', counterSchema);

const jokeSchema = mongoose.Schema({
  number: { type: Number, unique: true },
  text: String,
});

jokeSchema.pre('save', function (next) {
    const doc = this;
    CounterJoke.findByIdAndUpdate({ _id: 'number' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
    .then(function (counter) {
    doc.number = counter.seq;
    next();
    })
    .catch(function (error) {
    return next(error);
    });
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;


