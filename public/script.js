const messages = document.getElementById("messages");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const resetBtn = document.getElementById("resetBtn");
const typing = document.getElementById("typing");

function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = "message " + cls;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  addMessage("Vi: " + text, "user");
  input.value = "";
  typing.classList.remove("hidden");

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await res.json();
  typing.classList.add("hidden");
  addMessage("Asistent: " + data.reply, "bot");
}

sendBtn.onclick = sendMessage;
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

resetBtn.onclick = () => {
  messages.innerHTML = "";
};