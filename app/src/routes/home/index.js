'use strict';
// 라우터

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// API 모음소인듯..?
// 여기서 라우팅 하는듯
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

module.exports = router;
