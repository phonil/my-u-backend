'use strict';

const User = require('../../models/User');

const process = {
  luckydraw: (req, res) => {
    const random = Math.floor(Math.random() * 4); // 0~3 난수 발생
    const luck = {
      result: 0,
      score: '',
      msg: '',
    };
    switch (random) {
      case 0:
        luck.result = 2.0;
        luck.score = 'C';
        luck.msg = '당신의 오늘은 C입니다.';
        break;
      case 1:
        luck.result = 3.0;
        luck.score = 'B';
        luck.msg = '당신의 오늘은 B입니다.';
        break;
      case 2:
        luck.result = 4.0;
        luck.score = 'A';
        luck.msg = '당신의 오늘은 A입니다.';
        break;
      case 3:
        luck.result = 4.5;
        luck.score = 'A+';
        luck.msg = '당신의 오늘은 A+입니다.';
        break;
    }
    return res.json(luck);
  },

  result: async (req, res) => {
    const client = req.body;
    const result = {
      type: '',
    };
    if (client.score > 10 && client.score < 20) {
      result.type = '새내기';
    }
    return res.json(result);
  },

  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

//  하나의 객체로 내보내는
module.exports = {
  process,
};
