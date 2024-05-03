document.addEventListener('DOMContentLoaded', function () {
    const btnLight = document.querySelector('.themebtn');
    const mot1 = document.querySelector('.motivacao1');
    const mot2 = document.querySelector('.motivacao2');
    const frase1 = '"Talent is something you do to flourish, instinct is something you refine, so if you\'re going to hit, hit until you break!"';
    const frase2 = '"The last survivors are the winners. Only the strongest. If you want to be one of them, stay strong."';
    const aut1 = "-Oikawa Tooru";
    const aut2 = "-Tobio Kageyama";
    const sukunaDark = './img/Sukuna.jpg';
    const sukunaLight = './img/itadori.jpg';
    const existenteimg = document.querySelector('.sukuna');
    const moon = './img/moon.svg';
    const sun = './img/sun.svg';
    


    if (!localStorage.getItem('themeSystem')) {
        localStorage.setItem('themeSystem', 'dark');
    }

    const lightSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-brightness-high' viewBox='0 0 16 16'></svg>";
    const darkSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'></svg>";

    
    
    function defineTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            btnLight.innerHTML = lightSvg;
            mot1.innerHTML = frase2;
            mot2.innerHTML = aut2;
            existenteimg.src = sukunaDark;
            btnLight.style.backgroundImage = `url(${sun})`
            localStorage.setItem('themeSystem', 'dark');
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            btnLight.innerHTML = darkSvg;
            mot1.innerHTML = frase1;
            mot2.innerHTML = aut1;
            existenteimg.src = sukunaLight;
            btnLight.style.backgroundImage = `url(${moon})`
            
            localStorage.setItem('themeSystem', 'light');
        }
    }

    defineTheme(localStorage.getItem('themeSystem'));

    btnLight.addEventListener('click', function () {
        const currentTheme = localStorage.getItem('themeSystem');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        defineTheme(newTheme);
    });
});

function toggleButtonImage(newImageURL) {
    btnLight.style.backgroundImage = `url(${moon})`;
  }
  
  // Initial state (set to light image by default)
  toggleButtonImage(sun);
  
  // Add event listener to toggle image on click
  btnLight.addEventListener('click', function() {
    const sun = btnLight.style.backgroundImage.replace(/url\(([^)]+)\)/, '$1'); // Extract current image URL
    const moon = currentImageURL === moon ? sun : moon;
    toggleButtonImage(moon);
  });