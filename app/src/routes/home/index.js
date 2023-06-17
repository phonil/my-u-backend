'use strict';
// 라우터

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// API 모음소 / 라우팅

router.get('/etc/luckydraw', ctrl.process.luckydraw);
router.get('/test/result', ctrl.process.result);

router.post('/user/login', ctrl.process.login);
router.post('/user/join', ctrl.process.register);

module.exports = router;
