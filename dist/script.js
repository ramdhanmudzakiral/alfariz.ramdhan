//navbar fixed

window.onscroll = function() {
     const header = document.querySelector('header');
     const fixedNav = header.offsetTop;

     if(window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
     }else {
          header.classList.remove('navbar-fixed');
     }
};
//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
     hamburger.classList.toggle('hamburger-active');
     navMenu.classList.toggle('hidden');
     
    
});


// js footer 
  // Set tahun sekarang secara otomatis
  document.getElementById("year").textContent = new Date().getFullYear();

  // Theme toggle (light/dark)
  const toggleBtn = document.getElementById("themeToggle");
  let darkMode = true;

  toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("bg-white", !darkMode);
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("text-black", !darkMode);
    document.body.classList.toggle("text-white", darkMode);

    toggleBtn.textContent = darkMode ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

