'use strict';

// Page navigation
document.querySelector('.header__menu').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('header__menu--btn')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const acc = document.getElementsByClassName('accordion');

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   });
// }

// accordion component
// const section = document.querySelector('.section_2');
// const accordion = document.querySelectorAll('.accordion');
// const accordionContent = document.querySelectorAll('.panel');

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
