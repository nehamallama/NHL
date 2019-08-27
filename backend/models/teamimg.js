const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamImgSchema = new Schema({
    img: { data: Buffer, contentType: String }
}, {
    timestamps: true,
});

const TeamImg = mongoose.model('TeamImg', TeamImgSchema);

module.exports = TeamImg;