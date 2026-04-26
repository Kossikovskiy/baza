const sectionFiles = [
  "sections/tools.html",
  "sections/plumbing.html",
  "sections/electricity.html",
  "sections/walls.html",
  "sections/furniture.html",
  "sections/emergency.html",
  "sections/chemicals.html"
];

async function fetchHtml(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Не удалось загрузить ${path}`);
  return response.text();
}

async function loadFragment(targetId, path) {
  document.getElementById(targetId).innerHTML = await fetchHtml(path);
}

async function loadSections() {
  const sections = await Promise.all(sectionFiles.map(fetchHtml));
  document.getElementById("sections").innerHTML = sections.join("\n");
}

(async function initBaza() {
  try {
    await loadFragment("header", "components/header.html");
    await loadSections();
    await loadFragment("footer", "components/footer.html");
  } catch (error) {
    console.error("Ошибка загрузки контента:", error);
  }
})();
