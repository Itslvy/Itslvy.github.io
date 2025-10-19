// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('active');
});

// Settings button (contoh animasi klik)
document.getElementById('settingsBtn').addEventListener('click', () => {
  alert("Pengaturan belum tersedia. 😅");
});
