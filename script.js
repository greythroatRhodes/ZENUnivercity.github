'use strict';

// 時間帯に合わせてあいさつの文を変える
const hour = new Date().getHours();
let message = '';
if (hour >= 5 && hour < 11) {
  message = 'おはようございます。倉地のページへようこそ。';
} else if (hour >= 11 && hour < 18) {
  message = 'こんにちは。倉地のページへようこそ。';
} else {
  message = 'こんばんは。倉地のページへようこそ。';
}
document.getElementById('greeting').innerText = message;
