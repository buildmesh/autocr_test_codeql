const request = new XMLHttpRequest();
const target = window.location.hash.slice(1);

request.open("GET", target);
request.onload = () => {
  document.body.textContent = request.responseText;
};
request.send();
