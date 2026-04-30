const params = new URLSearchParams(window.location.search);

fetch(params.get("next")).then((response) => response.text()).then((body) => {
  document.body.textContent = body;
});
