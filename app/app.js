'use strict';

// app.js node server 설정들 / 실행 파일은 bin 안에

// 모듈
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', home); // '/' 루트 경로로 오면, home으로 이동

module.exports = app;
