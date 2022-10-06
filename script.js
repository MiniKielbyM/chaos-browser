const baseGoogle = "https://www.google.com/search?q=";
const q = document.getElementById('search');

function submitted() {
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}
