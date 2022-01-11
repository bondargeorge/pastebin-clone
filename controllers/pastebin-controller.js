const Pastebin = require('../models/Pastebin');

exports.getPastebin = async function() {
    return await Pastebin.find();
};

exports.createPastebin = async function(pastebinText) {
    return await Pastebin.create({ pastebinText });
};

exports.deletePastebin = async function() {
    return await Pastebin.deleteOne({
        name: "pastebinText"
    });
};