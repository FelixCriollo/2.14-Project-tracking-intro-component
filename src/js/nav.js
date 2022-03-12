document.querySelector('.nav-toggle')
  .addEventListener('click', (e) => {
    const btn = e.target;
    const nav = document.querySelector('.nav');

    btn.classList.toggle("nav-toggle--close");
    nav.classList.toggle("nav--active");
  })

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    document.querySelector('.nav-toggle')
      .classList.remove('nav-toggle--close');
    document.querySelector('.nav')
      .classList.remove('nav--active');
  }
})