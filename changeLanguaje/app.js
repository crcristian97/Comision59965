const translations = {
  es: {
    title: 'Bienvenido',
    description: 'Este es un sitio web multilingüe.',
  },
  en: {
    title: 'Welcome',
    description: 'This is a multilingual website.',
  },
  pt: {
    title: 'Bem-vindo',
    description: 'Este é um site multilíngue.',
  }
};

const title = document.getElementById('title');
const description = document.getElementById('description');
const esBtn = document.getElementById('esBtn');
const enBtn = document.getElementById('enBtn');
const ptBtn = document.getElementById('ptBtn');

// Función para aplicar el idioma
function applyLanguage(language) {
  debugger
  title.textContent = translations[language].title;
  description.textContent = translations[language].description;
  localStorage.setItem('language', language); // Guardar idioma seleccionado
}

// Verifica si hay un idioma guardado en localStorage
const savedLanguage = localStorage.getItem('language') || 'es';
applyLanguage(savedLanguage);

// Asigna eventos a los botones
esBtn.addEventListener('click', () => applyLanguage('es'));
enBtn.addEventListener('click', () => applyLanguage('en'));
ptBtn.addEventListener('click', () => applyLanguage('pt'));