const params = new URLSearchParams(window.location.search);
const target = new URL(params.get("next") || "/api/status", window.location.origin);

if (target.origin === window.location.origin) {
  fetch(target.toString()).then((response) => response.text()).then((body) => {
    document.body.textContent = body;
  });
}
