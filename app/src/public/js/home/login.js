'use strict';
// html(프론트엔드)과 연결되어 있는 js

// DOM으로 JS에서 HTML 제어
const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  // 어떤 경로로 전달할 지 정해야 함. 서버와 프론트 어떤 경로에서 주고받을 지 결정. 해당 경로에 api가 만들어져 있어야 함 (우리의 index.js)
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 내가 보내는 데이터의 타입 명시 (json)
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      // 라우터 지웠을 때와 같은 경우 처리해줌
      console.error('로그인 중 에러 발생');
    });
  // /login이라는 경로로, 두번째 파라메터(전달할 데이터) 전달 / object 형태
}
