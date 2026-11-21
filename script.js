'use strict';

const answers = [
  '###userName###のいいところは声です。',
  '###userName###のいいところは笑顔です。',
  '###userName###のいいところは思いやりです。',
  '###userName###のいいところは行動力です。',
  '###userName###のいいところは集中力です。',
  '###userName###のいいところは優しさです。',
  '###userName###のいいところは好奇心です。',
  '###userName###のいいところは丁寧さです。',
  '###userName###のいいところは明るさです。',
  '###userName###のいいところは落ち着きです。'
];

function assessment(userName) {
  // 名前の文字コードを合計する
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode += userName.charCodeAt(i);
  }
  // 合計を結果の数で割った余りで、表示する結果を決める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll('###userName###', userName);
  return result;
}

const userNameInput = document.getElementById('user-name');
const assessButton = document.getElementById('assess');
const resultArea = document.getElementById('result-area');

assessButton.addEventListener('click', () => {
  const userName = userNameInput.value;
  if (!userName) {
    return;
  }
  // 前の診断結果を消してから、新しい結果を表示する
  resultArea.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultArea.appendChild(header);
  const paragraph = document.createElement('p');
  paragraph.innerText = assessment(userName);
  resultArea.appendChild(paragraph);
});
