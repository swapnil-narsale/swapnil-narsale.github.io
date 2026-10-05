const themeButton = document.querySelector('#theme-toggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.textContent = dark ? 'Light mode' : 'Dark mode';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.setAttribute('aria-pressed', String(dark));
}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
  updateThemeButton();
});
updateThemeButton();
document.querySelector('#year').textContent = new Date().getFullYear();

// Keep section headings clear of the navigation at every screen size.
const siteHeader = document.querySelector('.site-header');
function updateHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', Math.ceil(siteHeader.getBoundingClientRect().height + 16) + 'px');
}
updateHeaderHeight();
if ('ResizeObserver' in window) {
  new ResizeObserver(updateHeaderHeight).observe(siteHeader);
} else {
  window.addEventListener('resize', updateHeaderHeight);
}
