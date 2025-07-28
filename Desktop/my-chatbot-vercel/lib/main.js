import ChatUI from '../components/ChatUI.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('chatbot-root');
  const chat = new ChatUI();
  root.appendChild(chat.render());
});