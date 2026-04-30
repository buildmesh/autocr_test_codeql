const endpoints = new Map([["profile", "/api/profile"], ["status", "/api/status"]]);
const params = new URLSearchParams(window.location.search);

fetch(endpoints.get(params.get("target")) || "/api/status").then((response) => response.text()).then((body) => {
  document.body.textContent = body;
});
