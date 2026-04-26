window.BAZA_FALLBACK = {
  "components/header.html": `  <div class="hero">
    <div class="hero-tag">Проект БАЗА</div>
    <h1>🏠 БАЗА — бытовой гид</h1>
    <p class="hero-sub">Кран. Розетка. Стена. Всё под контролем.</p>
  </div>`,
  "components/footer.html": `<div class="footer">
  Ты справишься! 💪 Главное — не паниковать, дышать и действовать по шагам.
</div>`,
  "sections/tools.html": `  <section class="section" id="tools">
    <div class="section-header">
      <div class="section-num">1</div>
      <div class="section-title">Базовый набор инструментов</div>
    </div>
    <p class="section-lead">Не нужно покупать всё сразу — но это должно быть под рукой:</p>
    <table class="data-table alt">
      <thead><tr><th></th><th>Инструмент</th><th>Зачем</th></tr></thead>
      <tbody>
        <tr><td>🔨</td><td><strong>Молоток (300–500 г)</strong></td><td>Забить гвоздь, прибить плинтус, собрать мебель</td></tr>
        <tr><td>🪛</td><td><strong>Отвёртки (+ и −)</strong></td><td>Закрутить шурупы, снять панели, собрать что угодно</td></tr>
        <tr><td>🔩</td><td><strong>Разводной ключ</strong></td><td>Заменяет набор гаечных ключей — для труб и гаек</td></tr>
        <tr><td>🪝</td><td><strong>Пассатижи</strong></td><td>Зажать, согнуть, достать застрявшее</td></tr>
        <tr><td>📏</td><td><strong>Рулетка</strong></td><td>Замерить полку, штору, расстояние до розетки</td></tr>
        <tr><td>🩹</td><td><strong>Изолента + скотч</strong></td><td>Изолировать провода, временно заклеить, зафиксировать</td></tr>
        <tr><td>⬡</td><td><strong>Шестигранники</strong></td><td>Сборка мебели (ИКЕА и аналоги), регулировка петель</td></tr>
        <tr><td>✨</td><td><strong>Клей «Момент» + суперклей</strong></td><td>Починить, склеить, прикрепить</td></tr>
        <tr><td>🪠</td><td><strong>Вантуз</strong></td><td>Прочистить засор в раковине и унитазе — обязательно!</td></tr>
        <tr><td>🔦</td><td><strong>Фонарик или налобник</strong></td><td>Заглянуть под раковину, в щиток, в тёмный угол</td></tr>
      </tbody>
    </table>
    <div class="tip"><span class="tip-icon">💡</span>Купи детектор скрытой проводки (~500–1000 руб.) — скажет, где в стене проходят трубы и провода, прежде чем начнёшь сверлить.</div>
  </section>

<hr class="section-divider">`,
  "sections/plumbing.html": `  <section class="section" id="plumbing">
    <div class="section-header">
      <div class="section-num">2</div>
      <div class="section-title">Сантехника — когда льётся там, где не надо</div>
    </div>

    <div class="subsection">
      <div class="subsection-title">🔑 Первое и главное: найди вентиль!</div>
      <ul class="bullets">
        <li>Обычно он под раковиной, за унитазом или в прихожей / коридоре (стояк)</li>
        <li>Повесь стикер. Напиши маркером. Сфотографируй на телефон.</li>
        <li>Именно его ты закрываешь в первую секунду любой «водяной» аварии.</li>
      </ul>
    </div>

    <div class="subsection">
      <div class="subsection-title">Беда №1 — Капает кран</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Перекрой воду</strong> (вентиль под раковиной или общий).</span></li>
        <li><span class="step-num">2</span><span><strong>Капает из носика?</strong> — нужна замена прокладки или картриджа смесителя.</span></li>
        <li><span class="step-num">3</span><span><strong>Капает у основания?</strong> — подтяни накидную гайку разводным ключом (аккуратно, не переусердствуй).</span></li>
      </ul>
      <div class="tip"><span class="tip-icon">💡</span>Сфотографируй кран перед разборкой — потом легче собрать обратно и найти нужную деталь в магазине.</div>
    </div>

    <div class="subsection">
      <div class="subsection-title">Беда №2 — Засорилась раковина</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Метод дедовский:</strong> кипяток + полстакана соды + полстакана уксуса → 20 минут → смыть горячей водой.</span></li>
        <li><span class="step-num">2</span><span><strong>Метод с вантузом:</strong> плотно приставить, резко качать вверх-вниз 15–20 раз.</span></li>
        <li><span class="step-num">3</span><span><strong>Метод радикальный:</strong> сантехнический трос — засунуть в слив, крутить по часовой.</span></li>
        <li><span class="step-num">4</span><span><strong>Если ничего не помогло:</strong> вызвать сантехника. Это нормально!</span></li>
      </ul>
    </div>

    <div class="subsection">
      <div class="subsection-title">Беда №3 — Подтекает соединение под мойкой</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Подставь тазик.</strong> Спокойно осмотри, откуда течёт.</span></li>
        <li><span class="step-num">2</span><span><strong>Течёт из резьбового соединения?</strong> — аккуратно подтяни гайку разводным ключом.</span></li>
        <li><span class="step-num">3</span><span><strong>Всё равно течёт?</strong> — намотай ФУМ-ленту (белая тонкая лента) на резьбу по часовой, собери обратно.</span></li>
      </ul>
    </div>
  </section>

<hr class="section-divider">`,
  "sections/electricity.html": `  <section class="section" id="electricity">
    <div class="section-header">
      <div class="section-num">3</div>
      <div class="section-title">Электричество — сначала обесточить</div>
    </div>

    <div class="important-banner">
      <span class="ib-icon">⚠️</span>
      <span><strong>Правило №1:</strong> Перед ЛЮБОЙ работой с электрикой — выключи автомат в щитке. После выключения поднеси отвёртку-индикатор к контактам розетки — убедись, что лампа НЕ горит. Скажи себе вслух: «Ток выключен». Только потом начинай работу.</span>
    </div>

    <div class="subsection">
      <div class="subsection-title">Найди щиток и подпиши автоматы</div>
      <ul class="bullets">
        <li>Щиток обычно в прихожей, на лестничной клетке или встроен в стену.</li>
        <li>Включай по одному автомату и смотри, что включается — подпиши каждый стикером.</li>
        <li>Всегда знай, какой автомат отключает кухню, ванную, комнату.</li>
      </ul>
    </div>

    <div class="subsection">
      <div class="subsection-title">Выпала розетка из стены</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Отключи автомат</strong> для этой комнаты и проверь индикатором отсутствие тока.</span></li>
        <li><span class="step-num">2</span><span><strong>Аккуратно вытащи розетку за корпус</strong> (не за провода!).</span></li>
        <li><span class="step-num">3</span><span><strong>Подтяни «лапки»-держатели</strong> отвёрткой — они прижимают розетку к стене.</span></li>
        <li><span class="step-num">4</span><span><strong>Вставь обратно,</strong> включи автомат, проверь.</span></li>
      </ul>
    </div>

    <div class="subsection">
      <div class="subsection-title">Заменить розетку или выключатель</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Отключи автомат,</strong> проверь индикатором — тока нет.</span></li>
        <li><span class="step-num">2</span><span><strong>Сфотографируй,</strong> как подключены провода (цвета и расположение!) перед тем, как отсоединять.</span></li>
        <li><span class="step-num">3</span><span>
          <strong>Провода — запомни принцип:</strong>
          <ul class="wire-list">
            <li><span class="wire-dot wire-dot-n"></span> <span>Синий / голубой — <strong>ноль (N)</strong></span></li>
            <li><span class="wire-dot wire-dot-l"></span> <span>Коричневый, чёрный или белый — <strong>фаза (L)</strong></span></li>
            <li><span class="wire-dot wire-dot-pe"></span> <span>Жёлто-зелёный — всегда <strong>заземление (PE)</strong></span></li>
          </ul>
          <span class="muted">⚠️ В старых домах провода могут быть одного цвета! Поэтому и нужна фотография.</span>
        </span></li>
        <li><span class="step-num">4</span><span><strong>Подключи новую розетку</strong> по тому же принципу — по фото.</span></li>
        <li><span class="step-num">5</span><span><strong>Вставь в стену,</strong> закрути, включи автомат.</span></li>
      </ul>
      <div class="tip"><span class="tip-icon">💡</span>Если проводов больше трёх, или ты не понимаешь, что там происходит — вызови электрика. Без стыда!</div>
    </div>

    <div class="subsection">
      <div class="subsection-title">Выбило пробки / отключился автомат</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Отключи все приборы</strong> в этой комнате.</span></li>
        <li><span class="step-num">2</span><span><strong>Переключи автомат</strong> обратно в положение «вкл».</span></li>
        <li><span class="step-num">3</span><span><strong>Включай приборы по одному</strong> — найдёшь виновника (чайник + обогреватель + микроволновка = перегрузка).</span></li>
        <li><span class="step-num">4</span><span><strong>Если выбивает снова без нагрузки</strong> — это неисправность. Нужен электрик!</span></li>
      </ul>
    </div>
  </section>

<hr class="section-divider">`,
  "sections/walls.html": `  <section class="section" id="walls">
    <div class="section-header">
      <div class="section-num">4</div>
      <div class="section-title">Стены — вешаем, сверлим, ремонтируем</div>
    </div>

    <div class="subsection">
      <div class="subsection-title">Дрель vs Перфоратор</div>
      <ul class="bullets">
        <li><strong>Дрель</strong> — для дерева, металла, пластика, мягкого кирпича.</li>
        <li><strong>Перфоратор</strong> — для бетона и твёрдого кирпича (он «долбит», а не просто крутит).</li>
        <li>В большинстве панельных домов стены бетонные → нужен перфоратор или ударная дрель.</li>
      </ul>
      <div class="tip"><span class="tip-icon">💡</span>Если нет дрели, но надо повесить одну полку — проще попросить соседа или взять в аренду (в строймаркетах есть прокат).</div>
    </div>

    <div class="subsection">
      <div class="subsection-title">Как повесить полку / карниз</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Проверь детектором,</strong> нет ли за стеной проводов и труб.</span></li>
        <li><span class="step-num">2</span><span><strong>Разметь уровнем</strong> (или хотя бы рулеткой и воображением).</span></li>
        <li><span class="step-num">3</span><span><strong>Просверли отверстие</strong> сверлом = диаметру дюбеля.</span></li>
        <li><span class="step-num">4</span><span><strong>Забей дюбель</strong> молотком — он должен войти заподлицо.</span></li>
        <li><span class="step-num">5</span><span><strong>Вкрути шуруп</strong> через крепление — не до конца, потом выровняй и докрути.</span></li>
      </ul>
    </div>

    <div class="subsection">
      <div class="subsection-title">Дюбели — какой выбрать?</div>
      <ul class="bullets">
        <li><strong>Обычный пластиковый дюбель (серый/белый)</strong> — для бетона и кирпича, подходит в 90% случаев.</li>
        <li><strong>«Бабочка» / «зонтик»</strong> — для гипсокартона и пустотелых стен, раскрывается внутри.</li>
        <li>Диаметр дюбеля = диаметру сверла (написано на упаковке).</li>
      </ul>
    </div>

    <div class="subsection">
      <div class="subsection-title">Замазать дырку от гвоздя</div>
      <ul class="steps">
        <li><span class="step-num">1</span><span><strong>Купи готовую шпаклёвку</strong> в маленьком тюбике.</span></li>
        <li><span class="step-num">2</span><span><strong>Нанеси шпателем или</strong> даже пальцем, вровень со стеной.</span></li>
        <li><span class="step-num">3</span><span><strong>Дай высохнуть,</strong> затри наждачкой, покрась при необходимости.</span></li>
      </ul>
    </div>
  </section>

<hr class="section-divider">`,
  "sections/furniture.html": `  <section class="section" id="furniture">
    <div class="section-header">
      <div class="section-num">5</div>
      <div class="section-title">Мебель и мелкий быт</div>
    </div>
    <table class="two-col-table">
      <thead><tr><th>Проблема</th><th>Решение</th></tr></thead>
      <tbody>
        <tr>
          <td>🚪 Скрипит дверь</td>
          <td>Капни <strong>машинное масло или силиконовую смазку</strong> в петли. <em>WD-40 подходит чтобы разработать заевший механизм, но для долгой смазки лучше спецсредства.</em></td>
        </tr>
        <tr>
          <td>🚪 Дверь перекосилась / плохо закрывается</td>
          <td>Регулируй петли шестигранником — у большинства петель 3 винта для настройки по высоте, глубине, стороне.</td>
        </tr>
        <tr>
          <td>🔑 Замок заедает</td>
          <td>Набрызгай WD-40 в скважину, чтобы прочистить. Или натри ключ простым карандашом (графит — отличная сухая смазка!).</td>
        </tr>
        <tr>
          <td>🪑 Стул / стол шатается</td>
          <td>Переверни, найди расшатанный болт, подтяни. Совсем разболтался — посади на клей ПВА + затяни.</td>
        </tr>
        <tr>
          <td>🪟 Плинтус отошёл</td>
          <td>Прибей гвоздиком или посади на жидкие гвозди. Удержи лентой до высыхания.</td>
        </tr>
        <tr>
          <td>🗄️ Дверца шкафа перекосилась</td>
          <td>Регулировочные петли — те же три винта (шестигранник). Смело крути, пока не выровняется.</td>
        </tr>
        <tr>
          <td>💡 Цоколь лампочки застрял</td>
          <td>Обесточь! Надень перчатку или намотай резинку для сцепления. Плоскогубцы — последний вариант.</td>
        </tr>
      </tbody>
    </table>
  </section>

<hr class="section-divider">

  <section class="section" id="tips">
    <div class="section-header">
      <div class="section-num section-num-accent">✦</div>
      <div class="section-title">Советы из практики</div>
    </div>
    <div class="bonus-grid">
      <div class="bonus-card">
        <span class="bonus-icon">📸</span>
        <p class="bonus-text">Всегда фотографируй «как было» перед тем, как что-то разобрать. Это твоя страховка.</p>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🛒</span>
        <p class="bonus-text">Не экономь на отвёртках — дешёвая «слижет» шляпку винта, и достать его потом — отдельный квест.</p>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">📋</span>
        <p class="bonus-text">Запиши в телефон: номер аварийной службы, электрика, сантехника своего района.</p>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🧘</span>
        <p class="bonus-text">Если не уверены на 100% — вызови мастера. Это не слабость, это мудрость. И часто дешевле, чем переделывать.</p>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">📦</span>
        <p class="bonus-text">Храни инструменты в одном месте — коробка или ящик. Искать молоток в панике = лишний стресс.</p>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🕯️</span>
        <p class="bonus-text">Держи фонарик с рабочими батарейками (или заряженным) — пригодится при отключении света.</p>
      </div>
    </div>
  </section>`,
  "sections/emergency.html": `  <section class="section" id="emergency">
    <div class="section-header">
      <div class="section-num">6</div>
      <div class="section-title">Экстренный случай — действуй, не паникуй</div>
    </div>
    <div class="emergency-grid">
      <div class="emergency-card">
        <div class="emergency-card-head blue">
          <span class="icon">💧</span>
          <span class="label">Прорвало трубу</span>
        </div>
        <div class="emergency-card-body">
          <ol>
            <li><span><strong>НЕМЕДЛЕННО</strong> закрой главный вентиль.</span></li>
            <li><span>Позвони в аварийную службу ЖЭКа или <strong>112</strong>.</span></li>
            <li><span>Предупреди соседей снизу.</span></li>
          </ol>
        </div>
      </div>
      <div class="emergency-card">
        <div class="emergency-card-head amber">
          <span class="icon">💨</span>
          <span class="label">Пахнет газом</span>
        </div>
        <div class="emergency-card-body">
          <ol>
            <li><span><strong>НЕ</strong> включай свет, не зажигай огонь.</span></li>
            <li><span>Открой все окна. Выключи плиту.</span></li>
            <li><span>Позвони <strong>104</strong> (газ) или <strong>112</strong>.</span></li>
            <li><span>Выйди из квартиры.</span></li>
          </ol>
        </div>
      </div>
      <div class="emergency-card">
        <div class="emergency-card-head red">
          <span class="icon">⚡</span>
          <span class="label">Искрит розетка / гарь от проводки</span>
        </div>
        <div class="emergency-card-body">
          <ol>
            <li><span>Отключи автомат в щитке.</span></li>
            <li><span>Не трогай проводку мокрыми руками.</span></li>
            <li><span>Вызови электрика. Не включай автомат до проверки.</span></li>
          </ol>
        </div>
      </div>
      <div class="emergency-card">
        <div class="emergency-card-head red">
          <span class="icon">🔥</span>
          <span class="label">Небольшой пожар</span>
        </div>
        <div class="emergency-card-body">
          <ol>
            <li><span>Горит проводка / бумага / ткань → заливай водой.</span></li>
            <li><span><strong>Горит масло на сковороде → НЕ лей воду!</strong> Накрой крышкой или мокрой тканью.</span></li>
            <li><span>Не справляешься → выходи, звони <strong>101</strong> или <strong>112</strong>.</span></li>
          </ol>
        </div>
      </div>
    </div>
  </section>

<hr class="section-divider">`,
  "sections/chemicals.html": `  <section class="section" id="chemicals">
    <div class="section-header">
      <div class="section-num">7</div>
      <div class="section-title">Бытовая химия — не такая безобидная</div>
    </div>
    <p class="section-lead section-lead-lg">Средства для чистки могут вызвать ожог кожи, отравление парами или взрыв газа. Будьте внимательны.</p>

    <div class="subsection">
      <div class="subsection-title">Базовая защита — надевай всегда</div>
      <table class="ppe-table">
        <thead><tr><th></th><th>Средство</th><th>Когда и зачем</th></tr></thead>
        <tbody>
          <tr><td>🧤</td><td><strong>Резиновые перчатки</strong></td><td>При любой уборке с химией. Хлор и кислоты моментально раздражают кожу.</td></tr>
          <tr><td>😷</td><td><strong>Маска / респиратор</strong></td><td>При работе с хлоркой, средствами от плесени, растворителями. Пары незаметно влияют на организм.</td></tr>
          <tr><td>🪟</td><td><strong>Проветривание</strong></td><td>Открывай окно всегда. Особенно в ванной — там пары накапливаются быстрее.</td></tr>
          <tr><td>👓</td><td><strong>Защита глаз</strong></td><td>При чистке сантехники — брызги могут попасть в глаза. При попадании — промывать водой 15 минут.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="subsection">
      <div class="subsection-title">☠️ Опасные смеси — никогда не смешивай!</div>
      <table class="danger-table">
        <thead><tr><th>Что НЕ смешивать</th><th>Почему опасно</th></tr></thead>
        <tbody>
          <tr><td>Белизна + уксус (или любая кислота)</td><td>Выделяется <strong>хлорный газ</strong> — ожог лёгких, удушье. Смертельно опасно в закрытом помещении.</td></tr>
          <tr><td>Белизна + нашатырный спирт</td><td>Образуется <strong>хлорамин</strong> — токсичный газ. Раздражает глаза, кожу, лёгкие.</td></tr>
          <tr><td>Перекись водорода + уксус</td><td>Образуется <strong>надуксусная кислота</strong> — агрессивно разъедает кожу. И бесполезно: вещества нейтрализуют друг друга.</td></tr>
          <tr><td>Разные средства от засора</td><td>Например, «Крот» + Tiret — одно щелочное, другое кислотное. Реакция с брызгами и нагревом. Промой трубу водой перед вторым средством.</td></tr>
          <tr><td>Спирт + отбеливатель</td><td>Образуются <strong>хлороформ</strong> и токсичные соединения. Головокружение, тошнота, потеря сознания.</td></tr>
        </tbody>
      </table>
      <div class="tip"><span class="tip-icon">💡</span>Золотое правило: если не знаешь, можно ли смешивать — не смешивай. Одно средство, одно применение, хорошая вентиляция, перчатки. Этого достаточно для 99% уборок.</div>
    </div>

    <div class="subsection">
      <div class="subsection-title">🚑 Первая помощь при контакте с химией</div>
      <ul class="first-aid-list">
        <li>
          <span class="first-aid-label">🤲 На кожу</span>
          <span class="first-aid-body">Смывать холодной проточной водой <strong>не менее 15 минут</strong>. Не тереть! Если жжение не проходит — звони 112.</span>
        </li>
        <li>
          <span class="first-aid-label">👁️ В глаза</span>
          <span class="first-aid-body">Промывать чистой водой 15+ минут, держа глаз открытым. Срочно звони 112 или в травмпункт.</span>
        </li>
        <li>
          <span class="first-aid-label">😮‍💨 Надышались</span>
          <span class="first-aid-body">Немедленно выйди на свежий воздух. Если кружится голова, кашель, жжение и симптомы не проходят — скорая (112).</span>
        </li>
        <li>
          <span class="first-aid-label">🤢 Проглотили</span>
          <span class="first-aid-body"><strong>НЕ вызывай рвоту</strong> — химия обожжёт горло повторно. Выпей несколько стаканов холодной воды. Не нейтрализуй содой или уксусом. Сразу звони 112 и назови, что именно выпила.</span>
        </li>
      </ul>
    </div>
  </section>

<hr class="section-divider">`,
};
