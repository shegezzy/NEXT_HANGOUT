// ── DATA ──
const nextHangout = {
  name: "Monthly Crew Night",
  date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
  location: "Lekki Phase 1, Lagos",
  time: "7:00 PM",
  cost: "Everyone pays their way",
  desc: "The vibe is unmatched, the crew is certified. Let's link up and make it a night to remember."
};

let members = [
  { name: "Evans", fullName: "Evander Odebode", role: "Crew Member", vibe: "House Master", hobbies: "Gaming, Movies", favTeam: "Manchester United", gender: "Male", photo: "https://randomuser.me/api/portraits/men/11.jpg", color: "#f5c842,#1a1510" },
  { name: "TNA", fullName: "Titilola Akinsola", role: "Crew Member", vibe: "Accountant", hobbies: "Fashion, Karaoke", favTeam: "Chelsea", gender: "Female", photo: "https://randomuser.me/api/portraits/women/22.jpg", color: "#ff6b35,#1a0e09" },
  { name: "Victory", fullName: "Victory Ojo", role: "Crew Member", vibe: "Chef", hobbies: "Cooking, Anime", favTeam: "Manchester United", gender: "Female", photo: "https://randomuser.me/api/portraits/women/33.jpg", color: "#6dcc80,#0e1a10" },
  { name: "Wale", fullName: "OlaWale Akindele", role: "Crew Member", vibe: "Content Creator", hobbies: "Game Coordinato, Vlogging", favTeam: "Barcelona", gender: "Male", photo: "https://randomuser.me/api/portraits/men/44.jpg", color: "#6bb5f0,#0e1220" },
  { name: "Opeyemi", fullName: "Opeyemi IDontKnowYourSurname", role: "Crew Member", vibe: "Photo/Vide~Grapher", hobbies: "Vlogging, Food", favTeam: "Manchester United", gender: "Female", photo: "https://randomuser.me/api/portraits/women/66.jpg", color: "#f06b9f,#1a0e14" },
  { name: "Segun", fullName: "Olusegun Akinnola", role: "Crew Member", vibe: "Mixologist", hobbies: "Cocktails, Music", favTeam: "Manchester United", gender: "Male", photo: "https://randomuser.me/api/portraits/men/88.jpg", color: "#6dcc80,#0e1a10" },
  { name: "Lola", fullName: "Ololade Oyetunde", role: "Crew Member", vibe: "Quality Control Officer", hobbies: "Travelling, Food", favTeam: "AC Milan", gender: "Female", photo: "https://randomuser.me/api/portraits/men/88.jpg", color: "#6dcc80,#0e1a10" },
  { name: "Kolade", fullName: "Kolade Aminu", role: "Crew Member", vibe: "To be decided", hobbies: "DJing, Football", favTeam: "Manchester City", gender: "Male", photo: "https://randomuser.me/api/portraits/men/55.jpg", color: "#c47ef0,#15102a" },
  { name: "Kish", fullName: "Kish IDontKnowYourSurname", role: "Crew Member", vibe: "To be decided", hobbies: "Photography, Vlogging", favTeam: "Real Madrid", gender: "Male", photo: "https://randomuser.me/api/portraits/men/77.jpg", color: "#f5c842,#1a1510" },

];

let pollOptions = [
  { label: "Rooftop bar – Lekki", votes: 3 },
  { label: "Island Kitchen – Victoria Island", votes: 2 },
  { label: "Owambe house party", votes: 4 },
  { label: "Beach day – Elegushi", votes: 1 },
];

let userVote = null;

let rsvpList = [
  { name: "Tunde", status: "going" },
  { name: "Amaka", status: "going" },
  { name: "Kemi", status: "maybe" },
];

