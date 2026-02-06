(() => {
  const root = document.body;
  if (!root || !root.classList.contains('inton-page')) return;

  const heroStart = document.getElementById('intonStartHero');
  const playBtn = document.getElementById('intonPlay');
  const bars = document.getElementById('intonBars');
  const optionsGrid = document.getElementById('intonOptions');
  const status = document.getElementById('intonStatus');
  const nextBtn = document.getElementById('intonNext');
  const restartBtn = document.getElementById('intonRestart');
  const roundLabel = document.getElementById('intonRound');
  const scoreValue = document.getElementById('intonScore');
  const streakValue = document.getElementById('intonStreak');
  const bestValue = document.getElementById('intonBest');
  const missionValue = document.getElementById('intonMission');
  const volumeRange = document.getElementById('intonVolume');
  const stage = document.getElementById('intonStage');

  if (!playBtn || !optionsGrid || !nextBtn || !restartBtn) return;

  const BEST_KEY = 'rec55_inton_best';
  const ROUND_COUNT = 5;

  const EMOTIONS = [
    {
      id: 'happy',
      label: 'Шайыр',
      wave: 'triangle',
      notes: [
        { freq: 523.25, dur: 0.16, gain: 0.7 },
        { freq: 659.25, dur: 0.16, gain: 0.7 },
        { freq: 783.99, dur: 0.18, gain: 0.8 },
        { freq: 659.25, dur: 0.16, gain: 0.7 }
      ],
      gap: 0.05
    },
    {
      id: 'sad',
      label: 'Кайгыруу',
      wave: 'sine',
      notes: [
        { freq: 261.63, dur: 0.32, gain: 0.6 },
        { freq: 246.94, dur: 0.3, gain: 0.55 },
        { freq: 220.0, dur: 0.36, gain: 0.5 }
      ],
      gap: 0.08
    },
    {
      id: 'angry',
      label: 'Ачуулуу',
      wave: 'square',
      notes: [
        { freq: 392.0, dur: 0.12, gain: 0.75 },
        { freq: 392.0, dur: 0.12, gain: 0.75 },
        { freq: 329.63, dur: 0.12, gain: 0.7 },
        { freq: 329.63, dur: 0.12, gain: 0.7 }
      ],
      gap: 0.04
    },
    {
      id: 'calm',
      label: 'Тынч',
      wave: 'sine',
      notes: [
        { freq: 329.63, dur: 0.28, gain: 0.55 },
        { freq: 349.23, dur: 0.28, gain: 0.55 },
        { freq: 329.63, dur: 0.32, gain: 0.5 }
      ],
      gap: 0.1
    }
  ];

  let audioCtx = null;
  let masterGain = null;
  let isPlaying = false;

  let rounds = [];
  let current = 0;
  let score = 0;
  let streak = 0;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  let phase = 'idle';
  let hasPlayed = false;

  function shuffle(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function ensureAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = Number(volumeRange ? volumeRange.value : 0.6);
      masterGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playNotes(emotion) {
    if (!emotion || isPlaying) return;
    ensureAudio();
    const now = audioCtx.currentTime + 0.05;
    let t = now;
    const gap = emotion.gap || 0.06;
    emotion.notes.forEach((note) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = emotion.wave || 'sine';
      osc.frequency.value = note.freq;
      const peak = Math.min(note.gain || 0.7, 0.9);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(peak, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + note.dur);
      osc.connect(gain).connect(masterGain);
      osc.start(t);
      osc.stop(t + note.dur + 0.05);
      t += note.dur + gap;
    });

    const duration = t - now + 0.1;
    isPlaying = true;
    if (bars) bars.classList.add('is-playing');
    window.setTimeout(() => {
      isPlaying = false;
      if (bars) bars.classList.remove('is-playing');
    }, duration * 1000);
  }

  function playFeedback(ok) {
    if (!audioCtx || !masterGain) return;
    const now = audioCtx.currentTime + 0.02;
    const notes = ok
      ? [
          { freq: 659.25, dur: 0.12, gain: 0.5 },
          { freq: 783.99, dur: 0.16, gain: 0.5 }
        ]
      : [
          { freq: 220.0, dur: 0.2, gain: 0.45 },
          { freq: 196.0, dur: 0.2, gain: 0.45 }
        ];

    let t = now;
    notes.forEach((note) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = ok ? 'triangle' : 'sawtooth';
      osc.frequency.value = note.freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(note.gain, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + note.dur);
      osc.connect(gain).connect(masterGain);
      osc.start(t);
      osc.stop(t + note.dur + 0.05);
      t += note.dur + 0.04;
    });
  }

  function setStatus(message, tone) {
    if (!status) return;
    status.classList.remove('is-good', 'is-ok', 'is-bad');
    if (tone) status.classList.add(tone);
    status.innerHTML = message;
  }

  function updateScoreboard() {
    if (scoreValue) scoreValue.textContent = score;
    if (streakValue) streakValue.textContent = streak;
    if (bestValue) bestValue.textContent = best;
    if (missionValue) missionValue.textContent = 'Угуу + тандоо';
  }

  function renderOptions() {
    optionsGrid.innerHTML = '';
    EMOTIONS.forEach((emotion) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mood-btn';
      btn.textContent = emotion.label;
      btn.dataset.id = emotion.id;
      btn.addEventListener('click', () => handlePick(emotion.id));
      optionsGrid.appendChild(btn);
    });
  }

  function renderRound() {
    phase = 'listen';
    hasPlayed = false;
    if (roundLabel) roundLabel.textContent = `Раунд ${current + 1}/${ROUND_COUNT}`;
    renderOptions();
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.textContent = 'Кийинки раунд';
    }
    setStatus('Үндү ук да, эмоцияны танда.', 'is-ok');
  }

  function handlePick(id) {
    if (phase !== 'listen') return;
    if (!hasPlayed) {
      setStatus('Алгач үн ук.', 'is-bad');
      return;
    }

    phase = 'result';
    const target = rounds[current];
    const correct = id === target.id;
    const points = correct ? 120 : 40;
    score += points;
    if (correct) {
      streak += 1;
    } else {
      streak = 0;
    }
    if (score > best) {
      best = score;
      localStorage.setItem(BEST_KEY, String(best));
    }
    updateScoreboard();
    playFeedback(correct);

    optionsGrid.querySelectorAll('.mood-btn').forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.id === target.id) btn.classList.add('is-correct');
      if (btn.dataset.id === id && !correct) btn.classList.add('is-wrong');
    });

    setStatus(
      correct ? `Туура! +${points} упай.` : `Туура эмес. +${points} упай.`,
      correct ? 'is-good' : 'is-bad'
    );

    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.textContent = current === ROUND_COUNT - 1 ? 'Натыйжа' : 'Кийинки раунд';
    }
  }

  function playCurrent() {
    if (phase !== 'listen') return;
    const target = rounds[current];
    if (!target) return;
    playNotes(target);
    hasPlayed = true;
    setStatus('Укканыңды сакта да, эмоцияны танда.', 'is-ok');
  }

  function nextRound() {
    if (phase === 'listen') return;
    if (phase === 'result') {
      current += 1;
      if (current >= ROUND_COUNT) {
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
    rounds = Array.from({ length: ROUND_COUNT }, () => {
      const pick = EMOTIONS[Math.floor(Math.random() * EMOTIONS.length)];
      return pick;
    });
    current = 0;
    score = 0;
    streak = 0;
    updateScoreboard();
    renderRound();
  }

  if (volumeRange) {
    volumeRange.addEventListener('input', () => {
      if (masterGain) masterGain.gain.value = Number(volumeRange.value);
    });
  }

  if (heroStart) {
    heroStart.addEventListener('click', () => {
      startGame();
      if (stage) stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  playBtn.addEventListener('click', playCurrent);
  nextBtn.addEventListener('click', nextRound);
  restartBtn.addEventListener('click', startGame);

  startGame();
})();
