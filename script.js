// テーマ切替機能（JS）
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 挨拶切り替え機能（JS）
const greetBtn = document.getElementById('greet-btn');
const greeting = document.getElementById('greeting');

const messages = [
  "こんにちは！Webアプリケーション開発を学習中です。",
  "JavaScriptを使って動的なページを作成しています！",
  "ZEN大学でプログラミングを勉強中！",
  "ご覧いただきありがとうございます！"
];

let index = 0;
greetBtn.addEventListener('click', () => {
  index = (index + 1) % messages.length;
  greeting.textContent = messages[index];
});
