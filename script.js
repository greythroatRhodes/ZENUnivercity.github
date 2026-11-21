'use strict';

// 時間帯に合わせてあいさつの文を変える
const hour = new Date().getHours();
let message = '';
if (hour >= 5 && hour < 11) {
  message = 'おはようございます。ゆずのページへようこそ。';
} else if (hour >= 11 && hour < 18) {
  message = 'こんにちは。ゆずのページへようこそ。';
} else {
  message = 'こんばんは。ゆずのページへようこそ。';
}
document.getElementById('greeting').innerText = message;
