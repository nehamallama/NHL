const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamimgSchema = new Schema({
    img: { data: Buffer, contentType: String }
}, {
    timestamps: true,
});

const teamImg = mongoose.model('teamImg', teamimgSchema);

module.exports = teamImg;