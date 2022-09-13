'use strict';

// Page navigation
document.querySelector('.header__menu').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('header__menu--btn')) {
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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// const accordion = document.querySelectorAll('.accordion');
// const panel = document.querySelectorAll('.panel');

// accordion.forEach(
//   a =>
//     (a.addEventListener('click', function (e) {
//       let stClasses = !this.classList.contains('active');
//       setClass(accordion, 'active', 'remove');
//       setClass(panel, 'show', 'remove');

//       if (setClasses) {
//         this.classList.toggle('active');
//         this.nextElementSibling.classList.toggle('show');
//       }

//       function setClass(els, className, fnName) {
//         els.forEach(e => e.classList[fnName](className));
//       }
//     })
// );

// accordion.forEach(a =>
//   a.addEventListener('click', function (e) {
//     console.log('TAB');
//     const cliked = e.target.closest('.accordion');
//     document
//       .querySelector(`.info__card_more_${cliked.dataset.tab}`)
//       .classList.toggle('panel--active');
//     console.log(cliked.dataset.tab);
//     // accordionContent.toggle('panel--active');
//   })
// );

// section.addEventListener('click', function (e) {
//   const cliked = e.target.closest('.accordion');
//   console.log(cliked);

//   if (!cliked) return;

//   accordionContent.forEach(c => c.classList.remove('.panel--active'));
//   console.log(cliked.dataset.tab);
//   document
//     .querySelector(`.info__card_more_${cliked.dataset.tab}`)
//     .classList.add('.panel--active');
// });
