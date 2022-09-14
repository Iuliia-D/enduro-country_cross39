'use strict';

// Page navigation header
document.querySelector('.header__menu').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('header__menu--btn')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// Page navigation footer
document.querySelector('.footer__menu').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('footer__menu--btn')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// accordion component
document.querySelectorAll('.accordion').forEach(a =>
  a.addEventListener('click', function (e) {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
);

// Menu fade animation
const menu = document.querySelector('.header__menu');

const handlerHoverMenu = function (e) {
  if (e.target.classList.contains('header__menu--btn')) {
    const link = e.target;
    const siblings = link
      .closest('.header__menu')
      .querySelectorAll('.header__menu--btn');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
menu.addEventListener('mouseover', handlerHoverMenu.bind(0.5));
menu.addEventListener('mouseout', handlerHoverMenu.bind(1));

// Social fade animation
const social = document.querySelector('.section1__Social');

const handlerHoverSocial = function (e) {
  if (e.target.classList.contains('section1__Social--btn')) {
    const link = e.target;

    const siblings = link
      .closest('.section1__Social')
      .querySelectorAll('.section1__Social--btn');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
social.addEventListener('mouseover', handlerHoverSocial.bind(0.5));
social.addEventListener('mouseout', handlerHoverSocial.bind(1));

// // Sticy navigation
// const section2 = document.querySelector('.section_2');
// const initialCoords = section2.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   //console.log(this.window.scrollY);

//   if (window.scrollY > initialCoords.top) menu.classList.add('sticky');
//   else menu.classList.remove('sticky');
// });

// Sticy navigation: Intersection Observer API
// const main = document.querySelector('.main');
// const menuHeight = menu.getBoundingClientRect().height;
// console.log(menuHeight);

// const stickyMenu = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) menu.classList.add('sticky');
//   else menu.classList.remove('sticky');
// };

// const mainObserver = new IntersectionObserver(stickyMenu, {
//   root: null,
//   theshold: 0,
//   rootMargin: `-${menuHeight}px`,
// });

// mainObserver.observe(main);
