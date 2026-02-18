let modal = document.getElementById('playerModal');
let modalPlayer = modal ? modal.querySelector('.modal-player') : null;
let modalTitle = modal ? modal.querySelector('#playerTitle') : null;
let closeBtn = modal ? modal.querySelector('.modal-close') : null;
let unmuteBtn = modal ? modal.querySelector('.modal-unmute') : null;

const WORKS_CATALOG = [
  {
    title: "Кадимки шоу 1 сезон",
    href: "work/kadimki-shou-1-sezon.html",
    image: "media/posts/15/kadimki-show.jpeg",
    tag: "Сериалдар"
  },
  {
    title: "Студкеңеш башчысы кызматчы кыз!",
    href: "work/studkenesh-bashchysy-kyzmatchy-kyz.html",
    image: "media/posts/5/6892598fd25e8cfafb58f32d_-Studkenesh-bashchysy-kyzmatchy-kyz-rec55kg-kyrgyz-un-koshtoosu.jpg",
    tag: "Аниме"
  },
  {
    title: "Рик жана Морти",
    href: "work/rik-zhana-morti.html",
    image: "media/posts/23/RIK-ZhANA-MORTI-KYRGYZChA.webp",
    tag: "Сериалдар"
  },
  {
    title: "Том жана Жерри (2021) кыргызча",
    href: "work/tom-zhana-zherri-2021-kyrgyzcha.html",
    image: "media/posts/21/tom-zhana-zherri-kyrgyzcha__rec55kg.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Киберпанк 2077, Циринин айтып берүүсүндө",
    href: "work/kiberpank-2077-cirinin-aytyp-beruusundo.html",
    image: "media/posts/9/kiberpank-kyrgyzcha.jpeg",
    tag: "Видеоюн"
  },
  {
    title: "Cyberpunk 2077 - Кыргыз трейлер (Дубляж, 2018)",
    href: "work/cyberpunk-2077-kyrgyz-treyler-dublyazh-2018.html",
    image: "media/posts/10/cyberpunk-kyrgyz-trailer.jpg",
    tag: "Видеоюн"
  },
  {
    title: "Жылмайган достор мультсериалы",
    href: "work/zhylmaygan-dostor-multserialy.html",
    image: "media/posts/19/zhylmaigan-dostor-kyrgyzcha-dublyazh.webp",
    tag: "Сериалдар"
  },
  {
    title: "Кыргызча үндөлгөн трейлерлер",
    href: "work/kyrgyzcha-undolgon-treylerler.html",
    image: "media/posts/29/kyrgyzcha-treilerler-.jpg",
    tag: "Аниме"
  },
  {
    title: "Бөрүбасарлар 2020",
    href: "work/borubasarlar-2020.html",
    image: "media/posts/22/borubasarlar-rec55kg-kyrgyzcha-multfilm.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Фрирен — акыркы сапар коштоочу - Эдит",
    href: "work/friren-akyrky-sapar-koshtoochu-edit.html",
    image: "media/posts/16/friren-kyrgyz.jpg",
    tag: "Аниме"
  },
  {
    title: "Сакчылар өрчүүсү (2012) - Кыргыз үн коштоосунда",
    href: "work/sakchylar-orchuusu-2012-kyrgyz-un-koshtoosunda.html",
    image: "media/posts/12/sakchylar-orchuusu-kyrgyzcha.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Өтүкчөн мышык (2011) PG-6+",
    href: "work/otukchon-myshyk.html",
    image: "media/posts/26/otukchon-myshyk-kyrgyzcha.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Кол Тийбестер 1+1",
    href: "work/kol-tiybester-11.html",
    image: "media/posts/24/11-Kol-Tiibester-rec55kg.jpeg",
    tag: "Тасмалар"
  },
  {
    title: "Мен бул Грут",
    href: "work/men-bul-grut.html",
    image: "media/posts/28/photo_2025-10-14-00.00.06.jpeg",
    tag: "Сериалдар"
  },
  {
    title: "\"Энканто\" кыргызча",
    href: "work/enkanto-kyrgyzcha.html",
    image: "media/posts/2/encanto-kyrgyzcha-un-koshtoo.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Титандар Чабуулу: Акыркы Сезон",
    href: "work/titandar-chabuulu-akyrky-sezon.html",
    image: "media/posts/18/titandar-chabuulu.jpg",
    tag: "Аниме"
  },
  {
    title: "Барток Шаан-шөкөттүү",
    href: "work/bartok-shaan-shokottuu.html",
    image: "media/posts/27/bartok-kyrgyzcha.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Синбад - Жети Деңиздин Дастаны",
    href: "work/sinbad-zheti-denizdin-dastany.html",
    image: "media/posts/25/sinbad-poster-kyrgyz.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Need for Speed Most Wanted(2012) - Интро (Кыргыз Дубляж)",
    href: "work/need-for-speed-most-wanted2012-intro-kyrgyz-dublyazh.html",
    image: "media/posts/11/Need-for-Speed-Most-Wanted2012-kyrgyzcha.jpg",
    tag: "Видеоюн"
  },
  {
    title: "Умтулуу 2014",
    href: "work/umtuluu-2014.html",
    image: "media/posts/7/umtuluu-kyrgyzcha_.jpg",
    tag: "Тасмалар"
  },
  {
    title: "Сүйүү, Өлүм жана Роботтор",
    href: "work/suyuu-olum-zhana-robottor.html",
    image: "media/posts/6/68925c149e649e5503fffaf6_Suiuu-Olum-zhana-Robottor-rec55kg.webp",
    tag: "Аниме"
  },
  {
    title: "Түн Ортосундагы Күн (2018)",
    href: "work/tun-ortosundagy-kun-2018.html",
    image: "media/posts/20/tun-ortosundagy-kun.jpg",
    tag: "Тасмалар"
  },
  {
    title: "Чынжыр Араа Адам - Кыргыз үн коштоосунда",
    href: "work/chynzhyr-araa-adam-kyrgyz-un-koshtoosunda.html",
    image: "media/posts/17/Chynzhyr-Araa-Adam.jpeg",
    tag: "Аниме"
  },
  {
    title: "БИР ТҮРДҮҮ СЫЙКЫР 2015",
    href: "work/bir-turduu-syikyr-2015.html",
    image: "media/posts/30/bir-turduu-syikyr-2015.jpg",
    tag: "Мультфильмдер"
  },
  {
    title: "Ушул Фарфор Куурчак Ашык Болду - Кыргызча Трейлер",
    href: "work/ushul-farfor-kuurchak-ashyk-boldu-kyrgyzcha-treiler.html",
    image: "media/posts/31/farfor-kuurchak.jpg",
    tag: "Аниме"
  }
];

