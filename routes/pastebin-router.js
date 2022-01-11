// Require the controllers for the routing operations
const Controller = require('../controllers/pastebin-controller');

// Require express and connect it to the router
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    pastebins = await Controller.getPastebin();
    res.render('index.ejs', pastebins);
});

router.post('/pastebins', async(req, res) => {
    const {pastebinText} = req.body;
    await Controller.createPastebin(pastebinText);
    res.redirect('/');
});

router.delete('/pastebins', async(req, res) => {
    let pastebinDelete = await Controller.deletePastebin();
    if (pastebinDelete.deletedCount === 0) {
        return res.json('No pastebin to delete');
    }
    res.json('Deleted pastebin');
});

module.exports = router;