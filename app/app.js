'use strict';

// app.js node server 설정들 / 실행 파일은 bin 안에

// 모듈
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

// 라우팅
const home = require('./src/routes/home'); // 이렇게 쓰면 index.js 읽음

// 앱 세팅
app.set('views', './src/views'); // 2번째 파라메터는 폴더 이름
app.set('view engine', 'ejs'); // 어떤 엔진으로 해석할지

app.use(express.static(`${__dirname}/src/public`));

// app.use((req, res, next) => {
//   console.log('Cookies: ', req.cookies);
//   next();
// });

app.use(express.json());
// // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

app.use('/', home); // use -> 미들웨어 등록
// '/' 루트 경로로 오면, home으로 이동

module.exports = app;