function coverStyleFromImage(image) {
  const match = image.match(/(.*?media\/posts\/\d+\/)([^/]+)\.(jpg|jpeg|png|webp)$/i);
  if (!match) {
    return `background-image:url('${image}')`;
  }
  const [, prefix, name, ext] = match;
  return `--cover-fallback: url('${image}'); --cover-xs: url('${prefix}responsive/${name}-xs.${ext}'); --cover-sm: url('${prefix}responsive/${name}-sm.${ext}'); --cover-md: url('${prefix}responsive/${name}-md.${ext}'); --cover-lg: url('${prefix}responsive/${name}-lg.${ext}'); --cover-xl: url('${prefix}responsive/${name}-xl.${ext}')`;
}

function pageKeyFromPath(pathname) {
  const clean = (pathname || '').toLowerCase().replace(/\/+$/, '');
  if (!clean) return '/';
  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 0) return '/';
  if (parts[parts.length - 1] === 'index.html' && parts.length >= 2) {
    return `/${parts[parts.length - 2]}`;
  }
  return `/${parts[parts.length - 1]}`;
}

function shouldCollapseMobileNav() {
  if (document.body.classList.contains('home')) return true;
  const menuPages = new Set([
    '/komanda',
    '/biz-zhonundo',
    '/biz-zhonundo.html',
    '/baylanysh',
    '/baylanysh.html',
    '/oyun',
    '/oyun.html',
    '/oyun-kasting',
    '/oyun-kasting.html',
    '/oyun-inton',
    '/oyun-inton.html'
  ]);
  return !menuPages.has(pageKeyFromPath(window.location.pathname || ''));
}

function initNavMoreToggle(nav) {
  if (!shouldCollapseMobileNav()) return;
  const media = window.matchMedia ? window.matchMedia('(max-width: 820px)') : null;
  if (media && !media.matches) {
    if (nav.dataset.navMoreWatch !== 'true') {
      nav.dataset.navMoreWatch = 'true';
      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', () => initNavMoreToggle(nav));
      } else {
        window.addEventListener('resize', () => initNavMoreToggle(nav));
      }
    }
    return;
  }
  if (nav.dataset.navMoreInit === 'true') return;
  nav.dataset.navMoreInit = 'true';

  const visibleLabels = new Set(['Портфолио', 'Команда']);
  const links = Array.from(nav.children).filter((node) => node.nodeType === 1 && node.matches('a'));

  const anchor = links.find((link) => link.textContent.trim() === 'Команда');
  if (!anchor) return;

  const hiddenLinks = links.filter((link) => !visibleLabels.has(link.textContent.trim()));
  if (hiddenLinks.length === 0) return;

  const wrapper = document.createElement('span');
  wrapper.className = 'nav-more-anchor';
  anchor.parentNode.insertBefore(wrapper, anchor);
  wrapper.appendChild(anchor);

  const moreWrap = document.createElement('span');
  moreWrap.className = 'nav-more';

  hiddenLinks.forEach((link) => {
    moreWrap.appendChild(link);
  });

  if (moreWrap.children.length === 0) return;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-more-toggle';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Показать меню');
  toggle.innerHTML = '<span class="nav-more-icon" aria-hidden="true">▼</span>';

  wrapper.appendChild(toggle);
  wrapper.insertAdjacentElement('afterend', moreWrap);

  nav.classList.add('nav-has-more', 'nav-more-collapsed');

  const icon = toggle.querySelector('.nav-more-icon');
  const setOpen = (open) => {
    nav.classList.toggle('nav-more-open', open);
    nav.classList.toggle('nav-more-collapsed', !open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Скрыть меню' : 'Показать меню');
    if (icon) icon.textContent = open ? '▲' : '▼';
  };

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('nav-more-open'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const hasGame = nav.querySelector('a[href*="oyun.html"]');
  if (!hasGame) {
    const indexLink = Array.from(nav.querySelectorAll('a')).find((link) => /index\.html/.test(link.getAttribute('href') || ''));
    const baseHref = indexLink ? indexLink.getAttribute('href') || '' : 'index.html';
    const base = baseHref.replace(/index\.html.*$/, '');
    const gameLink = document.createElement('a');
    gameLink.href = `${base}oyun.html`;
    gameLink.textContent = 'Оюн';
    if (window.location.pathname.endsWith('oyun.html')) gameLink.classList.add('active');
    nav.appendChild(gameLink);
  }
  initNavMoreToggle(nav);
});

