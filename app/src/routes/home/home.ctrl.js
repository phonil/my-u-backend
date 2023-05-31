'use strict';

const User = require('../../models/User');

const output = {
  home: (req, res) => {
    res.render('home/index'); // 위에서 views로 경로 설정했기 때문에 이렇게 하면 됨
  },
  login: (req, res) => {
    res.render('home/login');
  },
  register: (req, res) => {
    res.render('home/register');
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

// 하나의 객체 안 두 함수를 내보내는 것. / 핵심은 하나의 객체로 내보내는 것
module.exports = {
  output,
  process,
};

// login : {} 속 내용
// req :: 프론트의 요청 데이터를 담아두는 변수
// 인증 과정 구현
// const id = req.body.id;
// const password = req.body.password;

// const users = UserStorage.getUsers('id', 'password');

// const response = {};

// if (users.id.includes(id)) {
//   const idx = users.id.indexOf(id);
//   if (users.password[idx] === password) {
//     response.success = true;
//     return res.json(response);
//   }
// }

// response.success = false;
// response.msg = '로그인에 실패하셨습니다.';
// return res.json(response);