const hangoutAlbums = [
  {
    title: "Abeokuta Hangout",
    date: "March 16, 2026",
    duration: "2 days",
    location: "Olumo Rock, Abeokuta",
    photos: [
      {
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
        caption: "Group link-up before heading out"
      },
      {
        img: "https://images.unsplash.com/photo-1496843916299-590492c751f4?auto=format&fit=crop&w=1600&q=80",
        caption: "Evening dinner with the full crew"
      },
      {
        img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80",
        caption: "Morning tour and sightseeing moments"
      }
    ]
  },
  {
    title: "Abule Hangout",
    date: "February 22, 2026",
    duration: "1 day",
    location: "Abule Egba, Lagos",
    photos: [
      {
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
        caption: "Music and games through the night"
      },
      {
        img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
        caption: "Street food stop after meetup"
      },
      {
        img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=80",
        caption: "Late-night team selfie moments"
      }
    ]
  },
  {
    title: "Ibadan Hangout",
    date: "January 18, 2026",
    duration: "1 day",
    location: "Bodija, Ibadan",
    photos: [
      {
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1600&q=80",
        caption: "Outdoor hangout with fresh weather"
      },
      {
        img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=80",
        caption: "Lounge stop and board games"
      },
      {
        img: "https://images.unsplash.com/photo-1520105072000-f44fc083e508?auto=format&fit=crop&w=1600&q=80",
        caption: "Closing dinner and highlights recap"
      }
    ]
  },
  {
    title: "Lekki Hangout",
    date: "December 21, 2025",
    duration: "1 day",
    location: "Lekki Phase 1, Lagos",
    photos: [
      {
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
        caption: "Rooftop chill with city lights"
      },
      {
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
        caption: "Live set and dance session"
      },
      {
        img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
        caption: "Final shot before closeout"
      }
    ]
  }
];

const paymentLeaderboard = [
  { name: "Evans", amount: 40000 },
  { name: "TNA", amount: 35000 },
  { name: "Victory", amount: 32000 },
  { name: "Wale", amount: 30000 },
  { name: "Opeyemi", amount: 28000 },
  { name: "Segun", amount: 26000 },
  { name: "Lola", amount: 24000 },
  { name: "Kolade", amount: 22000 },
  { name: "Kish", amount: 20000 },
];

const memberPortalRecords = [
  { name: "Evans", email: "evans@nexthangout.com", pin: "1111", status: "paid", amountPaid: 40000, reference: "TRF-8036102434-001", updatedAt: "2026-04-08" },
  { name: "TNA", email: "tna@nexthangout.com", pin: "2222", status: "paid", amountPaid: 35000, reference: "TRF-8036102434-002", updatedAt: "2026-04-08" },
  { name: "Victory", email: "victory@nexthangout.com", pin: "3333", status: "paid", amountPaid: 32000, reference: "TRF-8036102434-003", updatedAt: "2026-04-08" },
  { name: "Wale", email: "wale@nexthangout.com", pin: "4444", status: "paid", amountPaid: 30000, reference: "TRF-8036102434-004", updatedAt: "2026-04-08" },
  { name: "Opeyemi", email: "opeyemi@nexthangout.com", pin: "5555", status: "pending", amountPaid: 28000, reference: "TRF-8036102434-005", updatedAt: "2026-04-08" },
  { name: "Segun", email: "segun@nexthangout.com", pin: "6666", status: "paid", amountPaid: 26000, reference: "TRF-8036102434-006", updatedAt: "2026-04-08" },
  { name: "Lola", email: "lola@nexthangout.com", pin: "7777", status: "pending", amountPaid: 24000, reference: "TRF-8036102434-007", updatedAt: "2026-04-08" },
  { name: "Kolade", email: "kolade@nexthangout.com", pin: "8888", status: "unpaid", amountPaid: 0, reference: "-", updatedAt: "2026-04-08" },
  { name: "Kish", email: "kish@nexthangout.com", pin: "9999", status: "unpaid", amountPaid: 0, reference: "-", updatedAt: "2026-04-08" },
];