function ensureModal() {
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'playerModal';
    modal.className = 'modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" aria-label="Жабуу">×</button>
        <div class="modal-title" id="playerTitle"></div>
        <div class="modal-player"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modalPlayer = modal.querySelector('.modal-player');
  modalTitle = modal.querySelector('#playerTitle');
  closeBtn = modal.querySelector('.modal-close');
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent && !modalContent.querySelector('.modal-unmute')) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'modal-unmute';
    btn.textContent = 'Включить звук';
    btn.setAttribute('aria-label', 'Включить звук');
    modalContent.appendChild(btn);
  }
  unmuteBtn = modal.querySelector('.modal-unmute');
  if (unmuteBtn && unmuteBtn.dataset.bound !== 'true') {
    unmuteBtn.dataset.bound = 'true';
    unmuteBtn.addEventListener('click', () => {
      if (!modalPlayer) return;
      const iframe = modalPlayer.querySelector('iframe');
      if (!iframe) return;
      const current = iframe.getAttribute('src') || '';
      const next = updateMuteParam(current, false);
      iframe.setAttribute('src', next);
      unmuteBtn.style.display = 'none';
    });
  }
  if (closeBtn && closeBtn.dataset.bound !== 'true') {
    closeBtn.dataset.bound = 'true';
    closeBtn.addEventListener('click', closePlayer);
  }
  if (modal && modal.dataset.clickBound !== 'true') {
    modal.dataset.clickBound = 'true';
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePlayer();
    });
  }
}

