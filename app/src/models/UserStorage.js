'use strict';

const fs = require('fs').promises;

class UserStorage {
  // 유저 id, password --> 이런건 model로 가야 함
  // class 안 변수는 const 필요 없음

  static #getUserInfo(data, id) {
    const users = JSON.parse(data);

    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    console.log(users); ///////
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile('./src/databases/Users.json') // 여기서 현재 경로는 app.js가 있는 곳
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((err) => console.error(err));
  }

  static getUserInfo(id) {
    return fs
      .readFile('./src/databases/Users.json') // 여기서 현재 경로는 app.js가 있는 곳
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error(err));
  }

  static async save(userInfo) {
    const users = await this.getUsers(true); // == 'id', 'password', 'nickName' 모든 데이터를 가져올 때 대신 true로 사용 가능 --> isAll
    if (users.id.includes(userInfo.id)) {
      // db에 이미 포함되어 있으면
      throw '이미 존재하는 아이디입니다.';
    }

    users.id.push(userInfo.id);
    users.nickName.push(userInfo.nickName);
    users.password.push(userInfo.password);

    // 데이터 추가
    fs.writeFile('./src/databases/users.json', JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
