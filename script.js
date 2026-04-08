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

const galleryItems = [
  { emoji: "🌴", label: "Beach Day '24", bg: "#1a2e1a" },
  { emoji: "🍗", label: "BBQ Night", bg: "#2e1a0e" },
  { emoji: "🎉", label: "Birthday Bash", bg: "#2e0e2a" },
  { emoji: "🎵", label: "Concert Night", bg: "#0e1a2e" },
  { emoji: "🍹", label: "Rooftop Vibes", bg: "#2e2a0e" },
  { emoji: "🏀", label: "Sport Day", bg: "#0e2e1a" },
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

let photoCount = galleryItems.length;

// ── INIT ──
function init() {
  initMobileNav();
  renderEventInfo();
  startCountdown();
  renderRsvp();
  renderGallery();
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
  animateNum('stat-photos', photoCount);
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
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = galleryItems.map((item, i) => `
    <div class="gallery-item" style="background:${item.bg}" onclick="openLightbox(${i})">
      <div class="gallery-placeholder">
        <div class="gallery-emoji">${item.emoji}</div>
        <div>${item.label}</div>
      </div>
      <div class="gallery-overlay"><span>${item.label}</span></div>
    </div>
  `).join('');
}

function handleUpload(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      galleryItems.push({ img: ev.target.result, label: file.name.replace(/\.[^.]+$/, ''), bg: '#1a1917' });
      photoCount++;
      renderGallery();
      document.getElementById('stat-photos').textContent = photoCount;
    };
    reader.readAsDataURL(file);
  });
  e.target.value = '';
}

function openLightbox(i) {
  const item = galleryItems[i];
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (item.img) { img.src = item.img; lb.classList.add('open'); }
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }

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

attachModalBackdropClose('member-modal', closeMemberModal);
attachModalBackdropClose('join-modal', closeJoinModal);
attachModalBackdropClose('profile-modal', closeProfileModal);
initWeb3Form('join-form', 'join-form-status', 'form-status');
initWeb3Form('membership-form', 'form-status', 'status');
initWeb3Form('payment-form', 'payment-form-status', 'status');

if (document.body.classList.contains('page-home')) {
  init();
}

if (document.body.classList.contains('page-payment')) {
  initPaymentPage();
}
