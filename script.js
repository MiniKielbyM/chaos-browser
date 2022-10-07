const google = "https://www.google.com/search?q=";
const q = document.getElementById('search');

function submitted() {
  const url = google + q.value;
  window.open(url, '_blank');
}
const exampleBtn = document.getElementByClassName('btn');

exampleBtn.addEventListener('click', () => {
  window.open('https://example.com', '_blank');
});
