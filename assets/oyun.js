(() => {
  const root = document.body;
  if (!root || !root.classList.contains('game-page')) return;

  const heroStart = document.getElementById('gameStartHero');
  const startBtn = document.getElementById('startTake');
  const speakBtn = document.getElementById('speakBtn');
  const roundLabel = document.getElementById('roundLabel');
  const scoreValue = document.getElementById('scoreValue');
  const streakValue = document.getElementById('streakValue');
  const bestValue = document.getElementById('bestValue');
  const missionValue = document.getElementById('missionValue');
  const sceneTitle = document.getElementById('sceneTitle');
  const sceneLine = document.getElementById('sceneLine');
  const sceneCharacter = document.getElementById('sceneCharacter');
  const sceneTempo = document.getElementById('sceneTempo');
  const moodGrid = document.getElementById('moodGrid');
  const timingTrack = document.getElementById('timingTrack');
  const timingZone = document.getElementById('timingZone');
  const timingCursor = document.getElementById('timingCursor');
  const takeStatus = document.getElementById('takeStatus');
  const gameStage = document.getElementById('gameStage');

  if (!startBtn || !speakBtn || !moodGrid || !timingZone || !timingCursor) return;

  const TAKES = [
    {
      title: 'Караңгы көчө',
      character: 'Айжан',
      line: 'Токто, менин убактым кыска болуп жатат!',
      mood: 'Ачуулуу',
      tempo: 'Тез',
      moods: ['Ачуулуу', 'Кызыккан', 'Корккон', 'Шайыр']
    },
    {
      title: 'Шаардагы таң',
      character: 'Нурбек',
      line: 'Күн чыкканы менен жүрөк тынч эмес эле.',
      mood: 'Тынч',
      tempo: 'Жай',
      moods: ['Тынч', 'Кайгыруу', 'Күлкүлүү', 'Таң калган']
    },
    {
      title: 'Станция',
      character: 'Малика',
      line: 'Бул поездди бүгүн токтотушубуз керек!',
      mood: 'Чечкиндүү',
      tempo: 'Тез',
      moods: ['Чечкиндүү', 'Бурунку', 'Кайдыгер', 'Сырдуу']
    },
    {
      title: 'Жолугушуу',
      character: 'Тариэл',
      line: 'Көптөн бери көрүшө элек болчубуз.',
      mood: 'Жылуу',
      tempo: 'Орто',
      moods: ['Жылуу', 'Ачуулуу', 'Корккон', 'Кызыккан']
    },
    {
      title: 'Жомок үйү',
      character: 'Айпери',
      line: 'Дал азыр керемет башталат!',
      mood: 'Таң калган',
      tempo: 'Тез',
      moods: ['Таң калган', 'Кайгыруу', 'Тынч', 'Ишенбеген']
    },
    {
      title: 'Күзгү түн',
      character: 'Эрке',
      line: 'Сырды бүгүн ачам деп чечтим.',
      mood: 'Сырдуу',
      tempo: 'Орто',
      moods: ['Сырдуу', 'Күлкүлүү', 'Чечкиндүү', 'Кайгыруу']
    },
    {
      title: 'Күлкү толгон класс',
      character: 'Арстан',
      line: 'Эй, бул жерден качпайбыз!',
      mood: 'Күлкүлүү',
      tempo: 'Орто',
      moods: ['Күлкүлүү', 'Ачуулуу', 'Тынч', 'Корккон']
    },
    {
      title: 'Алыскы тоо',
      character: 'Жаныбек',
      line: 'Жол узун, бирок биз даярбыз.',
      mood: 'Ишенимдүү',
      tempo: 'Жай',
      moods: ['Ишенимдүү', 'Таң калган', 'Кайгыруу', 'Сырдуу']
    },
    {
      title: 'Кино зал',
      character: 'Ырыскелди',
      line: 'Тынч, азыр эң маанилүү кадр.',
      mood: 'Тынч',
      tempo: 'Жай',
      moods: ['Тынч', 'Кызыккан', 'Ачуулуу', 'Күлкүлүү']
    },
    {
      title: 'Күтүүсүз чалуу',
      character: 'Нуржигит',
      line: 'Бул үн башка бирөөгө тиешелүү эмес.',
      mood: 'Кызыккан',
      tempo: 'Орто',
      moods: ['Кызыккан', 'Тынч', 'Чечкиндүү', 'Корккон']
    },
    {
      title: 'Шамалдуу көпүрө',
      character: 'Айканыш',
      line: 'Тур, биз дагы бир жолу аракет кылабыз.',
      mood: 'Колдоо',
      tempo: 'Орто',
      moods: ['Колдоо', 'Ачуулуу', 'Кайгыруу', 'Ишенбеген']
    },
    {
      title: 'Сырдуу бөлмө',
      character: 'Сымык',
      line: 'Эч кимге айтпа, бул биздин сырыбыз.',
      mood: 'Сырдуу',
      tempo: 'Жай',
      moods: ['Сырдуу', 'Күлкүлүү', 'Таң калган', 'Чечкиндүү']
    }
  ];

  const TAKE_COUNT = 5;
  const BEST_KEY = 'rec55_game_best';

  let pool = [];
  let current = 0;
  let score = 0;
  let streak = 0;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  let phase = 'idle';
  let selectedMood = '';
  let takeStart = 0;
  let takeDuration = 2800;
  let zoneStart = 800;
  let zoneDuration = 340;
  let rafId = null;

  const tempoMap = {
    'Тез': { duration: 2300, zone: 260 },
    'Орто': { duration: 2700, zone: 340 },
    'Жай': { duration: 3200, zone: 420 }
  };

  const moodCopy = {
    correct: 'Эмоция туура',
    wrong: 'Эмоция туура эмес'
  };

  function shuffle(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function setStatus(message, tone) {
    if (!takeStatus) return;
    takeStatus.classList.remove('is-good', 'is-ok', 'is-bad');
    if (tone) takeStatus.classList.add(tone);
    takeStatus.innerHTML = message;
  }

  function updateScoreboard() {
    if (scoreValue) scoreValue.textContent = score;
    if (streakValue) streakValue.textContent = streak;
    if (bestValue) bestValue.textContent = best;
    if (missionValue) missionValue.textContent = 'Эмоция + тайминг';
  }

  function setMoodOptions(take) {
    moodGrid.innerHTML = '';
    selectedMood = '';
    take.moods.forEach((mood) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mood-btn';
      btn.textContent = mood;
      btn.dataset.mood = mood;
      btn.addEventListener('click', () => {
        if (phase === 'running') return;
        selectedMood = mood;
        moodGrid.querySelectorAll('.mood-btn').forEach((el) => el.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        setStatus('Эмоция тандалды. Дубль баштоого даяр!', 'is-ok');
      });
      moodGrid.appendChild(btn);
    });
  }

  function configureTiming(take) {
    const tempoConfig = tempoMap[take.tempo] || tempoMap['Орто'];
    takeDuration = tempoConfig.duration + Math.floor(Math.random() * 140) - 70;
    zoneDuration = tempoConfig.zone;
    const margin = 380;
    const minStart = margin;
    const maxStart = takeDuration - zoneDuration - margin;
    if (maxStart <= minStart) {
      zoneStart = minStart;
    } else {
      zoneStart = minStart + Math.random() * (maxStart - minStart);
    }
    const zoneLeft = (zoneStart / takeDuration) * 100;
    const zoneWidth = (zoneDuration / takeDuration) * 100;
    timingZone.style.left = `${zoneLeft}%`;
    timingZone.style.width = `${zoneWidth}%`;
    timingCursor.style.left = '0%';
  }

  function renderTake() {
    const take = pool[current];
    if (!take) return;
    if (roundLabel) roundLabel.textContent = `Дубль ${current + 1}/${TAKE_COUNT}`;
    if (sceneTitle) sceneTitle.textContent = take.title;
    if (sceneLine) sceneLine.textContent = take.line;
    if (sceneCharacter) sceneCharacter.textContent = `Каарман: ${take.character}`;
    if (sceneTempo) sceneTempo.textContent = `Темп: ${take.tempo}`;
    setMoodOptions(take);
    configureTiming(take);
    phase = 'idle';
    startBtn.disabled = false;
    speakBtn.disabled = true;
    startBtn.textContent = 'Дубль баштоо';
    setStatus('Дубль баштоо үчүн эмоцияны танда.', 'is-ok');
    moodGrid.querySelectorAll('.mood-btn').forEach((btn) => {
      btn.disabled = false;
    });
  }

  function startGame() {
    pool = shuffle(TAKES).slice(0, TAKE_COUNT);
    current = 0;
    score = 0;
    streak = 0;
    updateScoreboard();
    renderTake();
  }

  function startTake() {
    if (phase !== 'idle') {
      if (phase === 'result') {
        current += 1;
        if (current >= TAKE_COUNT) {
          phase = 'complete';
          startBtn.textContent = 'Кайра ойноо';
          setStatus(`Оюн бүттү! Жалпы упай: <strong>${score}</strong>.`, 'is-good');
          return;
        }
        renderTake();
        return;
      }
      if (phase === 'complete') {
        startGame();
        return;
      }
      return;
    }

    if (!selectedMood) {
      setStatus('Адегенде эмоцияны танда.', 'is-bad');
      return;
    }

    phase = 'running';
    startBtn.disabled = true;
    speakBtn.disabled = false;
    setStatus('Жашыл зонага жеткенде үн кош!', 'is-ok');
    moodGrid.querySelectorAll('.mood-btn').forEach((btn) => {
      btn.disabled = true;
    });
    takeStart = performance.now();

    const step = (now) => {
      const elapsed = now - takeStart;
      const progress = Math.min(elapsed / takeDuration, 1);
      timingCursor.style.left = `${progress * 100}%`;
      if (progress >= 1) {
        finishTake(null);
        return;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
  }

  function scoreTiming(elapsed) {
    if (elapsed === null) {
      return { rating: 'Кечиктиң', points: 0, tier: 'is-bad' };
    }
    const center = zoneStart + zoneDuration / 2;
    const delta = Math.abs(elapsed - center);
    const perfect = zoneDuration * 0.2;
    const good = zoneDuration * 0.45;
    const ok = zoneDuration * 0.7;

    if (delta <= perfect) return { rating: 'Идеалдуу тайминг', points: 100, tier: 'is-good' };
    if (delta <= good) return { rating: 'Жакшы тайминг', points: 70, tier: 'is-good' };
    if (delta <= ok) return { rating: 'Орточо тайминг', points: 40, tier: 'is-ok' };
    return { rating: 'Кеч/эрте', points: 10, tier: 'is-bad' };
  }

  function finishTake(elapsed) {
    if (phase !== 'running') return;
    phase = 'result';
    cancelAnimationFrame(rafId);
    speakBtn.disabled = true;

    const take = pool[current];
    const timing = scoreTiming(elapsed);
    const moodCorrect = selectedMood === take.mood;
    const moodPoints = moodCorrect ? 60 : 0;
    const total = timing.points + moodPoints;

    score += total;
    if (moodCorrect && timing.points >= 70) {
      streak += 1;
    } else {
      streak = 0;
    }
    if (score > best) {
      best = score;
      localStorage.setItem(BEST_KEY, String(best));
    }

    updateScoreboard();

    const moodMessage = moodCorrect ? `${moodCopy.correct} (+60)` : `${moodCopy.wrong} (0)`;
    setStatus(`<strong>${timing.rating}</strong> · ${moodMessage} · +${total} упай`, timing.tier);

    startBtn.disabled = false;
    if (current === TAKE_COUNT - 1) {
      startBtn.textContent = 'Натыйжаны көр';
    } else {
      startBtn.textContent = 'Кийинки дубль';
    }
  }

  function handleSpeak() {
    if (phase !== 'running') return;
    const elapsed = performance.now() - takeStart;
    finishTake(elapsed);
  }

  function handleKey(e) {
    if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.code === 'Space') {
      if (phase === 'running') {
        e.preventDefault();
        handleSpeak();
      }
    }
    if (e.code === 'Enter') {
      if (phase === 'idle' || phase === 'result' || phase === 'complete') {
        e.preventDefault();
        startTake();
      }
    }
  }

  if (heroStart) {
    heroStart.addEventListener('click', () => {
      startGame();
      if (gameStage) gameStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  startBtn.addEventListener('click', startTake);
  speakBtn.addEventListener('click', handleSpeak);
  window.addEventListener('keydown', handleKey);

  startGame();
})();
