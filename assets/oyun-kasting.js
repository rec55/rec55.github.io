(() => {
  const root = document.body;
  if (!root || !root.classList.contains('casting-page')) return;

  const heroStart = document.getElementById('castingStartHero');
  const nextBtn = document.getElementById('nextCasting');
  const restartBtn = document.getElementById('restartCasting');
  const roundLabel = document.getElementById('castingRound');
  const scoreValue = document.getElementById('castingScore');
  const streakValue = document.getElementById('castingStreak');
  const bestValue = document.getElementById('castingBest');
  const missionValue = document.getElementById('castingMission');
  const roleTitle = document.getElementById('roleTitle');
  const roleLine = document.getElementById('roleLine');
  const roleGenre = document.getElementById('roleGenre');
  const roleTempo = document.getElementById('roleTempo');
  const roleTags = document.getElementById('roleTags');
  const candidateGrid = document.getElementById('candidateGrid');
  const castingStatus = document.getElementById('castingStatus');
  const stage = document.getElementById('castingStage');

  if (!nextBtn || !restartBtn || !candidateGrid || !roleTags) return;

  const ROLE_COUNT = 5;
  const BEST_KEY = 'rec55_casting_best';

  const ROLES = [
    {
      title: 'Көчмөн баатыр',
      line: 'Элиме сөз бердим, артка кайтпайм!',
      genre: 'Эпикалык драма',
      tempo: 'Орто',
      tags: ['Батыл', 'Терең', 'Чечкиндүү']
    },
    {
      title: 'Жеңил комедия',
      line: 'Ой, бул да болду да, баары көрүп калды!',
      genre: 'Комедия',
      tempo: 'Тез',
      tags: ['Күлкүлүү', 'Жеңил', 'Шайыр']
    },
    {
      title: 'Илимпоз кыз',
      line: 'Формула туура чыкты, эми эксперимент керек.',
      genre: 'Фантастика',
      tempo: 'Орто',
      tags: ['Тынч', 'Так', 'Ишенимдүү']
    },
    {
      title: 'Сырдуу чоочун',
      line: 'Мен жөнүндө көп нерсе билгендер жок.',
      genre: 'Триллер',
      tempo: 'Жай',
      tags: ['Сырдуу', 'Салмактуу', 'Терең']
    },
    {
      title: 'Жаш сүйүүчү',
      line: 'Биринчи жолу ушинтип толкундандым.',
      genre: 'Романтика',
      tempo: 'Жай',
      tags: ['Жумшак', 'Жылуу', 'Назик']
    },
    {
      title: 'Экшн капитаны',
      line: 'Команда, даярдангыла! Бизде 30 секунд!',
      genre: 'Экшн',
      tempo: 'Тез',
      tags: ['Чечкиндүү', 'Батыл', 'Катуу']
    },
    {
      title: 'Кайгылуу эне',
      line: 'Сага айтпай коё албайм, жүрөгүм ооруп турат.',
      genre: 'Драма',
      tempo: 'Жай',
      tags: ['Кайгылуу', 'Терең', 'Жумшак']
    },
    {
      title: 'Коомдук лидер',
      line: 'Убакыт келди, азыр сөздү баштайм.',
      genre: 'Биография',
      tempo: 'Орто',
      tags: ['Ишенимдүү', 'Туруктуу', 'Так']
    },
    {
      title: 'Жомокчу бала',
      line: 'Менин дүйнөмдө баары мүмкүн.',
      genre: 'Анимация',
      tempo: 'Орто',
      tags: ['Таң калган', 'Шайыр', 'Жумшак']
    }
  ];

  const CANDIDATES = [
    {
      name: 'Айжан',
      desc: 'Жумшак тембр, жандуу эмоция',
      tags: ['Жумшак', 'Жылуу', 'Назик']
    },
    {
      name: 'Нурбек',
      desc: 'Катуу үн, лидерлик интонация',
      tags: ['Катуу', 'Чечкиндүү', 'Батыл']
    },
    {
      name: 'Малика',
      desc: 'Так жана салмактуу үн',
      tags: ['Так', 'Туруктуу', 'Ишенимдүү']
    },
    {
      name: 'Тариэл',
      desc: 'Сырдуу, терең үн',
      tags: ['Сырдуу', 'Терең', 'Салмактуу']
    },
    {
      name: 'Арстан',
      desc: 'Күлкүлүү, жеңил интонация',
      tags: ['Күлкүлүү', 'Жеңил', 'Шайыр']
    },
    {
      name: 'Айпери',
      desc: 'Назик, кайгылуу оттенок',
      tags: ['Кайгылуу', 'Жумшак', 'Жылуу']
    },
    {
      name: 'Эрке',
      desc: 'Терең, ишенимдүү дикция',
      tags: ['Терең', 'Ишенимдүү', 'Чечкиндүү']
    },
    {
      name: 'Сымык',
      desc: 'Таң калтырган, оюнкул үн',
      tags: ['Таң калган', 'Шайыр', 'Жумшак']
    },
    {
      name: 'Нуржигит',
      desc: 'Тез, катуу темп',
      tags: ['Тез', 'Катуу', 'Чечкиндүү']
    }
  ];

  let rolesPool = [];
  let current = 0;
  let score = 0;
  let streak = 0;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  let phase = 'idle';
  let currentOptions = [];

  function shuffle(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function matchScore(tags, candidateTags) {
    const set = new Set(candidateTags);
    return tags.reduce((total, tag) => total + (set.has(tag) ? 1 : 0), 0);
  }

  function setStatus(message, tone) {
    if (!castingStatus) return;
    castingStatus.classList.remove('is-good', 'is-ok', 'is-bad');
    if (tone) castingStatus.classList.add(tone);
    castingStatus.innerHTML = message;
  }

  function updateScoreboard() {
    if (scoreValue) scoreValue.textContent = score;
    if (streakValue) streakValue.textContent = streak;
    if (bestValue) bestValue.textContent = best;
    if (missionValue) missionValue.textContent = 'Туура үн';
  }

  function renderRole(role) {
    if (roundLabel) roundLabel.textContent = `Кастинг ${current + 1}/${ROLE_COUNT}`;
    if (roleTitle) roleTitle.textContent = role.title;
    if (roleLine) roleLine.textContent = role.line;
    if (roleGenre) roleGenre.textContent = `Жанр: ${role.genre}`;
    if (roleTempo) roleTempo.textContent = `Темп: ${role.tempo}`;

    roleTags.innerHTML = '';
    role.tags.forEach((tag) => {
      const pill = document.createElement('span');
      pill.className = 'tag-chip';
      pill.textContent = tag;
      roleTags.appendChild(pill);
    });
  }

  function buildOptions(role) {
    const scored = shuffle(CANDIDATES).map((candidate) => {
      const match = matchScore(role.tags, candidate.tags);
      return { candidate, match };
    });
    const max = Math.max(...scored.map((item) => item.match));
    const bestOptions = scored.filter((item) => item.match === max);
    const correct = bestOptions[Math.floor(Math.random() * bestOptions.length)];
    const rest = shuffle(scored.filter((item) => item !== correct));
    const options = shuffle([correct, ...rest.slice(0, 2)]).map((item) => ({
      ...item,
      isBest: item.match === max
    }));
    return options;
  }

  function renderOptions(role) {
    currentOptions = buildOptions(role);
    candidateGrid.innerHTML = '';
    currentOptions.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'candidate-card';
      button.dataset.index = String(index);
      button.innerHTML = `
        <div class="candidate-name">${option.candidate.name}</div>
        <div class="candidate-desc">${option.candidate.desc}</div>
        <div class="candidate-tags">
          ${option.candidate.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      `;
      button.addEventListener('click', () => handlePick(index));
      candidateGrid.appendChild(button);
    });
  }

  function renderRound() {
    const role = rolesPool[current];
    if (!role) return;
    phase = 'active';
    renderRole(role);
    renderOptions(role);
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.textContent = 'Кийинки кастинг';
    }
    setStatus('Талапкер танда.', 'is-ok');
  }

  function handlePick(index) {
    if (phase !== 'active') return;
    const option = currentOptions[index];
    if (!option) return;

    phase = 'result';
    const buttons = candidateGrid.querySelectorAll('.candidate-card');
    buttons.forEach((btn) => btn.setAttribute('disabled', 'true'));

    const points = (option.isBest ? 100 : 40) + option.match * 10;
    score += points;
    if (option.isBest) {
      streak += 1;
    } else {
      streak = 0;
    }
    if (score > best) {
      best = score;
      localStorage.setItem(BEST_KEY, String(best));
    }
    updateScoreboard();

    const selectedBtn = candidateGrid.querySelector(`[data-index="${index}"]`);
    if (selectedBtn) {
      selectedBtn.classList.add(option.isBest ? 'is-correct' : 'is-wrong');
    }

    const message = option.isBest
      ? `Туура тандоо! +${points} упай.`
      : `Дал келген жок. +${points} упай.`;
    setStatus(`${message} Дал келүү: ${option.match}/${rolesPool[current].tags.length}.`, option.isBest ? 'is-good' : 'is-bad');

    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.textContent = current === ROLE_COUNT - 1 ? 'Натыйжа' : 'Кийинки кастинг';
    }
  }

  function nextRound() {
    if (phase === 'active') return;
    if (phase === 'result') {
      current += 1;
      if (current >= ROLE_COUNT) {
        phase = 'complete';
        setStatus(`Оюн бүттү! Жалпы упай: <strong>${score}</strong>.`, 'is-good');
        if (nextBtn) nextBtn.textContent = 'Кайра ойноо';
        return;
      }
      renderRound();
      return;
    }
    if (phase === 'complete') {
      startGame();
    }
  }

  function startGame() {
    rolesPool = shuffle(ROLES).slice(0, ROLE_COUNT);
    current = 0;
    score = 0;
    streak = 0;
    updateScoreboard();
    renderRound();
  }

  if (heroStart) {
    heroStart.addEventListener('click', () => {
      startGame();
      if (stage) stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  nextBtn.addEventListener('click', nextRound);
  restartBtn.addEventListener('click', startGame);

  startGame();
})();
