const sectionFiles = [
  "sections/tools.html",
  "sections/plumbing.html",
  "sections/electricity.html",
  "sections/walls.html",
  "sections/furniture.html",
  "sections/emergency.html",
  "sections/chemicals.html"
];

function getFallback(path) {
  if (window.BAZA_FALLBACK && window.BAZA_FALLBACK[path]) {
    return window.BAZA_FALLBACK[path];
  }
  return null;
}

async function fetchHtml(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Не удалось загрузить ${path}`);
    return await response.text();
  } catch (error) {
    const fallback = getFallback(path);
    if (fallback) return fallback;
    throw error;
  }
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
    document.getElementById("sections").innerHTML =
      '<div class="important-banner"><span class="ib-icon">⚠️</span><span>Не удалось загрузить разделы. Откройте проект через локальный сервер (например, <code>python3 -m http.server</code>), если используете режим <code>file://</code>.</span></div>';
  }
})();
