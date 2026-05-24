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
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ── THEME TOGGLE ────────────────────────────────── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  const icon = isDark ? '☀️' : '🌙';
  document.getElementById('themeBtn').textContent = icon;
  document.getElementById('themeBtnMobile').textContent = icon;
}

document.getElementById('themeBtn').addEventListener('click', toggleTheme);
document.getElementById('themeBtnMobile').addEventListener('click', toggleTheme);

if (window.innerWidth <= 768) {
  document.getElementById('themeBtnMobile').style.display = 'block';
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
  animateCount(document.getElementById('cnt3'), 50,    '+', 1200);
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
  { name: 'Andi Pratama',   role: 'ML Player',          avatar: 'AP', av: 'av1', stars: 5, text: 'Top up diamond ML paling cepat! Baru bayar, langsung masuk dalam hitungan menit. Recommended banget buat semua gamer!' },
  { name: 'Siti Rahayu',    role: 'PUBG Mobile',         avatar: 'SR', av: 'av2', stars: 5, text: 'Harganya lebih murah dari toko lain, pelayanan CS juga sangat ramah. Sudah langganan di sini selama 2 tahun!' },
  { name: 'Budi Santoso',   role: 'Free Fire',           avatar: 'BS', av: 'av3', stars: 5, text: 'Joki rank-nya mantap! Push dari Gold ke Diamond dalam 3 hari. Akun aman, tidak kena banned sama sekali.' },
  { name: 'Dewi Lestari',   role: 'Genshin Impact',      avatar: 'DL', av: 'av4', stars: 4, text: 'Crystal langsung masuk setelah transfer. Proses konfirmasi cepat, penjual sangat responsif. Pasti balik lagi!' },
  { name: 'Rio Firmansyah', role: 'Valorant Player',     avatar: 'RF', av: 'av5', stars: 5, text: 'VP Valorant paling murah se-Indonesia! Sudah coba beberapa toko, tapi Komigame yang paling worth it harganya.' },
  { name: 'Alicia Putri',   role: 'Honkai: Star Rail',   avatar: 'AP', av: 'av6', stars: 5, text: 'Beli Oneiric Shard di sini sangat mudah. Metode pembayaran lengkap, dan sistem auto konfirmasi sangat membantu!' },
  { name: 'Fajar Nugroho',  role: 'ML Diamond',          avatar: 'FN', av: 'av7', stars: 5, text: 'Promo bulanannya seru banget! Dapat bonus diamond extra. CS juga fast response banget kalau ada masalah.' },
  { name: 'Indah Permata',  role: 'FF Player',           avatar: 'IP', av: 'av8', stars: 4, text: 'Pelayanan ramah dan proses top up sangat singkat. Media sosial Komigame aktif dan sering ada giveaway seru!' },
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
  { q: 'Apakah transaksi di Komigame aman?',              a: 'Ya, semua transaksi dilakukan menggunakan metode terpercaya dan item berasal dari sumber resmi sehingga akun kamu tetap aman dari risiko banned.' },
  { q: 'Berapa lama proses pengiriman item atau jasa joki?', a: 'Proses biasanya memakan waktu sekitar 5–15 menit setelah pembayaran berhasil dikonfirmasi. Untuk jasa joki, estimasi sesuai target rank.' },
  { q: 'Bagaimana jika terjadi kendala saat transaksi?',   a: 'Customer Service Komigame siap membantu 24 jam melalui WhatsApp atau media sosial resmi untuk menyelesaikan kendala pelanggan.' },
  { q: 'Apakah ada garansi refund?',                       a: 'Ya, kami memberikan jaminan refund penuh jika item tidak terkirim dalam 24 jam atau terjadi kesalahan dari pihak kami. Proses refund cepat dan mudah.' },
  { q: 'Metode pembayaran apa saja yang diterima?',        a: 'Kami menerima QRIS, GoPay, DANA, ShopeePay, OVO, dan transfer bank. Semua metode pembayaran sudah terverifikasi dan aman.' },
  { q: 'Apakah bisa top up untuk akun orang lain?',        a: 'Tentu! Kamu cukup memasukkan User ID atau informasi akun yang ingin di-top up. Tidak perlu login ke akun tersebut.' },
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