function openPlayer(src, title) {
  ensureModal();
  if (!modal || !modalPlayer) return;
  const normalized = normalizeEmbed(src);
  const shouldMute = shouldMuteOnMobile(src);
  if (modalTitle) {
    modalTitle.textContent = title || '';
    modalTitle.style.display = title ? 'block' : 'none';
  }
  modalPlayer.innerHTML = `<iframe src="${normalized}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  if (unmuteBtn) {
    unmuteBtn.style.display = shouldMute ? 'inline-flex' : 'none';
  }
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}
function closePlayer() {
  if (!modal || !modalPlayer) return;
  modalPlayer.innerHTML = '';
  if (modalTitle) modalTitle.textContent = '';
  if (unmuteBtn) unmuteBtn.style.display = 'none';
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

function handlePlayClick(e) {
  const btn = e.target.closest('.play-btn');
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const src = btn.getAttribute('data-video');
  if (src) {
    const title = btn.getAttribute('data-title') || '';
    openPlayer(src, title);
    return;
  }
  // Fallback: open the work page if no video is available.
  const card = btn.closest('.work-card');
  const link = card ? card.querySelector('.work-body a') : null;
  if (link) window.location.href = link.href;
}

document.addEventListener('click', handlePlayClick);
document.addEventListener('pointerup', handlePlayClick);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.play-btn').forEach((btn) => {
    btn.setAttribute('type', 'button');
  });
});

function initMobileCoverNav() {
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
  if (!isMobile) return;
  let activeCover = null;

  const stopPreview = (cover) => {
    if (!cover) return;
    cover.dataset.previewActive = 'false';
    cover.classList.remove('previewing');
    const iframe = cover.querySelector('iframe[data-preview="true"]');
    if (iframe) iframe.remove();
    if (activeCover === cover) activeCover = null;
  };

  const startPreview = (cover) => {
    if (!cover || cover.dataset.previewActive === 'true') return false;
    if (cover.querySelector('iframe')) return false;
    const videoBtn = cover.querySelector('.play-btn[data-video]');
    if (!videoBtn) return false;
    const src = videoBtn.getAttribute('data-video') || '';
    if (!isYouTubeUrl(src)) return false;
    if (activeCover && activeCover !== cover) stopPreview(activeCover);
    const iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'eager');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.setAttribute('data-preview', 'true');
    iframe.src = buildPreviewEmbed(src);
    cover.appendChild(iframe);
    cover.classList.add('previewing');
    cover.dataset.previewActive = 'true';
    cover.dataset.previewArmed = 'false';
    activeCover = cover;
    return true;
  };

  document.addEventListener('pointerdown', (e) => {
    const cover = e.target.closest('.work-cover');
    if (!cover) return;
    if (e.target.closest('.play-btn')) return;
    if (e.target.closest('a')) return;
    startPreview(cover);
  }, { passive: true });

  const handleMove = (clientX, clientY) => {
    const el = document.elementFromPoint(clientX, clientY);
    const cover = el ? el.closest('.work-cover') : null;
    if (cover && cover !== activeCover) {
      startPreview(cover);
      return;
    }
    if (!cover && activeCover) stopPreview(activeCover);
  };

  let moveTicking = false;
  const onTouchMove = (e) => {
    if (moveTicking) return;
    moveTicking = true;
    window.requestAnimationFrame(() => {
      moveTicking = false;
      const touch = e.touches && e.touches[0];
      if (touch) handleMove(touch.clientX, touch.clientY);
    });
  };
  document.addEventListener('touchmove', onTouchMove, { passive: true });

  const onPointerMove = (e) => {
    if (e.pointerType && e.pointerType !== 'touch') return;
    if (moveTicking) return;
    moveTicking = true;
    window.requestAnimationFrame(() => {
      moveTicking = false;
      handleMove(e.clientX, e.clientY);
    });
  };
  document.addEventListener('pointermove', onPointerMove, { passive: true });

  document.addEventListener('click', (e) => {
    const cover = e.target.closest('.work-cover');
    if (!cover) return;
    if (e.target.closest('.play-btn')) return;
    if (e.target.closest('a')) return;
    if (cover.dataset.previewActive === 'true' && cover.dataset.previewArmed !== 'true') {
      cover.dataset.previewArmed = 'true';
      e.preventDefault();
      return;
    }
    const card = cover.closest('.work-card');
    const link = card ? card.querySelector('.work-body a') : null;
    if (link) window.location.href = link.href;
  });
}

document.addEventListener('DOMContentLoaded', initMobileCoverNav);

function initDesktopCoverPreview() {
  const media = window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)') : null;
  if (!media || !media.matches) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let activeCover = null;
  const pausedAutoPlays = new Map();
  const delayedCovers = new Set();

  const pauseAutoplayCovers = (currentCover) => {
    document.querySelectorAll('.work-cover.video-cover iframe').forEach((iframe) => {
      const cover = iframe.closest('.work-cover');
      if (!cover || cover === currentCover) return;
      if (iframe.dataset.preview === 'true') return;
      const src = iframe.getAttribute('src');
      if (!src) {
        const dataSrc = iframe.getAttribute('data-src');
        if (!dataSrc) return;
        if (!delayedCovers.has(cover)) {
          delayedCovers.add(cover);
          cover.dataset.autoplayPaused = 'true';
        }
        return;
      }
      if (!pausedAutoPlays.has(iframe)) {
        pausedAutoPlays.set(iframe, {
          src,
          opacity: iframe.style.opacity || ''
        });
        iframe.setAttribute('data-paused-src', src);
        iframe.removeAttribute('src');
        iframe.style.opacity = '0';
        cover.classList.add('autoplay-paused');
      }
    });
  };

  const resumeAutoplayCovers = () => {
    pausedAutoPlays.forEach((state, iframe) => {
      if (!iframe) return;
      iframe.setAttribute('src', state.src);
      iframe.removeAttribute('data-paused-src');
      iframe.style.opacity = state.opacity;
      iframe.classList.remove('autoplay-paused');
      const cover = iframe.closest('.work-cover');
      if (cover) cover.classList.remove('autoplay-paused');
    });
    pausedAutoPlays.clear();
    delayedCovers.forEach((cover) => {
      const iframe = cover ? cover.querySelector('iframe[data-src]') : null;
      const dataSrc = iframe ? iframe.getAttribute('data-src') : '';
      if (iframe && dataSrc) {
        iframe.setAttribute('src', dataSrc);
        iframe.removeAttribute('data-src');
        cover.classList.add('is-playing');
      }
      if (cover) {
        cover.dataset.autoplayPaused = 'false';
        cover.classList.remove('autoplay-paused');
      }
    });
    delayedCovers.clear();
  };

  const stopPreview = (cover, resume = true) => {
    if (!cover) return;
    cover.dataset.previewActive = 'false';
    cover.classList.remove('previewing');
    const iframe = cover.querySelector('iframe[data-preview="true"]');
    if (iframe) iframe.remove();
    if (activeCover === cover) activeCover = null;
    if (resume && !activeCover) {
      document.body.classList.remove('cover-preview-active');
      resumeAutoplayCovers();
    }
  };

  const startPreview = (cover) => {
    if (!cover || cover.dataset.previewActive === 'true') return false;
    if (cover.querySelector('iframe')) return false;
    const videoBtn = cover.querySelector('.play-btn[data-video]');
    if (!videoBtn) return false;
    const src = videoBtn.getAttribute('data-video') || '';
    if (!isPreviewableUrl(src)) return false;
    if (activeCover && activeCover !== cover) stopPreview(activeCover, false);
    const iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'eager');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.setAttribute('data-preview', 'true');
    iframe.src = buildPreviewEmbed(src);
    cover.appendChild(iframe);
    cover.classList.add('previewing');
    cover.dataset.previewActive = 'true';
    activeCover = cover;
    document.body.classList.add('cover-preview-active');
    pauseAutoplayCovers(cover);
    return true;
  };

  document.querySelectorAll('.work-cover').forEach((cover) => {
    cover.addEventListener('mouseenter', () => startPreview(cover));
    cover.addEventListener('mouseleave', () => stopPreview(cover));
  });

  window.addEventListener('blur', () => {
    if (activeCover) stopPreview(activeCover);
  });
}

document.addEventListener('DOMContentLoaded', initDesktopCoverPreview);

function normalizeEmbed(src) {
  if (!src) return '';
  const muteOnMobile = shouldMuteOnMobile(src);
  try {
    const u = new URL(src, window.location.href);
    const host = u.hostname.replace('www.', '');
    if (host.includes('youtube.com') && u.pathname.includes('/embed/')) {
      if (!u.searchParams.has('autoplay')) u.searchParams.set('autoplay', '1');
      if (muteOnMobile) {
        u.searchParams.set('mute', '1');
        u.searchParams.set('muted', '1');
        u.searchParams.set('playsinline', '1');
      }
      return u.toString();
    }
    if (host.includes('vimeo.com')) {
      if (!u.searchParams.has('autoplay')) u.searchParams.set('autoplay', '1');
      if (muteOnMobile) {
        u.searchParams.set('mute', '1');
        u.searchParams.set('muted', '1');
        u.searchParams.set('playsinline', '1');
      }
      return u.toString();
    }
    if (host.includes('vkvideo.ru') || host.includes('vk.com')) {
      if (!u.searchParams.has('autoplay')) u.searchParams.set('autoplay', '1');
      if (muteOnMobile) {
        u.searchParams.set('mute', '1');
        u.searchParams.set('muted', '1');
        u.searchParams.set('playsinline', '1');
      } else {
        u.searchParams.set('mute', '0');
        u.searchParams.set('muted', '0');
      }
      return u.toString();
    }
    return u.toString();
  } catch (e) {
    return src;
  }
}

function updateMuteParam(src, muted) {
  if (!src) return '';
  try {
    const u = new URL(src, window.location.href);
    if (!u.searchParams.has('autoplay')) u.searchParams.set('autoplay', '1');
    if (muted) {
      u.searchParams.set('mute', '1');
      u.searchParams.set('muted', '1');
      u.searchParams.set('playsinline', '1');
    } else {
      u.searchParams.set('mute', '0');
      u.searchParams.set('muted', '0');
    }
    return u.toString();
  } catch (e) {
    return src;
  }
}

function isMobileViewport() {
  return window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
}

function shouldMuteOnMobile(src) {
  if (!isMobileViewport()) return false;
  return isAutoplayProvider(src);
}

function isAutoplayProvider(src) {
  if (!src) return false;
  try {
    const u = new URL(src, window.location.href);
    const host = u.hostname.replace('www.', '');
    return host.includes('youtube.com') || host.includes('youtu.be') || host.includes('vimeo.com') || host.includes('vkvideo.ru') || host.includes('vk.com');
  } catch (e) {
    return /youtube\.com|youtu\.be|vimeo\.com|vkvideo\.ru|vk\.com/i.test(src);
  }
}

function buildPreviewEmbed(src) {
  if (!src) return '';
  try {
    const u = new URL(src, window.location.href);
    const host = u.hostname.replace('www.', '');
    let embed = u;
    if (host.includes('youtu.be')) {
      const id = u.pathname.replace('/', '');
      embed = new URL(`https://www.youtube.com/embed/${id}`);
    } else if (host.includes('youtube.com') && u.pathname.startsWith('/watch')) {
      const id = u.searchParams.get('v');
      if (id) embed = new URL(`https://www.youtube.com/embed/${id}`);
    } else if (host.includes('vkvideo.ru') || host.includes('vk.com')) {
      embed = u;
    }
    embed.searchParams.set('autoplay', '1');
    embed.searchParams.set('mute', '1');
    embed.searchParams.set('muted', '1');
    embed.searchParams.set('playsinline', '1');
    embed.searchParams.set('controls', '0');
    embed.searchParams.set('rel', '0');
    embed.searchParams.set('modestbranding', '1');
    return embed.toString();
  } catch (e) {
    return src;
  }
}

