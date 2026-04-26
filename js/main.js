const pageFragments = {
  header: 'components/header.html',
  footer: 'components/footer.html'
};

const sections = [
  { id: 'home',      file: 'sections/home.html',      label: 'Быт' },
  { id: 'repair',    file: 'sections/repair.html',    label: 'Ремонт' },
  { id: 'systems',   file: 'sections/systems.html',   label: 'Системы' },
  { id: 'emergency', file: 'sections/emergency.html', label: 'Экстренное' },
  { id: 'chemicals', file: 'sections/chemicals.html', label: 'Химия' },
  { id: 'house',     file: 'sections/house.html',     label: 'Частный дом' },
  { id: 'auto',      file: 'sections/auto.html',      label: 'Авто' }
];

async function loadHtml(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Ошибка загрузки: ${path}`);
  return response.text();
}

function activateSection(id) {
  const validId = sections.find((s) => s.id === id) ? id : sections[0].id;

  document.querySelectorAll('.nav a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${validId}`);
  });

  document.querySelectorAll('.section').forEach((el) => {
    const wasActive = el.classList.contains('is-active');
    const willBeActive = el.id === validId;
    if (!wasActive && willBeActive) {
      el.classList.add('is-active');
    } else if (wasActive && !willBeActive) {
      el.classList.remove('is-active');
    }
  });
}

function renderNav() {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('aria-label', 'Разделы помощи');
  nav.innerHTML = sections
    .map((s) => `<a href="#${s.id}">${s.label}</a>`)
    .join('');

  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    activateSection(id);
    history.pushState(null, '', `#${id}`);
  });

  return nav;
}

async function init() {
  const app = document.getElementById('app');
  try {
    const [header, footer, ...sectionHtml] = await Promise.all([
      loadHtml(pageFragments.header),
      loadHtml(pageFragments.footer),
      ...sections.map((s) => loadHtml(s.file))
    ]);

    app.innerHTML = header;
    app.appendChild(renderNav());
    sectionHtml.forEach((html) => app.insertAdjacentHTML('beforeend', html));
    app.insertAdjacentHTML('beforeend', footer);

    const initialId = location.hash.slice(1) || sections[0].id;
    activateSection(initialId);

    window.addEventListener('popstate', () => {
      activateSection(location.hash.slice(1) || sections[0].id);
    });
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
