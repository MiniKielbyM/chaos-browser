const google = "https://www.google.com/search?q=";
const q = document.getElementById('search');

function submitted() {
  const url = google + q.value;
  window.open(url, '_blank');
}
