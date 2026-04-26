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

function renderNav() {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('aria-label', 'Разделы помощи');
  nav.innerHTML = sections
    .map((s) => `<a href="#${s.id}">${s.label}</a>`)
    .join('');
  return nav;
}

function initActiveNav() {
  const links = [...document.querySelectorAll('.nav a')];
  const sectionEls = [...document.querySelectorAll('.section')];
  if (!links.length || !sectionEls.length) return;

  links[0].classList.add('active');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) =>
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`)
        );
      });
    },
    { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
  );

  sectionEls.forEach((el) => observer.observe(el));
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

    initActiveNav();
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
