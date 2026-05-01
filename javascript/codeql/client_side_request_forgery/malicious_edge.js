async function loadPreview() {
  const query = new URLSearchParams(location.search);
  const folder = query.get("folder");
  const id = query.get("id");
  const response = await fetch("/api/" + folder + "/" + id + "/preview");
  const data = await response.json();
  document.getElementById("preview").innerHTML = data.html;
}

loadPreview();
