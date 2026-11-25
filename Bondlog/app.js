/* BondLog — progressive enhancement only.
   The page works without this file: content, navigation, and the honest
   "coming soon" CTA state are all in the HTML. */

(function () {
  document.documentElement.classList.add('js');

  /* ------------------------------------------------------------------
     Appearance
     Dark is the default. The switch in the upper dock stores an explicit
     choice; the head snippet applies a saved Light choice before paint.
  ------------------------------------------------------------------ */
  var THEME_KEY = 'bondlog-theme';
  var themeRoot = document.documentElement;
  var themeToggle = document.querySelector('[data-theme-toggle]');
  function setTheme(theme, persist) {
    var dark = theme !== 'light';
    themeRoot.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (persist) {
      try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (e) {}
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#18181c' : '#f5f5f5');
    if (themeToggle) {
      themeToggle.setAttribute('aria-checked', String(dark));
      themeToggle.title = dark ? 'Switch to light appearance' : 'Switch to dark appearance';
      var label = themeToggle.querySelector('.theme-label');
      if (label) label.textContent = dark ? 'Dark' : 'Light';
    }
  }
  setTheme(themeRoot.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      setTheme(themeRoot.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true);
    });
  }

  /* ------------------------------------------------------------------
     App Store URL
     Set this to the live listing when it exists (e.g.
     "https://apps.apple.com/app/id0000000000"). While it is empty, the
     CTAs stay in their honest status state.
  ------------------------------------------------------------------ */
  var APP_STORE_URL = '';

  var storeCtas = document.querySelectorAll('[data-store-cta]');
  if (APP_STORE_URL) {
    storeCtas.forEach(function (el) {
      var a = document.createElement('a');
      a.className = el.className.replace('is-soon', '').trim() + ' btn-store';
      a.href = APP_STORE_URL;
      a.textContent = 'Download on the App Store';
      el.replaceWith(a);
    });
  } else {
    storeCtas.forEach(function (el) {
      el.setAttribute('title', 'BondLog is not on the App Store yet.');
    });
  }

  /* ---------- Mobile menu (details, so it works without JS too) ---------- */
  var menu = document.querySelector('.nav-menu');
  if (menu) {
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.open = false; });
    });
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Phone stage: fit to container ---------- */
  var stage = document.getElementById('demo');
  var stageInner = document.querySelector('.stage-inner');
  var desktop = window.matchMedia('(min-width: 900px)');
  var orbitRadius = 230;
  function fitStage() {
    if (!stage || !stageInner) return;
    var extra = desktop.matches ? 120 : 0;
    var k = Math.min(1, (stage.clientWidth - 8) / 340);
    if (desktop.matches) {
      k = Math.min(k, Math.max(0.6, (window.innerHeight - 56 - 150) / (700 + extra)));
    }
    stageInner.style.transform = 'scale(' + k.toFixed(4) + ')';
    stage.style.height = Math.round((700 + extra) * k) + 'px';
    orbitRadius = Math.min(320, (stage.clientWidth / k) / 2 - 44);
  }
  fitStage();
  window.addEventListener('resize', function () { fitStage(); placeOrbit(performance.now()); });

  /* ---------- Orbiting people around the phone ---------- */
  var PEOPLE = [
    { emoji: '👩🏽', name: 'Maya', when: 'today', bg: 'linear-gradient(140deg,rgba(114,59,250,.24),rgba(114,59,250,.46))' },
    { emoji: '👨🏻', name: 'Jonas', when: 'yesterday', bg: 'linear-gradient(140deg,rgba(24,24,28,.10),rgba(24,24,28,.20))' },
    { emoji: '👩🏼', name: 'Priya', when: '11 days', bg: 'linear-gradient(140deg,rgba(185,245,0,.28),rgba(185,245,0,.50))' },
    { emoji: '👨🏾', name: 'Tom', when: '3 days', bg: 'linear-gradient(140deg,rgba(114,59,250,.14),rgba(114,59,250,.30))' },
    { emoji: '👩🏻', name: 'Lena', when: 'today', bg: 'linear-gradient(140deg,rgba(245,245,245,.92),rgba(245,245,245,.56))' },
    { emoji: '👩🏽', name: 'Sofia', when: '6 weeks', bg: 'linear-gradient(140deg,rgba(114,59,250,.30),rgba(114,59,250,.52))' },
    { emoji: '👩🏿', name: 'Ana', when: '5 days', bg: 'linear-gradient(140deg,rgba(185,245,0,.20),rgba(185,245,0,.40))' },
    { emoji: '👨🏽', name: 'Marcus', when: '2 weeks', bg: 'linear-gradient(140deg,rgba(24,24,28,.06),rgba(24,24,28,.16))' },
    { emoji: '👨🏼', name: 'Dev', when: 'yesterday', bg: 'linear-gradient(140deg,rgba(114,59,250,.20),rgba(114,59,250,.38))' },
    { emoji: '👩🏾', name: 'Ruby', when: '4 weeks', bg: 'linear-gradient(140deg,rgba(245,245,245,.88),rgba(245,245,245,.50))' }
  ];
  var ring = document.getElementById('ring');
  var facepile = document.querySelector('.facepile');
  var heads = [];
  if (ring) {
    PEOPLE.forEach(function (p) {
      var head = document.createElement('div');
      head.className = 'head';
      head.innerHTML = '<span class="emo"></span><span class="tag"></span>';
      head.style.setProperty('--av-bg', p.bg);
      head.firstChild.textContent = p.emoji;
      head.lastChild.textContent = p.name + ' · ' + p.when;
      ring.appendChild(head);
      heads.push({ el: head, tag: head.lastChild });
    });
  }
  if (facepile) {
    PEOPLE.forEach(function (p) {
      var face = document.createElement('span');
      face.style.setProperty('--av-bg', p.bg);
      face.textContent = p.emoji;
      facepile.appendChild(face);
    });
  }

  var mx = 0, my = 0, px = 0, py = 0, orbitRaf = 0;
  var orbitStart = performance.now();
  window.addEventListener('pointermove', function (e) {
    mx = e.clientX / window.innerWidth - 0.5;
    my = e.clientY / window.innerHeight - 0.5;
  });

  function placeOrbit(now) {
    if (!heads.length) return;
    var still = reduced.matches;
    var t = (now - orbitStart) / 1000;
    var grow = still ? 1 : 1 - Math.pow(1 - Math.min(1, Math.max(0, (t - 0.6) / 1.6)), 4);
    px += (mx - px) * 0.05;
    py += (my - py) * 0.05;
    var base = still ? 0.6 : t * (Math.PI * 2 / 64) + (1 - grow) * -1.6 + px * 0.6;
    var ry = Math.min(240, orbitRadius);
    heads.forEach(function (h, i) {
      var angle = base + i * (Math.PI * 2 / heads.length);
      var depth = Math.sin(angle);
      var x = Math.cos(angle) * orbitRadius * grow;
      var y = (120 + depth * ry * (1 + py * 0.08)) * grow;
      var s = (0.6 + 0.5 * (depth + 1) / 2) * (0.34 + 0.66 * grow);
      h.el.style.transform = 'translate(-50%,-50%) translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scale(' + s.toFixed(3) + ')';
      h.el.style.zIndex = depth > 0 ? 200 : 50;
      h.el.style.opacity = (grow * (0.5 + 0.5 * Math.min(1, depth + 1))).toFixed(3);
      /* keep the name · recency tag with the emoji while it crosses the phone */
      h.tag.style.opacity = Math.max(0, Math.min(1, (depth - 0.35) * 3)).toFixed(3);
    });
  }

  function orbitLoop(now) {
    placeOrbit(now);
    orbitRaf = requestAnimationFrame(orbitLoop);
  }

  function startOrbit() {
    cancelAnimationFrame(orbitRaf);
    if (!desktop.matches || reduced.matches) {
      placeOrbit(performance.now());
      return;
    }
    orbitRaf = requestAnimationFrame(orbitLoop);
  }
  startOrbit();
  if (desktop.addEventListener) desktop.addEventListener('change', startOrbit);
  if (reduced.addEventListener) reduced.addEventListener('change', startOrbit);

  /* ---------- Phone demo: manual logging, in three beats ---------- */
  var phone = document.getElementById('phone');
  var replay = document.getElementById('replay');
  var confirmText = document.querySelector('.confirmpane .confirm-text');
  var selectQ = phone ? phone.querySelector('.select-q') : null;
  var demoStatus = document.getElementById('demo-status');
  var typeEls = phone ? phone.querySelectorAll('.type') : [];
  var demoBar = phone ? phone.querySelector('.demo-panel .swipebar') : null;
  var pavatar = demoBar ? demoBar.querySelector('.pavatar') : null;
  var hintYou = demoBar ? demoBar.querySelector('.hint.you') : null;
  var hintThem = demoBar ? demoBar.querySelector('.hint.them') : null;
  var SENTENCES = {
    user: {
      'In Person': 'You met up with Maya',
      'Call': 'You called Maya',
      'Message': 'You sent Maya a message',
      'Video': 'You sent Maya a video'
    },
    contact: {
      'In Person': 'Maya met up with you',
      'Call': 'Maya called you',
      'Message': 'Maya sent you a message',
      'Video': 'Maya sent you a video'
    }
  };
  var DRAG_MAX = 90, DRAG_THRESHOLD = 40;
  var initiator = 'user';
  var dragStart = null, dragDX = 0, dragAxis = null;
  var demoRun = 0;
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  function announce(message) {
    if (demoStatus) demoStatus.textContent = message;
  }

  function setPhase(phase) {
    if (!phone) return;
    phone.dataset.phase = phase;
    phone.querySelector('.selectpane').inert = phase !== 'select';
    phone.querySelector('.confirmpane').inert = phase !== 'confirm';
    if (hintYou) hintYou.hidden = phase === 'select' || phase === 'confirm';
    if (hintThem) hintThem.hidden = phase === 'select' || phase === 'confirm';
  }

  function updateSelectQuestion() {
    if (!selectQ) return;
    selectQ.textContent = initiator === 'user'
      ? 'How did you reach out to Maya?'
      : 'How did Maya reach out to you?';
  }

  function setDragVisual(dx) {
    if (!pavatar) return;
    var clamped = Math.max(-DRAG_MAX, Math.min(DRAG_MAX, dx));
    pavatar.style.setProperty('--dx', clamped.toFixed(1) + 'px');
    if (hintYou) hintYou.style.opacity = clamped > 6 ? Math.min(1, clamped / DRAG_THRESHOLD).toFixed(2) : '0';
    if (hintThem) hintThem.style.opacity = clamped < -6 ? Math.min(1, -clamped / DRAG_THRESHOLD).toFixed(2) : '0';
  }

  function clearDragVisual() {
    if (pavatar) pavatar.style.removeProperty('--dx');
    if (hintYou) hintYou.style.opacity = '';
    if (hintThem) hintThem.style.opacity = '';
    if (demoBar) demoBar.classList.remove('is-dragging');
  }

  function resetDemo() {
    initiator = 'user';
    updateSelectQuestion();
    clearDragVisual();
    typeEls.forEach(function (el) {
      el.classList.toggle('active', el.dataset.type === 'Message');
    });
    if (confirmText) confirmText.textContent = SENTENCES.user.Message;
  }

  function chooseType(el) {
    demoRun++;
    typeEls.forEach(function (other) {
      other.classList.toggle('active', other === el);
    });
    var sentence = SENTENCES[initiator][el.dataset.type];
    if (confirmText && sentence) confirmText.textContent = sentence;
    clearDragVisual();
    setPhase('confirm');
    if (sentence) announce(sentence + '.');
    phone.querySelector('.undo').focus({ preventScroll: true });
  }

  async function playDemo(loop) {
    var id = ++demoRun;
    resetDemo();
    if (reduced.matches) { setPhase('confirm'); return; }
    setPhase('idle');
    if (loop) { await wait(500); if (id !== demoRun) return; }
    await wait(1100); if (id !== demoRun) return;
    setPhase('swipe');
    setDragVisual(62);
    await wait(950); if (id !== demoRun) return;
    setPhase('select');
    clearDragVisual();
    await wait(1150); if (id !== demoRun) return;
    setPhase('confirm');
  }

  /* Drag the swipe bar yourself (pointer enhancement; Replay stays keyboard-accessible). */
  if (demoBar) {
    demoBar.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button') || reduced.matches || phone.dataset.screen !== 'people' || phone.dataset.phase === 'select') return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      demoRun++;
      dragStart = { x: e.clientX, y: e.clientY };
      dragDX = 0;
      dragAxis = null;
      demoBar.classList.add('is-dragging');
      try { demoBar.setPointerCapture(e.pointerId); } catch (err) {}
    });
    demoBar.addEventListener('pointermove', function (e) {
      if (!dragStart) return;
      var dx = e.clientX - dragStart.x;
      var dy = e.clientY - dragStart.y;
      if (!dragAxis) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        dragAxis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        if (dragAxis === 'y') { dragStart = null; clearDragVisual(); return; }
      }
      if (dragAxis !== 'x') return;
      e.preventDefault();
      dragDX = dx;
      setPhase('idle');
      setDragVisual(dx);
    });
    var endDrag = function () {
      if (!dragStart) { clearDragVisual(); return; }
      var dx = dragDX;
      dragStart = null;
      if (Math.abs(dx) >= DRAG_THRESHOLD) {
        initiator = dx > 0 ? 'user' : 'contact';
        updateSelectQuestion();
        clearDragVisual();
        setPhase('select');
        if (selectQ) announce(selectQ.textContent);
      } else {
        clearDragVisual();
        setPhase('idle');
      }
    };
    demoBar.addEventListener('pointerup', endDrag);
    demoBar.addEventListener('pointercancel', function () {
      dragStart = null;
      clearDragVisual();
      setPhase('idle');
    });
  }

  /* Controls inside the phone work in every motion setting (they don't animate). */
  if (phone) {
    setPhase('idle');
    document.querySelectorAll('[data-filter], [data-tab]').forEach(function (el) {
      el.setAttribute('aria-pressed', el.classList.contains('selected'));
    });
    typeEls.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        chooseType(el);
      });
    });

    phone.querySelector('.undo').addEventListener('click', function (e) {
      e.stopPropagation();
      demoRun++;
      resetDemo();
      setPhase('idle');
      announce('Interaction undone.');
      if (hintYou) hintYou.focus({ preventScroll: true });
    });
    [hintYou, hintThem].forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        demoRun++;
        initiator = button === hintYou ? 'user' : 'contact';
        updateSelectQuestion();
        clearDragVisual();
        setPhase('select');
        if (selectQ) announce(selectQ.textContent);
        typeEls[0].focus({ preventScroll: true });
      });
    });

    phone.querySelector('[data-cancel]').addEventListener('click', function () {
      demoRun++;
      clearDragVisual();
      setPhase('idle');
      announce('Selection cancelled.');
      if (hintYou) hintYou.focus({ preventScroll: true });
    });

    var filterChips = phone.querySelectorAll('.chips .chip[data-filter]');
    var demoPeople = phone.querySelectorAll('.person');
    filterChips.forEach(function (chip) {
      chip.addEventListener('click', function (e) {
        e.stopPropagation();
        filterChips.forEach(function (other) { other.classList.toggle('selected', other === chip); other.setAttribute('aria-pressed', other === chip); });
        var filter = chip.dataset.filter;
        demoPeople.forEach(function (person) {
          person.hidden = filter !== 'All' && person.dataset.category !== filter;
        });
        var demoPerson = phone.querySelector('.person.is-demo');
        var demoPanel = phone.querySelector('.demo-panel');
        var demoRow = demoPanel ? demoPanel.closest('.quicklog-row') : null;
        if (demoPanel) demoPanel.hidden = demoPerson.hidden;
        if (demoRow) demoRow.hidden = demoPerson.hidden;
        if (demoPerson && demoPerson.hidden && phone.dataset.phase !== 'confirm') {
          demoRun++;
          clearDragVisual();
          setPhase('idle');
        }
        announce(filter === 'All' ? 'Showing all people.' : 'Showing ' + filter + '.');
      });
    });

    var tabs = document.querySelectorAll('.stage-inner .tabbar .tab[data-tab]');
    var screenViews = phone.querySelectorAll('[data-view]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.stopPropagation();
        tabs.forEach(function (other) { other.classList.toggle('selected', other === tab); other.setAttribute('aria-pressed', other === tab); });
        demoRun++;
        clearDragVisual();
        var screen = tab.dataset.tab;
        phone.dataset.screen = screen;
        screenViews.forEach(function (view) { view.hidden = view.dataset.view !== screen; });
        if (screen === 'people') {
          setPhase('idle');
        }
        var tabLabel = tab.querySelector('span:last-child');
        announce((tabLabel ? tabLabel.textContent : 'Demo').trim() + ' screen.');
      });
    });
  }

  if (phone && replay) {
    replay.hidden = false;
    var started = false;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          if (demoRun === 0) playDemo(false);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(phone);
    replay.addEventListener('click', function () {
      document.querySelector('[data-tab=people]').click();
      phone.querySelector('[data-filter=All]').click();
      playDemo(true);
    });
  } else if (phone) {
    setPhase('confirm');
  }
  if (reduced.addEventListener) {
    reduced.addEventListener('change', function (e) {
      if (e.matches) {
        demoRun++;
        clearDragVisual();
        setPhase('confirm');
        if (phone) phone.classList.remove('is-tappable');
      }
    });
  }

  /* ---------- Live vignettes ---------- */
  document.querySelectorAll('.v-segmented').forEach(function (group) {
    group.querySelectorAll('.seg').forEach(function (seg) {
      seg.addEventListener('click', function () {
        group.querySelectorAll('.seg').forEach(function (other) {
          other.classList.toggle('on', other === seg);
        });
      });
    });
  });

  document.querySelectorAll('.v-types').forEach(function (group) {
    group.querySelectorAll('.vtype').forEach(function (tile) {
      tile.addEventListener('click', function () {
        group.querySelectorAll('.vtype').forEach(function (other) {
          other.classList.toggle('sel', other === tile);
        });
      });
    });
  });

  var archiveChips = document.querySelector('.v-org .chips');
  if (archiveChips) {
    archiveChips.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        archiveChips.querySelectorAll('.chip').forEach(function (other) {
          other.classList.toggle('selected', other === chip);
        });
      });
    });
  }

  var archivedRow = document.querySelector('.v-archived');
  var unarchive = document.querySelector('.v-unarchive');
  var orgEmpty = document.querySelector('.v-org-empty');
  var orgUndo = document.querySelector('.v-undo');
  if (archivedRow && unarchive) {
    unarchive.addEventListener('click', function () {
      archivedRow.hidden = true;
      if (orgEmpty) orgEmpty.hidden = false;
    });
  }
  if (archivedRow && orgEmpty && orgUndo) {
    orgUndo.addEventListener('click', function () {
      archivedRow.hidden = false;
      orgEmpty.hidden = true;
    });
  }

  var dateDemo = document.getElementById('dateDemo');
  if (dateDemo) {
    var DATE_PRESETS = [
      { main: 'Today', pill: 'Today' },
      { main: 'Yesterday', pill: 'Yesterday' },
      { main: 'Sat, Sep 12', pill: 'Backdated' }
    ];
    var dateIndex = 0;
    var dateMain = dateDemo.querySelector('.v-date-main');
    var datePill = dateDemo.querySelector('.v-pill');
    dateDemo.addEventListener('click', function () {
      dateIndex = (dateIndex + 1) % DATE_PRESETS.length;
      dateMain.textContent = DATE_PRESETS[dateIndex].main;
      datePill.textContent = DATE_PRESETS[dateIndex].pill;
    });
  }

  /* ---------- "Coming soon" status feedback ---------- */
  var storeNote = document.querySelector('[data-store-note]');
  document.querySelectorAll('button[data-store-cta]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!storeNote) return;
      storeNote.classList.remove('is-flash');
      void storeNote.offsetWidth;
      storeNote.classList.add('is-flash');
      storeNote.scrollIntoView({ block: 'nearest', behavior: reduced.matches ? 'auto' : 'smooth' });
    });
  });

  var INSIGHTS = [
    { title: 'A run of you reaching out', body: 'Your last 3 interactions with Maya were all started by you.', foot: 'Maya · calculated on this iPhone' },
    { title: 'Your longest gap in a while', body: 'You and Sofia went 6 weeks without a logged interaction.', foot: 'Sofia · calculated on this iPhone' },
    { title: 'A quiet channel', body: 'Calls with Priya slowed while messages held steady.', foot: 'Priya · calculated on this iPhone' }
  ];
  var insightCard = document.getElementById('insightCard');
  if (insightCard) {
    var insightTitle = insightCard.querySelector('.insight-title');
    var insightBody = insightCard.querySelector('.insight-body');
    var insightFoot = insightCard.querySelector('.insight-foot');
    var insightDots = insightCard.querySelectorAll('.insight-dots i');
    var insightIndex = 0;
    var insightBusy = false;
    insightCard.classList.add('is-interactive');
    insightCard.addEventListener('click', function () {
      if (insightBusy) return;
      insightBusy = true;
      insightIndex = (insightIndex + 1) % INSIGHTS.length;
      if (!reduced.matches) insightCard.classList.add('is-swapping');
      setTimeout(function () {
        insightTitle.textContent = INSIGHTS[insightIndex].title;
        insightBody.textContent = INSIGHTS[insightIndex].body;
        insightFoot.textContent = INSIGHTS[insightIndex].foot;
        insightDots.forEach(function (dot, i) { dot.classList.toggle('on', i === insightIndex); });
        insightCard.classList.remove('is-swapping');
        insightBusy = false;
      }, reduced.matches ? 0 : 180);
    });
  }

  /* ---------- Demo Insights: feed and general stats ---------- */
  var insightViewButtons = phone ? phone.querySelectorAll('[data-insight-view]') : [];
  var insightPanels = phone ? phone.querySelectorAll('[data-insight-panel]') : [];
  function showInsightView(view) {
    insightViewButtons.forEach(function (button) {
      var on = button.dataset.insightView === view;
      button.classList.toggle('on', on);
      button.setAttribute('aria-pressed', String(on));
    });
    insightPanels.forEach(function (panel) {
      panel.hidden = panel.dataset.insightPanel !== view;
    });
  }
  insightViewButtons.forEach(function (button) {
    button.addEventListener('click', function () { showInsightView(button.dataset.insightView); });
  });

  var statsRangeButtons = phone ? phone.querySelectorAll('[data-stats-range]') : [];
  statsRangeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var key = button.dataset.statsRange;
      statsRangeButtons.forEach(function (other) {
        var on = other === button;
        other.classList.toggle('on', on);
        other.setAttribute('aria-pressed', String(on));
      });
      if (phone) phone.querySelectorAll('[data-count-30]').forEach(function (el) {
        el.textContent = el.getAttribute('data-count-' + key);
      });
      phone.querySelectorAll('[data-bar-30]').forEach(function (el) {
        el.style.width = el.getAttribute('data-bar-' + key) + '%';
      });
    });
  });

  /* ---------- Nav: highlight the current section ---------- */
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var navSections = ['people', 'features', 'privacy', 'how']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (navLinks.length && navSections.length && 'IntersectionObserver' in window) {
    var sectionVisible = {};
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { sectionVisible[entry.target.id] = entry.isIntersecting; });
      var active = null;
      navSections.forEach(function (section) {
        if (!active && sectionVisible[section.id]) active = section.id;
      });
      navLinks.forEach(function (link) {
        if (active && link.getAttribute('href') === '#' + active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    navSections.forEach(function (section) { navObserver.observe(section); });
  }

  /* ---------- Soft reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced.matches) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