function isYouTubeUrl(src) {
  if (!src) return false;
  try {
    const u = new URL(src, window.location.href);
    const host = u.hostname.replace('www.', '');
    return host.includes('youtube.com') || host.includes('youtu.be');
  } catch (e) {
    return /youtube\.com|youtu\.be/i.test(src);
  }
}

function isPreviewableUrl(src) {
  if (!src) return false;
  try {
    const u = new URL(src, window.location.href);
    const host = u.hostname.replace('www.', '');
    return host.includes('youtube.com') || host.includes('youtu.be') || host.includes('vkvideo.ru') || host.includes('vk.com');
  } catch (e) {
    return /youtube\.com|youtu\.be|vkvideo\.ru|vk\.com/i.test(src);
  }
}

function buildAutoplayEmbed(src) {
  if (!src) return '';
  try {
    const u = new URL(src, window.location.href);
    const host = u.hostname.replace('www.', '');
    if (host.includes('youtube.com') && u.pathname.includes('/embed/')) {
      u.searchParams.set('autoplay', '1');
      u.searchParams.delete('mute');
      u.searchParams.set('playsinline', '1');
      return u.toString();
    }
    if (host.includes('vimeo.com')) {
      u.searchParams.set('autoplay', '1');
      u.searchParams.delete('muted');
      return u.toString();
    }
    return u.toString();
  } catch (e) {
    return src;
  }
}

