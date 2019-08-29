const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamimgSchema = new Schema({

    img:  { imgData: Buffer, contentType: String, teamName: String}
}, {
    timestamps: true,

});

const teamImg = mongoose.model('teamImg', teamimgSchema);

module.exports = teamImg;