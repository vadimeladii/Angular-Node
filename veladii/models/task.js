/**
 * Created by veladii on 4/28/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Task', new Schema({
    id: Number,
    name: String,
    data: String,
    idUser:String
}));