function initWorkAutoplay() {
  const detailMain = document.querySelector('main.detail');
  if (!detailMain) return;
  const iframes = Array.from(detailMain.querySelectorAll('.player iframe'));
  if (iframes.length === 0) return;
  const targets = iframes.length > 1 ? [iframes[0]] : iframes;
  targets.forEach((iframe) => {
    const src = iframe.getAttribute('src') || '';
    const next = buildAutoplayEmbed(src);
    if (next && next !== src) iframe.setAttribute('src', next);
    if (iframe.getAttribute('loading') === 'lazy') {
      iframe.setAttribute('loading', 'eager');
    }
    const allow = iframe.getAttribute('allow') || '';
    if (!/autoplay/.test(allow)) {
      iframe.setAttribute('allow', `${allow ? `${allow}; ` : ''}autoplay`);
    }
  });
}

document.addEventListener('DOMContentLoaded', initWorkAutoplay);

function initDelayedCoverAutoplay() {
  const covers = Array.from(document.querySelectorAll('.work-cover.video-delay'));
  if (covers.length === 0) return;
  covers.forEach((cover) => {
    const iframe = cover.querySelector('iframe[data-src]');
    if (!iframe) return;
    const rawDelay = cover.getAttribute('data-autoplay-delay') || '0';
    const delay = Number.parseInt(rawDelay, 10);
    window.setTimeout(() => {
      if (cover.dataset.autoplayPaused === 'true') return;
      if (document.body.classList.contains('cover-preview-active')) return;
      const src = iframe.getAttribute('data-src');
      if (!src) return;
      iframe.setAttribute('src', src);
      iframe.removeAttribute('data-src');
      cover.classList.add('is-playing');
    }, Number.isFinite(delay) ? delay : 0);
  });
}

document.addEventListener('DOMContentLoaded', initDelayedCoverAutoplay);

// Highlight current category chip
document.addEventListener('DOMContentLoaded', () => {
  try {
    const current = decodeURIComponent(window.location.pathname.replace(/\/$/, ''));
    const isTagsPage = current.indexOf('/tags/') !== -1;
    const isWorkPage = current.indexOf('/work/') !== -1;
    const h1 = document.querySelector('main h1');
    const currentTitle = (h1 && h1.textContent ? h1.textContent : '').trim();
    const workTagEl = document.querySelector('.detail .work-tag');
    const workTag = workTagEl ? workTagEl.textContent.trim() : '';
    document.querySelectorAll('.chip-row .chip').forEach((chip) => {
      const href = chip.getAttribute('href') || '';
      let active = false;
      if (href && href.indexOf('http') !== 0) {
        const resolved = decodeURIComponent(new URL(href, window.location.href).pathname.replace(/\/$/, ''));
        if (resolved === current) active = true;
      }
      if (!active && isWorkPage && workTag) {
        if (chip.textContent.trim() === workTag) active = true;
      }
      if (!active && isTagsPage && currentTitle) {
        if (chip.textContent.trim() === currentTitle) active = true;
      }
      if (active) chip.classList.add('active');
    });
  } catch (e) {
    // Keep UI functional even if highlighting fails.
    console.error('Chip highlight failed', e);
  }
});

