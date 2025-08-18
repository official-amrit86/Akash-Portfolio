
  tailwind.config = {
    darkMode: 'class',
  }
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark'); // toggle <html>
  });