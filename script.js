// Save user's theme preference
function savePreference(theme) {
    localStorage.setItem('preferredTheme', theme);
    document.body.className = theme;
  }
  
  // Load preference from localStorage
  function loadPreference() {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
      document.body.className = savedTheme;
    } else {
      document.body.className = 'light'; // default
    }
  }
  
  // Handle theme toggle button click
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.onclick = () => {
    const newTheme = document.body.className === 'dark' ? 'light' : 'dark';
    savePreference(newTheme);
  };
  
  // Bounce animation on click
  const magicBtn = document.getElementById('magicBtn');
  magicBtn.onclick = () => {
    magicBtn.textContent = '🎉 Magic Activated!';
    magicBtn.classList.add('bounce');
  
    setTimeout(() => {
      magicBtn.classList.remove('bounce');
      magicBtn.textContent = 'Click Me!';
    }, 500);
  };
  
  // Load saved theme on page load
  window.onload = loadPreference;
  