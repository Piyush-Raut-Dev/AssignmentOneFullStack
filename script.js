function changeText() {
    document.getElementById('dynamicText').innerText = 'Text updated with JavaScript!';
  }
  
  document.getElementById('toggleColor').addEventListener('click', () => {
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = box.style.backgroundColor === 'rgb(30, 58, 138)' ? '#3b82f6' : '#1e3a8a';
  });
  
  document.getElementById('sampleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('formMessage');
    message.innerText = username ? 'Username submitted!' : 'Please enter a username.';
  });
  
  document.getElementById('addItem').addEventListener('click', () => {
    const input = document.getElementById('listInput');
    const list = document.getElementById('dynamicList');
    if (input.value) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerText = input.value;
      list.appendChild(li);
      input.value = '';
    }
  });