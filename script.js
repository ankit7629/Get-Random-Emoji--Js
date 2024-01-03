const emojiClick = document.querySelector('#emoji');
const emojiDetail = document.querySelector('#emojiName');



emojiClick.addEventListener('click', async () => {
  const apiFetch = await fetch('https://emoji-api.com/emojis?access_key=dfdefb33a57648f6fa456db58f1b5f388ad86845');
  const data = await apiFetch.json();
  const getIndex = Math.floor(Math.random() * data.length);
  const emoji = data[getIndex];
  emojiClick.innerHTML = emoji.character;
  emojiDetail.innerHTML = emoji.unicodeName;
})























