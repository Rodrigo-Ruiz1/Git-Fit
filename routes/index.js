'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json('Welcome to the Git-Fit API');
});

module.exports = router;