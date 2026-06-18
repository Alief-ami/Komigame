/* ── LOADER ─────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
    startCounters();
  }, 2000);
});

/* ── CURSOR ─────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
});

function lerpCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
  requestAnimationFrame(lerpCursor);
}
lerpCursor();

/* ── NAVBAR ─────────────────────────────────────── */
const navbar     = document.getElementById('navbar');
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navToggle.classList.toggle('active');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  navToggle.classList.remove('active');
}

/* ── PARTICLES ───────────────────────────────────── */
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('span');
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (8 + Math.random() * 12) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
  particleContainer.appendChild(p);
}

/* ── COUNTERS ────────────────────────────────────── */
function animateCount(el, target, suffix, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString('id-ID') + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

function startCounters() {
  animateCount(document.getElementById('cnt1'), 50000, '+', 1500);
  animateCount(document.getElementById('cnt2'), 10000, '+', 1500);
  animateCount(document.getElementById('cnt3'), 50, '+', 1200);
}

/* ── SCROLL REVEAL ───────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ── TESTIMONIALS ────────────────────────────────── */
const testimonials = [
  { name: 'Andi Pratama',   role: 'ML Player',        avatar: 'AP', av: 'av1', stars: 5, text: 'Top up diamond ML paling cepat! Baru bayar, langsung masuk dalam hitungan menit. Recommended banget buat semua gamer!' },
  { name: 'Siti Rahayu',    role: 'PUBG Mobile',       avatar: 'SR', av: 'av2', stars: 5, text: 'Harganya lebih murah dari toko lain, pelayanan CS juga sangat ramah. Sudah langganan di sini selama 2 tahun!' },
  { name: 'Budi Santoso',   role: 'Free Fire',         avatar: 'BS', av: 'av3', stars: 5, text: 'Joki rank-nya mantap! Push dari Gold ke Diamond dalam 3 hari. Akun aman, tidak kena banned sama sekali.' },
  { name: 'Dewi Lestari',   role: 'Genshin Impact',    avatar: 'DL', av: 'av4', stars: 4, text: 'Crystal langsung masuk setelah transfer. Proses konfirmasi cepat, penjual sangat responsif. Pasti balik lagi!' },
  { name: 'Rio Firmansyah', role: 'Valorant Player',   avatar: 'RF', av: 'av5', stars: 5, text: 'VP Valorant paling murah se-Indonesia! Sudah coba beberapa toko, tapi Komigame yang paling worth it harganya.' },
  { name: 'Alicia Putri',   role: 'Honkai: Star Rail', avatar: 'AP', av: 'av6', stars: 5, text: 'Beli Oneiric Shard di sini sangat mudah. Metode pembayaran lengkap, dan sistem auto konfirmasi sangat membantu!' },
  { name: 'Fajar Nugroho',  role: 'ML Diamond',        avatar: 'FN', av: 'av7', stars: 5, text: 'Promo bulanannya seru banget! Dapat bonus diamond extra. CS juga fast response banget kalau ada masalah.' },
  { name: 'Indah Permata',  role: 'FF Player',         avatar: 'IP', av: 'av8', stars: 4, text: 'Pelayanan ramah dan proses top up sangat singkat. Media sosial Komigame aktif dan sering ada giveaway seru!' },
];

const track = document.getElementById('testiTrack');
const doubled = [...testimonials, ...testimonials];
doubled.forEach(t => {
  const card = document.createElement('div');
  card.className = 'testi-card';
  card.innerHTML = `
    <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
    <p class="testi-text">"${t.text}"</p>
    <div class="testi-author">
      <div class="testi-avatar ${t.av}">${t.avatar}</div>
      <div>
        <div class="testi-name">${t.name}</div>
        <div class="testi-role">${t.role}</div>
      </div>
    </div>`;
  track.appendChild(card);
});

/* ── FAQ ─────────────────────────────────────────── */
const faqs = [
  { q: 'Apakah transaksi di Komigame aman?', a: 'Ya, semua transaksi dilakukan menggunakan metode terpercaya dan item berasal dari sumber resmi sehingga akun kamu tetap aman dari risiko banned.' },
  { q: 'Berapa lama proses pengiriman item atau jasa joki?', a: 'Proses biasanya memakan waktu sekitar 5–15 menit setelah pembayaran berhasil dikonfirmasi. Untuk jasa joki, estimasi sesuai target rank.' },
  { q: 'Bagaimana jika terjadi kendala saat transaksi?', a: 'Customer Service Komigame siap membantu 24 jam melalui WhatsApp atau media sosial resmi untuk menyelesaikan kendala pelanggan.' },
  { q: 'Apakah ada garansi refund?', a: 'Ya, kami memberikan jaminan refund penuh jika item tidak terkirim dalam 24 jam atau terjadi kesalahan dari pihak kami. Proses refund cepat dan mudah.' },
  { q: 'Metode pembayaran apa saja yang diterima?', a: 'Kami menerima QRIS, GoPay, DANA, ShopeePay, OVO, dan transfer bank. Semua metode pembayaran sudah terverifikasi dan aman.' },
  { q: 'Apakah bisa top up untuk akun orang lain?', a: 'Tentu! Kamu cukup memasukkan User ID atau informasi akun yang ingin di-top up. Tidak perlu login ke akun tersebut.' },
];

const faqList = document.getElementById('faqList');
faqs.forEach(f => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <div class="faq-q" onclick="toggleFAQ(this)">
      ${f.q}
      <span class="faq-chevron">▼</span>
    </div>
    <div class="faq-a">${f.a}</div>`;
  faqList.appendChild(item);
});

function toggleFAQ(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── CONTACT FORM ────────────────────────────────── */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '⏳ Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '📩 Kirim Pesan';
    btn.disabled = false;
    e.target.reset();
    const success = document.getElementById('formSuccess');
    success.style.display = 'block';
    setTimeout(() => { success.style.display = 'none'; }, 5000);
  }, 1800);
}

/* ═══════════════════════════════════════════════════
   GAME CATALOG & TRANSACTION SYSTEM
═══════════════════════════════════════════════════ */

const GAMES = [
  {
    id: 'ml',
    name: 'Mobile Legends',
    emoji: '⚔️',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#1a0533,#6b1aa0)',
    badge: 'Populer',
    currency: 'Diamond',
    needsServer: true,
    serverLabel: 'Zone ID',
    items: [
      { id:'ml1', name:'86 Diamond', price: 20000, bonus: '' },
      { id:'ml2', name:'172 Diamond', price: 38000, bonus: '+5 Bonus' },
      { id:'ml3', name:'257 Diamond', price: 55000, bonus: '' },
      { id:'ml4', name:'344 Diamond', price: 73000, bonus: '+8 Bonus' },
      { id:'ml5', name:'514 Diamond', price: 109000, bonus: '+12 Bonus' },
      { id:'ml6', name:'706 Diamond', price: 148000, bonus: '' },
      { id:'ml7', name:'878 Diamond', price: 183000, bonus: '+20 Bonus' },
      { id:'ml8', name:'2195 Diamond', price: 449000, bonus: 'Best Value' },
    ]
  },
  {
    id: 'pubg',
    name: 'PUBG Mobile',
    emoji: '🔫',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#001833,#0062cc)',
    badge: 'Hot',
    currency: 'UC',
    needsServer: false,
    items: [
      { id:'pubg1', name:'60 UC', price: 15000, bonus: '' },
      { id:'pubg2', name:'180 UC', price: 42000, bonus: '' },
      { id:'pubg3', name:'325 UC', price: 75000, bonus: '' },
      { id:'pubg4', name:'660 UC', price: 149000, bonus: '+60 Bonus' },
      { id:'pubg5', name:'1800 UC', price: 399000, bonus: '+180 Bonus' },
      { id:'pubg6', name:'3850 UC', price: 830000, bonus: 'Best Deal' },
    ]
  },
  {
    id: 'ff',
    name: 'Free Fire',
    emoji: '🔥',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#1a1200,#b38000)',
    badge: '',
    currency: 'Diamond',
    needsServer: false,
    items: [
      { id:'ff1', name:'70 Diamond', price: 14000, bonus: '' },
      { id:'ff2', name:'140 Diamond', price: 27000, bonus: '' },
      { id:'ff3', name:'355 Diamond', price: 67000, bonus: '' },
      { id:'ff4', name:'720 Diamond', price: 134000, bonus: '+20 Bonus' },
      { id:'ff5', name:'1450 Diamond', price: 265000, bonus: '+50 Bonus' },
      { id:'ff6', name:'2180 Diamond', price: 399000, bonus: 'Best Value' },
    ]
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    emoji: '🌙',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#001a0c,#006b3c)',
    badge: '',
    currency: 'Genesis Crystal',
    needsServer: false,
    items: [
      { id:'gs1', name:'60 Crystal', price: 15000, bonus: '' },
      { id:'gs2', name:'300+30 Crystal', price: 74000, bonus: '+30 Bonus' },
      { id:'gs3', name:'980+110 Crystal', price: 240000, bonus: '+110 Bonus' },
      { id:'gs4', name:'1980+260 Crystal', price: 475000, bonus: '+260 Bonus' },
      { id:'gs5', name:'3280+600 Crystal', price: 790000, bonus: '+600 Bonus' },
      { id:'gs6', name:'6480+1600 Crystal', price: 1550000, bonus: 'Best Deal' },
    ]
  },
  {
    id: 'valorant',
    name: 'Valorant',
    emoji: '💎',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#1a0000,#cc1a00)',
    badge: '',
    currency: 'Valorant Point',
    needsServer: false,
    items: [
      { id:'vp1', name:'475 VP', price: 55000, bonus: '' },
      { id:'vp2', name:'1000 VP', price: 109000, bonus: '' },
      { id:'vp3', name:'2050 VP', price: 220000, bonus: '' },
      { id:'vp4', name:'3650 VP', price: 385000, bonus: '' },
      { id:'vp5', name:'5350 VP', price: 555000, bonus: '' },
      { id:'vp6', name:'11000 VP', price: 1099000, bonus: 'Best Deal' },
    ]
  },
  {
    id: 'honkai',
    name: 'Honkai: Star Rail',
    emoji: '⭐',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#00101a,#005c8a)',
    badge: '',
    currency: 'Oneiric Shard',
    needsServer: false,
    items: [
      { id:'hs1', name:'60 Shard', price: 15000, bonus: '' },
      { id:'hs2', name:'300+30 Shard', price: 74000, bonus: '+30 Bonus' },
      { id:'hs3', name:'980+110 Shard', price: 240000, bonus: '' },
      { id:'hs4', name:'1980+260 Shard', price: 475000, bonus: '' },
      { id:'hs5', name:'3280+600 Shard', price: 790000, bonus: 'Best Value' },
    ]
  },
  {
    id: 'joki-ml',
    name: 'Joki ML',
    emoji: '🏆',
    type: 'joki',
    gradient: 'linear-gradient(135deg,#0d1a00,#3a6600)',
    badge: 'Joki',
    currency: 'Rank',
    needsServer: false,
    items: [
      { id:'jml1', name:'Warrior → Elite', price: 45000, bonus: '' },
      { id:'jml2', name:'Elite → Master', price: 65000, bonus: '' },
      { id:'jml3', name:'Master → Grandmaster', price: 85000, bonus: '' },
      { id:'jml4', name:'Grandmaster → Epic', price: 120000, bonus: '' },
      { id:'jml5', name:'Epic → Legend', price: 180000, bonus: '' },
      { id:'jml6', name:'Legend → Mythic', price: 350000, bonus: 'Terlaris' },
    ]
  },
  {
    id: 'joki-pubg',
    name: 'Joki PUBG',
    emoji: '🎯',
    type: 'joki',
    gradient: 'linear-gradient(135deg,#001a2e,#005799)',
    badge: 'Joki',
    currency: 'Tier',
    needsServer: false,
    items: [
      { id:'jp1', name:'Bronze → Silver', price: 55000, bonus: '' },
      { id:'jp2', name:'Silver → Gold', price: 80000, bonus: '' },
      { id:'jp3', name:'Gold → Platinum', price: 110000, bonus: '' },
      { id:'jp4', name:'Platinum → Diamond', price: 160000, bonus: '' },
      { id:'jp5', name:'Diamond → Crown', price: 250000, bonus: '' },
      { id:'jp6', name:'Crown → Ace', price: 450000, bonus: 'Premium' },
    ]
  },
];

let selectedGame = null;
let selectedItem = null;
let currentFilter = 'all';

/* ── Open / Close ── */
function openCatalog() {
  document.getElementById('catalogOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  goStep('games');
}

function closeCatalog() {
  document.getElementById('catalogOverlay').classList.remove('open');
  document.body.style.overflow = '';
  selectedGame = null;
  selectedItem = null;
}

function closeCatalogIfOverlay(e) {
  if (e.target === document.getElementById('catalogOverlay')) closeCatalog();
}

/* ── Step navigation ── */
function goStep(step) {
  document.querySelectorAll('.modal-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + step).classList.add('active');
  if (step === 'games') renderGames(currentFilter);
  if (step === 'items') renderItems();
}

/* ── Render game cards ── */
function renderGames(filter) {
  currentFilter = filter;
  const grid = document.getElementById('gamesGrid');
  const list = filter === 'all' ? GAMES : GAMES.filter(g => g.type === filter);
  grid.innerHTML = list.map(g => `
    <div class="game-modal-card" onclick="selectGame('${g.id}')">
      <div class="gmc-thumb" style="background:${g.gradient}">
        <span class="gmc-emoji">${g.emoji}</span>
        ${g.badge ? `<span class="gmc-badge">${g.badge}</span>` : ''}
      </div>
      <div class="gmc-info">
        <div class="gmc-name">${g.name}</div>
        <div class="gmc-type">${g.type === 'joki' ? '🏅 Joki Rank' : '💰 Top Up'}</div>
      </div>
    </div>
  `).join('');
}

function filterCat(cat, btn) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderGames(cat);
}

/* ── Select game → go to items ── */
function selectGame(id) {
  selectedGame = GAMES.find(g => g.id === id);
  document.getElementById('itemStepTitle').textContent = selectedGame.name;
  document.getElementById('itemStepSub').textContent =
    `Pilih paket ${selectedGame.currency} yang kamu inginkan`;
  goStep('items');
}

/* ── Render item packages ── */
function renderItems() {
  if (!selectedGame) return;
  document.getElementById('itemsGrid').innerHTML = selectedGame.items.map(item => `
    <div class="item-card" onclick="selectItem('${item.id}')">
      <div class="item-name">${item.name}</div>
      ${item.bonus ? `<div class="item-bonus">🎁 ${item.bonus}</div>` : ''}
      <div class="item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
    </div>
  `).join('');
}

/* ── Select item → go to transaction ── */
function selectItem(itemId) {
  selectedItem = selectedGame.items.find(i => i.id === itemId);
  renderOrderSummary();

  // Show/hide server field based on game
  document.getElementById('txServerGroup').style.display =
    selectedGame.needsServer ? 'flex' : 'none';

  goStep('transaction');
}

function renderOrderSummary() {
  const total = selectedItem.price;
  document.getElementById('orderSummary').innerHTML = `
    <div class="os-row">
      <span class="os-label">Game</span>
      <span class="os-value">${selectedGame.name}</span>
    </div>
    <div class="os-row">
      <span class="os-label">Item</span>
      <span class="os-value">${selectedItem.name}</span>
    </div>
    ${selectedItem.bonus ? `
    <div class="os-row">
      <span class="os-label">Bonus</span>
      <span class="os-value bonus-txt">🎁 ${selectedItem.bonus}</span>
    </div>` : ''}
    <div class="os-row os-total">
      <span class="os-label">Total</span>
      <span class="os-value">Rp ${total.toLocaleString('id-ID')}</span>
    </div>
  `;
}

/* ── Submit transaction ── */
function submitTransaction() {
  const userId = document.getElementById('txUserId').value.trim();
  const wa = document.getElementById('txWA').value.trim();
  const method = document.querySelector('input[name="payMethod"]:checked');

  if (!userId) { alert('Masukkan User ID terlebih dahulu!'); return; }
  if (!wa) { alert('Masukkan nomor WhatsApp kamu!'); return; }
  if (!method) { alert('Pilih metode pembayaran!'); return; }

  const orderId = 'KG-' + Date.now().toString(36).toUpperCase();

  document.getElementById('successMsg').textContent =
    `${selectedGame.name} — ${selectedItem.name} akan segera dikirimkan ke akunmu.`;
  document.getElementById('successOrderId').textContent = `Order ID: ${orderId}`;

  goStep('success');
}

/* close on ESC */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCatalog();
});