function shuffleInPlace(items, rng) {
  const rand = typeof rng === 'function' ? rng : Math.random;
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function rand() {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function renderRecommendations() {
  try {
    let section = document.querySelector('.recommendations');
    const detailMain = document.querySelector('main.detail');
    if (!section && detailMain) {
      section = document.createElement('section');
      section.className = 'recommendations';
      detailMain.appendChild(section);
    }
    if (!section) return;
    if (!Array.isArray(WORKS_CATALOG) || WORKS_CATALOG.length === 0) return;

    const currentPath = decodeURIComponent(window.location.pathname.replace(/\/$/, ''));
    const currentSlug = currentPath.split('/').pop();
    const slugWithHtml = currentSlug.endsWith('.html') ? currentSlug : `${currentSlug}.html`;
    const currentItem = WORKS_CATALOG.find((item) => item.href.endsWith(currentSlug) || item.href.endsWith(slugWithHtml));
    const currentTag = currentItem ? currentItem.tag : '';
    const available = WORKS_CATALOG.filter(
      (item) => !item.href.endsWith(currentSlug) && !item.href.endsWith(slugWithHtml)
    );
    if (available.length === 0) return;

    const seedSource = currentSlug || currentPath;
    const rng = mulberry32(hashString(seedSource));

    let picks = [];
    if (currentTag) {
      const sameTag = available.filter((item) => item.tag === currentTag);
      picks = shuffleInPlace(sameTag.slice(), rng).slice(0, 3);
    }
    if (picks.length < 3) {
      const pickedSet = new Set(picks.map((item) => item.href));
      const rest = available.filter((item) => !pickedSet.has(item.href));
      picks = picks.concat(shuffleInPlace(rest.slice(), rng).slice(0, 3 - picks.length));
    }
    if (picks.length === 0) {
      picks = shuffleInPlace(available.slice(), rng).slice(0, 3);
    }

    const cards = picks.map((item) => {
      const href = `../${item.href.replace(/^\.?\//, '')}`;
      const image = `../${item.image.replace(/^\.?\//, '')}`;
      const coverStyle = coverStyleFromImage(image);
      return `
      <article class="work-card">
        <div class="work-cover" style="${coverStyle}"></div>
        <div class="work-body">
          <h3><a href="${href}">${item.title}</a></h3>
          <div class="work-meta">
            <a class="ghost" href="${href}">Толук маалымат</a>
          </div>
        </div>
      </article>
    `;
    }).join('');

    section.innerHTML = `
    <h2>Сунушталган контент</h2>
    <div class="work-grid">
      ${cards}
    </div>
  `;
  } catch (e) {
    console.error('Recommendations render failed', e);
  }
}

document.addEventListener('DOMContentLoaded', renderRecommendations);

function initTestimonials() {
  const sections = Array.from(document.querySelectorAll('.reviews'));
  if (sections.length === 0) return;

  sections.forEach((section) => {
    if (section.dataset.reviewsInit === 'true') return;
    section.dataset.reviewsInit = 'true';

    const stage = section.querySelector('.reviews-stage');
    const thumbsStrip = section.querySelector('.reviews-thumbs');
    const slides = Array.from(section.querySelectorAll('.review-slide'));
    const thumbs = Array.from(section.querySelectorAll('.review-thumb'));
    const prev = section.querySelector('.reviews-nav.prev');
    const next = section.querySelector('.reviews-nav.next');

    if (!stage || slides.length === 0) return;

    let slider = stage.querySelector('.reviews-slider');
    if (!slider) {
      slider = document.createElement('div');
      slider.className = 'reviews-slider';
      slides.forEach((slide) => slider.appendChild(slide));
      stage.appendChild(slider);
    }

    slides.forEach((slide, i) => {
      slide.setAttribute('data-index', i);
    });
    thumbs.forEach((thumb, i) => {
      thumb.setAttribute('data-index', i);
    });

    let index = slides.findIndex((s) => s.classList.contains('is-active'));
    if (index < 0) index = 0;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoplay = section.getAttribute('data-autoplay') !== 'false';
    const interval = Number(section.getAttribute('data-interval')) || 4500;
    let timer = null;

    const total = slides.length;
    const slidePercent = 100 / total;
    slider.style.width = `${total * 100}%`;
    slides.forEach((slide) => {
      slide.style.flex = `0 0 ${slidePercent}%`;
      slide.style.width = `${slidePercent}%`;
      slide.style.minWidth = `${slidePercent}%`;
    });

    function setIndex(nextIndex) {
      index = ((nextIndex % total) + total) % total;

      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      slider.style.transform = `translateX(-${index * slidePercent}%)`;
      if (thumbs.length) {
        thumbs.forEach((thumb, i) => {
          const active = i === index;
          thumb.classList.toggle('is-active', active);
          thumb.setAttribute('aria-current', active ? 'true' : 'false');
        });

        const activeThumb = thumbs[index];
        if (activeThumb && thumbsStrip) {
          const thumbLeft = activeThumb.offsetLeft;
          const thumbWidth = activeThumb.offsetWidth;
          const stripWidth = thumbsStrip.clientWidth;
          const target = thumbLeft - (stripWidth - thumbWidth) / 2;
          thumbsStrip.scrollTo({
            left: Math.max(0, target),
            behavior: prefersReduced ? 'auto' : 'smooth'
          });
        }
      }
    }

    function stopAutoplay() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    function startAutoplay() {
      if (!autoplay || timer) return;
      timer = setInterval(() => setIndex(index + 1), interval);
    }

    setIndex(index);

    section.addEventListener('click', (e) => {
      const nav = e.target.closest('.reviews-nav');
      if (nav && section.contains(nav)) {
        e.preventDefault();
        e.stopPropagation();
        setIndex(nav.classList.contains('prev') ? index - 1 : index + 1);
        stopAutoplay();
        startAutoplay();
        return;
      }

      const thumb = e.target.closest('.review-thumb');
      if (thumb && section.contains(thumb)) {
        e.preventDefault();
        const targetIndex = Number(thumb.getAttribute('data-index'));
        if (Number.isNaN(targetIndex)) return;
        setIndex(targetIndex);
        stopAutoplay();
        startAutoplay();
      }
    });

    stage.addEventListener('mouseenter', stopAutoplay);
    stage.addEventListener('mouseleave', startAutoplay);
    stage.addEventListener('focusin', stopAutoplay);
    stage.addEventListener('focusout', startAutoplay);

    let dragStartX = 0;
    let dragStartY = 0;
    let isDragging = false;
    let skipClick = false;
    const dragThreshold = 30;

    stage.addEventListener('pointerdown', (e) => {
      isDragging = true;
      skipClick = false;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    });
    stage.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > dragThreshold) {
        setIndex(dx > 0 ? index - 1 : index + 1);
        skipClick = true;
        stopAutoplay();
        startAutoplay();
      }
    });
    stage.addEventListener('pointercancel', () => {
      isDragging = false;
    });
    stage.addEventListener('pointerleave', () => {
      isDragging = false;
    });

    stage.addEventListener('click', () => {
      if (skipClick) {
        skipClick = false;
        return;
      }
      setIndex(index + 1);
      stopAutoplay();
      startAutoplay();
    });

    stage.addEventListener('wheel', (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      e.preventDefault();
      setIndex(delta > 0 ? index + 1 : index - 1);
      stopAutoplay();
      startAutoplay();
    }, { passive: false });

    if (thumbsStrip) {
      thumbsStrip.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        e.preventDefault();
        thumbsStrip.scrollLeft += e.deltaY;
      }, { passive: false });
    }

    section.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        setIndex(index - 1);
        stopAutoplay();
        startAutoplay();
      }
      if (e.key === 'ArrowRight') {
        setIndex(index + 1);
        stopAutoplay();
        startAutoplay();
      }
    });
    section.setAttribute('tabindex', '0');

    startAutoplay();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTestimonials);
} else {
  initTestimonials();
}

