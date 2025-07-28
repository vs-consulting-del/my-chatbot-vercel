export default class ChatUI {
  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'chatbox';
    this.el.innerHTML = \`
      <div class="header">
        <span>VS Legal Asistent</span>
        <div class="menu-button">⋮</div>
      </div>
      <div id="messages" class="flex-1 overflow-y-auto px-4 py-2"></div>
      <div class="flex items-center border-t px-4 py-2">
        <input id="userInput" type="text" placeholder="Unesite pitanje..." class="message-input flex-1" />
        <button id="sendBtn" class="ml-2">➤</button>
      </div>
    \`;
    this.registerEvents();
  }

  render() {
    return this.el;
  }

  registerEvents() {
    const sendBtn = this.el.querySelector('#sendBtn');
    const userInput = this.el.querySelector('#userInput');
    const messages = this.el.querySelector('#messages');

    sendBtn.onclick = () => {
      const text = userInput.value.trim();
      if (!text) return;

      const userMsg = document.createElement('div');
      userMsg.className = 'user-message';
      userMsg.innerText = text;
      messages.appendChild(userMsg);
      userInput.value = '';

      const botMsg = document.createElement('div');
      botMsg.className = 'bot-message';
      botMsg.innerText = 'Obrađujem...'; // Simulacija
      messages.appendChild(botMsg);

      setTimeout(() => {
        botMsg.innerText = 'Hvala na pitanju. Ja sam pravni asistent VS Legal tima.';
      }, 1200);
    };
  }
}