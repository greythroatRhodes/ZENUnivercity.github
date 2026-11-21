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

// 紙吹雪を大量に降らせる
function confetti() {
  const colors = ['#ff0000', '#ff8c00', '#ffd700', '#00c853', '#2979ff', '#aa00ff'];
  for (let i = 0; i < 300; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti';
    const size = Math.floor(Math.random() * 11) + 8;
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    if (Math.random() < 0.5) {
      piece.style.borderRadius = '50%';
    }
    piece.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    document.body.appendChild(piece);
    // 降り終わったら消す
    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}

const userNameInput = document.getElementById('user-name');
const assessButton = document.getElementById('assess');
const resultArea = document.getElementById('result-area');
const fever = document.getElementById('fever');
const flash = document.getElementById('flash');

assessButton.addEventListener('click', () => {
  const userName = userNameInput.value;
  if (!userName) {
    return;
  }
  // 演出中はボタンを押せなくする
  assessButton.disabled = true;
  fever.style.display = 'none';
  resultArea.innerText = '';
  const paragraph = document.createElement('p');
  paragraph.className = 'result-text';
  resultArea.appendChild(paragraph);

  // 画面を揺らしながら、スロットみたいに結果を高速で切り替える
  document.body.classList.add('shaking');
  const timer = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    let text = answers[randomIndex];
    text = text.replaceAll('###userName###', userName);
    paragraph.innerText = text;
    paragraph.style.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  }, 50);

  // 約2秒後に本当の結果で止める
  setTimeout(() => {
    clearInterval(timer);
    document.body.classList.remove('shaking');
    paragraph.innerText = '🎉 ' + assessment(userName) + ' 🎉';
    paragraph.className = 'result-final';
    paragraph.style.color = '';
    // フラッシュ＋フィーバー表示＋紙吹雪300枚
    flash.classList.remove('go');
    void flash.offsetWidth;
    flash.classList.add('go');
    fever.style.display = 'block';
    confetti();
    setTimeout(() => {
      fever.style.display = 'none';
    }, 3500);
    assessButton.disabled = false;
  }, 2000);
});