function initJoinForm() {
  const form = document.querySelector('.join-form');
  if (!form || form.dataset.mailInit === 'true') return;
  form.dataset.mailInit = 'true';

  const getValue = (name) => {
    const field = form.elements[name];
    if (!field) return '';
    let value = '';
    if (typeof field.value === 'string') {
      value = field.value;
    }
    return value.replace(/\r\n/g, '\n').trim();
  };

  const formatLine = (label, value) => {
    const safe = value || '-';
    if (safe.includes('\n')) {
      return `${label}:\n${safe}`;
    }
    return `${label}: ${safe}`;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lines = [
      formatLine('Толук аты-жөнү', getValue('fullName')),
      formatLine('Жашыңыз', getValue('age')),
      formatLine('Шаар', getValue('city')),
      '',
      'Байланыш маалыматы',
      formatLine('Телефон', getValue('phone')),
      formatLine('Электрондук почта', getValue('email')),
      formatLine('Telegram/WhatsApp', getValue('messenger')),
      '',
      formatLine('Жабдыктар', getValue('equipment')),
      '',
      formatLine('Тажрыйба', getValue('experience')),
      '',
      formatLine('Көндүмдөр', getValue('skills')),
      '',
      formatLine('Иш үлгүлөрү', getValue('samples')),
      '',
      formatLine('Кошумча маалымат', getValue('extra')),
      '',
      formatLine('Ишке даярдыгыңыз', getValue('availability')),
      '',
      formatLine('Өзүм тууралуу', getValue('about'))
    ];

    const to = form.getAttribute('data-mailto') || 'rec55online@gmail.com';
    const subject = form.getAttribute('data-subject') || 'Командага кошулуу анкетасы';
    const body = lines.join('\n');
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initJoinForm);
} else {
  initJoinForm();
}
