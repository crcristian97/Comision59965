const toggleButton = document.getElementById('toggleButton');
    // Función para aplicar el tema
function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.body.classList.toggle('light-mode', theme === 'light');
  toggleButton.textContent = theme === 'dark' ? '🌞' : '🌙';
}
    // Verifica el tema en localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Cambia el tema al hacer clic
toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});