const previousHangoutSlides = [
  {
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
    caption: "Beach link-up at sunset"
  },
  {
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    caption: "Live music night with the full crew"
  },
  {
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    caption: "Rooftop chill and city lights"
  },
  {
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1600&q=80",
    caption: "Weekend outdoor hangout"
  }
];

let sliderIndex = 0;
let sliderTimer = null;

let activeLightboxAlbum = -1;
let activeLightboxPhoto = 0;

// ── INIT ──
function init() {
  initMobileNav();
  renderEventInfo();
  startCountdown();
  renderRsvp();
  renderLeaderboard();
  initHangoutSlider();
  renderPoll();
  renderMembers();
  animateStats();
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('primary-nav');
  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 760) closeMenu();
    });
  });

  document.addEventListener('click', e => {
    if (window.innerWidth > 760) return;
    if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

function initHangoutSlider() {
  const track = document.getElementById('slider-track');
  const dots = document.getElementById('slider-dots');
  const prev = document.getElementById('slider-prev');
  const next = document.getElementById('slider-next');
  const shell = document.getElementById('hangout-slider');

  if (!track || !dots || !prev || !next || !shell || !previousHangoutSlides.length) return;

  track.innerHTML = previousHangoutSlides.map(slide => `
    <div class="slide">
      <img src="${slide.img}" alt="${slide.caption}">
      <div class="slide-overlay">
        <p class="slide-caption">${slide.caption}</p>
      </div>
    </div>
  `).join('');

  dots.innerHTML = previousHangoutSlides.map((_, i) => `
    <button class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join('');

  function updateSlider(index) {
    sliderIndex = (index + previousHangoutSlides.length) % previousHangoutSlides.length;
    track.style.transform = `translateX(-${sliderIndex * 100}%)`;
    dots.querySelectorAll('.slider-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === sliderIndex);
    });
  }

  function restartAutoPlay() {
    if (sliderTimer) clearInterval(sliderTimer);
    sliderTimer = setInterval(() => updateSlider(sliderIndex + 1), 4500);
  }

  prev.addEventListener('click', () => {
    updateSlider(sliderIndex - 1);
    restartAutoPlay();
  });
  next.addEventListener('click', () => {
    updateSlider(sliderIndex + 1);
    restartAutoPlay();
  });

  dots.addEventListener('click', e => {
    const btn = e.target.closest('.slider-dot');
    if (!btn) return;
    updateSlider(Number(btn.dataset.index));
    restartAutoPlay();
  });

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) updateSlider(sliderIndex - 1);
    else updateSlider(sliderIndex + 1);
    restartAutoPlay();
  });

  shell.addEventListener('mouseenter', () => sliderTimer && clearInterval(sliderTimer));
  shell.addEventListener('mouseleave', restartAutoPlay);

  updateSlider(0);
  restartAutoPlay();
}

function animateStats() {
  animateNum('stat-hangouts', 18);
  animateNum('stat-members', members.length);
  animateNum('stat-photos', getTotalGalleryPhotoCount());
}

function getTotalGalleryPhotoCount() {
  return hangoutAlbums.reduce((sum, album) => sum + album.photos.length, 0);
}

function animateNum(id, target) {
  const el = document.getElementById(id);
  let n = 0; const step = Math.ceil(target / 30);
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n;
    if (n >= target) clearInterval(t);
  }, 40);
}

// ── EVENT INFO ──
function renderEventInfo() {
  const opts = { weekday: 'long', month: 'long', day: 'numeric' };
  document.getElementById('event-date-label').textContent = nextHangout.date.toLocaleDateString('en-NG', opts);
  document.getElementById('event-name').textContent = nextHangout.name;
  document.getElementById('event-desc').textContent = nextHangout.desc;
  document.getElementById('event-location').textContent = nextHangout.location;
  document.getElementById('event-time').textContent = nextHangout.time;
  document.getElementById('event-cost').textContent = nextHangout.cost;
}

// ── COUNTDOWN ──
function startCountdown() {
  function tick() {
    const diff = nextHangout.date - new Date();
    if (diff <= 0) {
      ['cd-days', 'cd-hrs', 'cd-min', 'cd-sec'].forEach(id => document.getElementById(id).textContent = '0');
      return;
    }
    document.getElementById('cd-days').textContent = Math.floor(diff / 86400000);
    document.getElementById('cd-hrs').textContent = Math.floor((diff % 86400000) / 3600000);
    document.getElementById('cd-min').textContent = Math.floor((diff % 3600000) / 60000);
    document.getElementById('cd-sec').textContent = Math.floor((diff % 60000) / 1000);
  }
  tick(); setInterval(tick, 1000);
}

// ── RSVP ──
function renderRsvp() {
  const el = document.getElementById('rsvp-list');
  el.innerHTML = rsvpList.map(r => `
    <div class="rsvp-item">
      <span>${r.name}</span>
      <span class="rsvp-badge ${r.status === 'going' ? 'going' : 'maybe'}">${r.status === 'going' ? '✓ Going' : '~ Maybe'}</span>
    </div>
  `).join('');
}

function rsvp(status) {
  const name = prompt("Your name?"); if (!name) return;
  const existing = rsvpList.find(r => r.name.toLowerCase() === name.toLowerCase());
  if (existing) existing.status = status;
  else rsvpList.push({ name, status });
  renderRsvp();
}

// ── GALLERY ──
function renderGalleryPage() {
  const container = document.getElementById('hangout-albums');
  if (!container) return;

  const albumsMarkup = hangoutAlbums.map((album, albumIndex) => {
    const photosMarkup = album.photos.map((photo, photoIndex) => {
      const hiddenClass = photoIndex > 0 ? ' is-hidden' : '';
      return `
        <button class="gallery-page-item${hiddenClass}" data-extra="${photoIndex > 0 ? 'true' : 'false'}" type="button" onclick="openLightbox(${albumIndex}, ${photoIndex})" aria-label="Open ${photo.caption}">
          <img src="${photo.img}" alt="${photo.caption}">
          <span>${photo.caption}</span>
        </button>
      `;
    }).join('');

    const toggleBtnMarkup = album.photos.length > 1
      ? `<button class="gallery-show-more-btn" type="button" onclick="toggleAlbumPhotos(${albumIndex}, this)" aria-expanded="false">Show more (${album.photos.length - 1})</button>`
      : '';

    return `
      <article class="hangout-album" id="album-${albumIndex}">
        <div class="hangout-album-head">
          <h2>${album.title}</h2>
          <div class="hangout-album-meta">
            <span><strong>Date:</strong> ${album.date}</span>
            <span><strong>Duration:</strong> ${album.duration}</span>
            <span><strong>Location:</strong> ${album.location}</span>
          </div>
        </div>
        <div class="gallery-page-grid">
          ${photosMarkup}
        </div>
        ${toggleBtnMarkup}
      </article>
    `;
  }).join('');

  container.innerHTML = `
    <div class="hangout-albums-shell">
      ${albumsMarkup}
    </div>
  `;
}

function toggleAlbumPhotos(albumIndex, triggerBtn) {
  const albumRoot = document.getElementById(`album-${albumIndex}`);
  if (!albumRoot || !triggerBtn) return;

  const hiddenItems = albumRoot.querySelectorAll('.gallery-page-item[data-extra="true"]');
  if (!hiddenItems.length) return;

  const isExpanding = triggerBtn.getAttribute('aria-expanded') !== 'true';
  hiddenItems.forEach(item => {
    item.classList.toggle('is-hidden', !isExpanding);
  });

  triggerBtn.setAttribute('aria-expanded', String(isExpanding));
  triggerBtn.textContent = isExpanding ? 'Show less' : `Show more (${hiddenItems.length})`;
}

function updateLightboxView() {
  const album = hangoutAlbums[activeLightboxAlbum];
  if (!album || !album.photos.length) return;

  const item = album.photos[activeLightboxPhoto];
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  if (!item || !lb || !img) return;

  img.src = item.img;
  img.alt = item.caption || 'Hangout photo';
  if (caption) caption.textContent = `${album.title}: ${item.caption || 'Hangout photo'}`;
  if (counter) counter.textContent = `${activeLightboxPhoto + 1} / ${album.photos.length}`;
  lb.classList.add('open');
}

function openLightbox(albumIndex, photoIndex = 0) {
  const album = hangoutAlbums[albumIndex];
  if (!album || !album.photos.length) return;
  activeLightboxAlbum = albumIndex;
  activeLightboxPhoto = Math.max(0, Math.min(photoIndex, album.photos.length - 1));
  updateLightboxView();
}

function moveLightbox(step) {
  const album = hangoutAlbums[activeLightboxAlbum];
  if (!album || !album.photos.length) return;
  const total = album.photos.length;
  activeLightboxPhoto = (activeLightboxPhoto + step + total) % total;
  updateLightboxView();
}

function closeLightbox(event) {
  if (event && event.target !== event.currentTarget) return;
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

function initLightboxBehavior() {
  const lb = document.getElementById('lightbox');
  if (!lb || lb.dataset.enhanced === 'true') return;

  lb.dataset.enhanced = 'true';

  let startX = 0;
  lb.addEventListener('touchstart', e => {
    if (!e.touches.length) return;
    startX = e.touches[0].clientX;
  }, { passive: true });

  lb.addEventListener('touchend', e => {
    if (!e.changedTouches.length || !lb.classList.contains('open')) return;
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) moveLightbox(-1);
    else moveLightbox(1);
  });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') moveLightbox(-1);
    if (e.key === 'ArrowRight') moveLightbox(1);
  });
}

// ── POLL ──
function renderPoll() {
  const total = pollOptions.reduce((s, o) => s + o.votes, 0);
  document.getElementById('poll-total').textContent = `${total} vote${total !== 1 ? 's' : ''} total`;
  document.getElementById('poll-options').innerHTML = pollOptions.map((opt, i) => {
    const pct = total ? Math.round(opt.votes / total * 100) : 0;
    const isVoted = userVote === i;
    return `
      <div class="poll-option${isVoted ? ' voted' : ''}" onclick="castVote(${i})">
        <div class="poll-option-inner">
          <div class="poll-bar" style="width:${pct}%"></div>
          <span class="poll-label">${opt.label}</span>
          <span class="poll-pct">${pct}%</span>
        </div>
      </div>
    `;
  }).join('');
}

function castVote(i) {
  if (userVote !== null) pollOptions[userVote].votes = Math.max(0, pollOptions[userVote].votes - 1);
  userVote = i;
  pollOptions[i].votes++;
  renderPoll();
}

function addOption() {
  const inp = document.getElementById('new-option-input');
  const val = inp.value.trim(); if (!val) return;
  pollOptions.push({ label: val, votes: 0 });
  inp.value = '';
  renderPoll();
}

// ── LEADERBOARD ──
function renderLeaderboard() {
  const list = document.getElementById('leaderboard-list');
  if (!list) return;

  if (!paymentLeaderboard.length) {
    list.innerHTML = '<p class="leaderboard-empty">No payments ranked yet.</p>';
    return;
  }

  const formatNaira = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  });

  const sorted = [...paymentLeaderboard].sort((a, b) => b.amount - a.amount);
  list.innerHTML = sorted.map((entry, i) => `
    <div class="leaderboard-row">
      <div class="leaderboard-member">
        <span class="leaderboard-rank">#${i + 1}</span>
        <span class="leaderboard-name">${entry.name}</span>
      </div>
      <div class="leaderboard-amount">${formatNaira.format(entry.amount)}</div>
    </div>
  `).join('');
}

// ── MEMBERS ──
function renderMembers() {
  const grid = document.getElementById('members-grid');
  if (!grid) return;
  grid.innerHTML = members.map((m, i) => {
    const [bg, color] = m.color.split(',');
    const initials = m.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const photo = m.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.fullName || m.name)}&background=1a1917&color=f0ede8&size=200`;
    return `
      <div class="member-card" onclick="openProfileModal(${i})">
        <div class="member-avatar" style="background:${bg};color:${color}">
          ${m.photo ? `<img src="${photo}" alt="${m.fullName || m.name}">` : initials}
        </div>
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
        <div class="member-vibe">${m.vibe}</div>
      </div>
    `;
  }).join('');
  document.getElementById('stat-members').textContent = members.length;
}

function openMemberModal() {
  const el = document.getElementById('member-modal');
  if (el) el.classList.add('open');
}

function closeMemberModal() {
  const el = document.getElementById('member-modal');
  if (el) el.classList.remove('open');
}

function closeProfileModal() {
  const el = document.getElementById('profile-modal');
  if (el) el.classList.remove('open');
}

function openJoinModal() {
  const el = document.getElementById('join-modal');
  if (el) el.classList.add('open');
}

function closeJoinModal() {
  const el = document.getElementById('join-modal');
  if (el) el.classList.remove('open');
}

function openProfileModal(i) {
  const member = members[i];
  if (!member) return;

  const fullName = member.fullName || member.name;
  const photo = member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=1a1917&color=f0ede8&size=240`;
  document.getElementById('profile-photo').src = photo;
  document.getElementById('profile-photo').alt = fullName;
  document.getElementById('profile-full-name').textContent = fullName;
  document.getElementById('profile-role').textContent = member.role || 'Crew Member';
  document.getElementById('profile-hobbies').textContent = member.hobbies || 'Good vibes';
  document.getElementById('profile-team').textContent = member.favTeam || 'No favorite team';
  document.getElementById('profile-gender').textContent = member.gender || 'Not specified';
  document.getElementById('profile-modal').classList.add('open');
}

function addMember() {
  const name = document.getElementById('m-name').value.trim();
  const role = document.getElementById('m-role').value.trim();
  const vibe = document.getElementById('m-vibe').value.trim();
  const color = document.getElementById('m-color').value;
  if (!name) { alert('Please enter your name!'); return; }
  members.push({
    name,
    fullName: name,
    role: role || 'Crew Member',
    vibe: vibe || 'Good Vibes Only',
    hobbies: 'Music, Games',
    favTeam: 'Not set',
    gender: 'Not specified',
    color
  });
  renderMembers();
  closeMemberModal();
  ['m-name', 'm-role', 'm-vibe'].forEach(id => document.getElementById(id).value = '');
}

function attachModalBackdropClose(modalId, closeFn) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.addEventListener('click', function (e) {
    if (e.target === this) closeFn();
  });
}

function initWeb3Form(formId, statusId, statusBaseClass) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    status.className = `${statusBaseClass} show`;
    status.textContent = 'Sending request...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        status.className = `${statusBaseClass} show success`;
        status.textContent = 'Successful form submission. A rep will reach out to you.';
        form.reset();
      } else {
        status.className = `${statusBaseClass} show error`;
        status.textContent = data.message || 'Something went wrong. Please try again.';
      }
    } catch (err) {
      status.className = `${statusBaseClass} show error`;
      status.textContent = 'Network error. Please try again.';
    }
  });
}

function initPaymentPage() {
  const fileInput = document.getElementById('receipt-file');
  const fileName = document.getElementById('receipt-file-name');
  const copyBtn = document.getElementById('copy-account-btn');
  const accountNumber = document.getElementById('pay-account-number');
  const copyStatus = document.getElementById('copy-status');

  if (fileInput && fileName) {
    fileInput.addEventListener('change', function () {
      if (!fileInput.files || !fileInput.files.length) {
        fileName.textContent = 'No file selected yet.';
        return;
      }
      fileName.textContent = `Selected: ${fileInput.files[0].name}`;
    });
  }

  if (copyBtn && accountNumber && copyStatus) {
    copyBtn.addEventListener('click', async function () {
      copyStatus.className = 'status show';
      try {
        await navigator.clipboard.writeText(accountNumber.textContent.trim());
        copyStatus.className = 'status show success';
        copyStatus.textContent = 'Account number copied.';
      } catch (err) {
        copyStatus.className = 'status show error';
        copyStatus.textContent = 'Could not copy automatically. Please copy manually.';
      }
    });
  }
}

function getMemberByCredentials(email, pin) {
  return memberPortalRecords.find(record =>
    record.email.toLowerCase() === email.toLowerCase() && record.pin === pin
  );
}

function initLoginPage() {
  const form = document.getElementById('member-login-form');
  const status = document.getElementById('login-status');
  if (!form || !status) return;

  const existingSession = localStorage.getItem('nh_member_session');
  if (existingSession) {
    window.location.href = 'dashboard.html';
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pin = document.getElementById('login-pin').value.trim();
    const member = getMemberByCredentials(email, pin);

    if (!member) {
      status.className = 'status show error';
      status.textContent = 'Invalid login details. Please check your email and PIN.';
      return;
    }

    localStorage.setItem('nh_member_session', JSON.stringify({ email: member.email }));
    status.className = 'status show success';
    status.textContent = 'Login successful. Redirecting...';
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 450);
  });
}

function initDashboardPage() {
  const sessionRaw = localStorage.getItem('nh_member_session');
  if (!sessionRaw) {
    window.location.href = 'login.html';
    return;
  }

  let session;
  try {
    session = JSON.parse(sessionRaw);
  } catch (err) {
    localStorage.removeItem('nh_member_session');
    window.location.href = 'login.html';
    return;
  }

  const member = memberPortalRecords.find(record => record.email === session.email);
  if (!member) {
    localStorage.removeItem('nh_member_session');
    window.location.href = 'login.html';
    return;
  }

  const formatNaira = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  });

  const statusLabelMap = {
    paid: 'Paid',
    pending: 'Pending Verification',
    unpaid: 'Not Paid',
  };

  const nameEl = document.getElementById('dash-member-name');
  const emailEl = document.getElementById('dash-member-email');
  const statusEl = document.getElementById('dash-payment-status');
  const amountEl = document.getElementById('dash-amount-paid');
  const refEl = document.getElementById('dash-reference');
  const updatedEl = document.getElementById('dash-updated');
  const logoutBtn = document.getElementById('member-logout-btn');

  if (!nameEl || !emailEl || !statusEl || !amountEl || !refEl || !updatedEl || !logoutBtn) return;

  nameEl.textContent = `Hi, ${member.name}`;
  emailEl.textContent = member.email;
  statusEl.textContent = statusLabelMap[member.status] || 'Pending';
  statusEl.className = `dash-badge ${member.status}`;
  amountEl.textContent = formatNaira.format(member.amountPaid || 0);
  refEl.textContent = member.reference || '-';
  updatedEl.textContent = member.updatedAt || '-';

  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('nh_member_session');
    window.location.href = 'login.html';
  });
}

attachModalBackdropClose('member-modal', closeMemberModal);
attachModalBackdropClose('join-modal', closeJoinModal);
attachModalBackdropClose('profile-modal', closeProfileModal);
initWeb3Form('join-form', 'join-form-status', 'form-status');
initWeb3Form('membership-form', 'form-status', 'status');
initWeb3Form('payment-form', 'payment-form-status', 'status');
initLightboxBehavior();

if (document.body.classList.contains('page-home')) {
  init();
}

if (document.body.classList.contains('page-gallery')) {
  initMobileNav();
  renderGalleryPage();
}

if (document.body.classList.contains('page-payment')) {
  initPaymentPage();
}

if (document.body.classList.contains('page-login')) {
  initLoginPage();
}

if (document.body.classList.contains('page-dashboard')) {
  initDashboardPage();
}
