const formPage = document.querySelector(".form");
const sendButton = document.getElementById("sendButtonRu");

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  const window = document.createElement("div");
  window.classList.add("window");
  formPage.appendChild(window);
  const message = document.createElement("div");
  message.classList.add("window__message");
  window.appendChild(message);
  const text = document.createElement("div");
  text.classList.add("window__text");
  text.textContent = "Сообщение отправлено";
  message.appendChild(text);
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Закрыть";
  message.appendChild(btn);
  const body = document.body;
  body.classList.toggle("locked");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    formPage.removeChild(window);
    body.classList.toggle("locked");
  });
});
