'use strict';

// app.js node server 설정들 / 실행 파일은 bin 안에 있음

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home'); // 이렇게 쓰면 index.js 읽음

// 앱 세팅
app.set('views', './src/views'); // 2번째 파라메터는 폴더 이름
app.set('view engine', 'ejs'); // 어떤 엔진으로 해석할지

app.use(express.static(`${__dirname}/src/public`));

// app.use(bodyParser.json()); // 미들웨어 등록..?

app.use(express.json());
// // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

app.use('/', home); // use -> 미들 웨어를 등록해주는 메소드
// '/' 루트 경로로 오면, home으로 이동하게 됨

module.exports = app;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////////////////////////////

// const http = require('http');
// const app = http.createServer((req, res) => {
//   // console.log(req.url); // req.url --> 경로..!! 3001/login --> /login, 그냥 3001 --> / (루트)
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//   if (req.url === '/') {
//     res.end('루트');
//   } else if (req.url === '/login') {
//     res.end('로그인');
//   }
// });

// app.listen(3001, () => {
//   console.log('http 서버');
// });
