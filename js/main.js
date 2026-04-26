const pageFragments = {
  header: 'components/header.html',
  footer: 'components/footer.html'
};

const sections = [
  { id: 'home', file: 'sections/home.html', label: 'Быт' },
  { id: 'repair', file: 'sections/repair.html', label: 'Ремонт' },
  { id: 'systems', file: 'sections/systems.html', label: 'Системы' },
  { id: 'emergency', file: 'sections/emergency.html', label: 'Экстренное' },
  { id: 'chemicals', file: 'sections/chemicals.html', label: 'Химия' },
  { id: 'house', file: 'sections/house.html', label: 'Частный дом' },
  { id: 'auto', file: 'sections/auto.html', label: 'Авто' }
];

async function loadHtml(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Ошибка загрузки: ${path}`);
  return response.text();
}

function renderNav() {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('aria-label', 'Разделы помощи');
  nav.innerHTML = sections
    .map((section) => `<a href="#${section.id}">${section.label}</a>`)
    .join('');
  return nav;
}

async function init() {
  const app = document.getElementById('app');
  try {
    const [header, footer, ...sectionHtml] = await Promise.all([
      loadHtml(pageFragments.header),
      loadHtml(pageFragments.footer),
      ...sections.map((section) => loadHtml(section.file))
    ]);

    app.innerHTML = header;
    app.appendChild(renderNav());
    sectionHtml.forEach((html) => app.insertAdjacentHTML('beforeend', html));
    app.insertAdjacentHTML('beforeend', footer);
  } catch (error) {
    app.innerHTML = `
      <section class="card danger">
        <h2>Ошибка загрузки контента</h2>
        <p>Не удалось загрузить один или несколько файлов. Проверьте структуру проекта и запуск через локальный сервер.</p>
      </section>
    `;
    console.error(error);
  }
}

init();
