document.querySelector('.nav-toggle')
  .addEventListener('click', (e) => {
    const btn = e.target;
    const nav = document.querySelector('.nav');

    btn.classList.toggle("nav-toggle--close");
    nav.classList.toggle("nav--active");
  })