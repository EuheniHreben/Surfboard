const formPage = document.querySelector('.form');
const sendButtonRu = document.getElementById('sendButtonRu');
const sendButtonEn = document.getElementById('sendButtonEn');

if (sendButtonRu) {
  sendButtonRu.addEventListener('click', (event) => {
    event.preventDefault();
    const window = document.createElement('div');
    window.classList.add('window');
    formPage.appendChild(window);
    const message = document.createElement('div');
    message.classList.add('window__message');
    window.appendChild(message);
    const text = document.createElement('div');
    text.classList.add('window__text');
    text.innerHTML = 'Сообщение отправлено';
    message.appendChild(text);
    const btn = document.createElement('div');
    btn.classList.add('btn');
    btn.innerHTML = 'Закрыть';
    message.appendChild(btn);
    const body = document.body;
    body.classList.toggle('locked');
    
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      formPage.removeChild(window);
      body.classList.toggle('locked');
    })
  })
} else {
  sendButtonEn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('hello');
    const window = document.createElement('div');
    window.classList.add('window');
    formPage.appendChild(window);
    const message = document.createElement('div');
    message.classList.add('window__message');
    window.appendChild(message);
    const text = document.createElement('div');
    text.classList.add('window__text');
    text.innerHTML = 'Message sent';
    message.appendChild(text);
    const btn = document.createElement('div');
    btn.classList.add('btn');
    btn.innerHTML = 'Close';
    message.appendChild(btn);
    const body = document.body;
    body.classList.toggle('locked');
    
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      formPage.removeChild(window);
      body.classList.toggle('locked');
    })
  })
}