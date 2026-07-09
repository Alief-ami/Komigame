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
  { name: 'Budi Santoso',   role: 'Free Fire',         avatar: 'BS', av: 'av3', stars: 5, text: 'Top up diamond FF paling cepat! Baru bayar, langsung masuk dalam hitungan menit. Akun aman, tidak ada kendala sama sekali.' },
  { name: 'Dewi Lestari',   role: 'Roblox Player',     avatar: 'DL', av: 'av4', stars: 4, text: 'Robux langsung masuk setelah transfer. Proses konfirmasi cepat, penjual sangat responsif. Pasti balik lagi!' },
  { name: 'Rio Firmansyah', role: 'Roblox Player',     avatar: 'RF', av: 'av5', stars: 5, text: 'Robux paling murah se-Indonesia! Sudah coba beberapa toko, tapi Komigame yang paling worth it harganya.' },
  { name: 'Alicia Putri',   role: 'ML Player',         avatar: 'AP', av: 'av6', stars: 5, text: 'Beli diamond ML di sini sangat mudah. Metode pembayaran lengkap, dan sistem auto konfirmasi sangat membantu!' },
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
  { q: 'Berapa lama proses pengiriman item?', a: 'Proses biasanya memakan waktu sekitar 5–15 menit setelah pembayaran berhasil dikonfirmasi.' },
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
    needsRegion: true,
    serverLabel: 'Server',
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
    needsRegion: false,
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
    needsServer: true,
    needsRegion: false,
    serverLabel: 'Server',
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
    id: 'roblox',
    name: 'Roblox',
    emoji: '🧱',
    type: 'topup',
    gradient: 'linear-gradient(135deg,#1a0a00,#cc5500)',
    badge: 'New',
    currency: 'Robux',
    needsServer: false,
    needsRegion: false,
    items: [
      { id:'rb1', name:'80 Robux', price: 15000, bonus: '' },
      { id:'rb2', name:'400 Robux', price: 72000, bonus: '' },
      { id:'rb3', name:'800 Robux', price: 140000, bonus: '' },
      { id:'rb4', name:'1700 Robux', price: 285000, bonus: '+100 Bonus' },
      { id:'rb5', name:'4500 Robux', price: 725000, bonus: '+300 Bonus' },
      { id:'rb6', name:'10000 Robux', price: 1550000, bonus: 'Best Deal' },
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

  // Tampilkan/sembunyikan field Region Account (khusus game yang butuh, misal Mobile Legends)
  document.getElementById('txRegionGroup').style.display =
    selectedGame.needsRegion ? 'flex' : 'none';

  // Tampilkan/sembunyikan field Server (Mobile Legends & Free Fire)
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

/* ── Nomor WhatsApp admin/CS tujuan pesanan ── */
const ADMIN_WA_NUMBER = '6281268972181'; // format: kode negara tanpa "+" atau "0" di depan

/* ── Submit transaction ── */
function submitTransaction() {
  const region = document.getElementById('txRegion').value.trim();
  const userId = document.getElementById('txUserId').value.trim();
  const serverId = document.getElementById('txServerId').value.trim();
  const nickname = document.getElementById('txNickname').value.trim();
  const wa = document.getElementById('txWA').value.trim();
  const method = document.querySelector('input[name="payMethod"]:checked');

  if (selectedGame.needsRegion && !region) { alert('Masukkan Region Account terlebih dahulu!'); return; }
  if (!userId) { alert('Masukkan ID terlebih dahulu!'); return; }
  if (selectedGame.needsServer && !serverId) { alert('Masukkan Server terlebih dahulu!'); return; }
  if (!nickname) { alert('Masukkan Nickname Acc terlebih dahulu!'); return; }
  if (!wa) { alert('Masukkan nomor WhatsApp kamu!'); return; }
  if (!method) { alert('Pilih metode pembayaran!'); return; }

  const orderId = 'KG-' + Date.now().toString(36).toUpperCase();
  const total = 'Rp ' + selectedItem.price.toLocaleString('id-ID');

  // ── Susun template pesan WhatsApp sesuai detail pesanan yang mereka pilih ──
  let msg = `Halo Komigame, saya ingin melakukan pembayaran untuk pesanan berikut:\n\n`;
  msg += `📋 *Order ID:* ${orderId}\n`;
  msg += `🎮 *Game:* ${selectedGame.name}\n`;
  if (selectedGame.needsRegion) msg += `🌍 *Region Account:* ${region}\n`;
  msg += `🆔 *ID:* ${userId}\n`;
  if (selectedGame.needsServer) msg += `🌐 *Server:* ${serverId}\n`;
  msg += `👤 *Nickname Acc:* ${nickname}\n`;
  msg += `💎 *Nominal ${selectedGame.currency}:* ${selectedItem.name}\n`;
  if (selectedItem.bonus) msg += `🎁 *Bonus:* ${selectedItem.bonus}\n`;
  msg += `📱 *No. WhatsApp:* ${wa}\n`;
  msg += `💳 *Payment:* ${method.value}\n`;
  msg += `💰 *Total:* ${total}\n\n`;
  msg += `Mohon konfirmasi dan kirimkan instruksi pembayarannya. Terima kasih!`;

  const waLink = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  document.getElementById('successMsg').textContent =
    `${selectedGame.name} — ${selectedItem.name} akan segera dikirimkan ke akunmu.`;
  document.getElementById('successOrderId').textContent = `Order ID: ${orderId}`;

  goStep('success');

  // ── Langsung pindahkan pembeli ke WhatsApp dengan template pesan pesanan ──
  window.open(waLink, '_blank');
}

/* close on ESC */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCatalog();
});
