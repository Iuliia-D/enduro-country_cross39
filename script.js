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
// const section = document.querySelector('.section_2');
// const accordion = document.querySelectorAll('.accordion');
// const accordionContent = document.querySelectorAll('.panel');

// document.querySelectorAll('.accordion').forEach(a =>
//   a.addEventListener('click', function (e) {
//     this.classList.toggle('active');
//     let panel = this.nextElementSibling;

//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   })
// );

///////////////////////////////////////
// Modal window
// const mod = document.querySelector('.mod');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelectorAll('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   mod.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   mod.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// // for (let i = 0; i < btnsOpenModal.length; i++)
// //   btnsOpenModal[i].addEventListener('click', openModal);

// //btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !mod.classList.contains('hidden')) {
//     closeModal();
//   }
// });

//const modSection = document.querySelector('.section_2');
const mod = document.querySelectorAll('.mod');
const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');

const acc = document.querySelectorAll('.accordion');

(function Modal() {
  const backdrop = document.querySelector('#modal-backdrop');
  document.addEventListener('click', modalHandler);

  function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.btn--show-modal');
    if (modalBtnOpen) {
      //open btn click
      const modalSelector = modalBtnOpen.dataset.modal;
      showModal(document.querySelector(modalSelector));
    }
    const modalBtnClose = evt.target.closest('.btn--close-modal');
    if (modalBtnClose) {
      //close btn click
      evt.preventDefault();
      hideModal(modalBtnClose.closest('.mod'));
    }
    if (evt.target.matches('#modal-backdrop')) {
      //backdrop click
      hideModal(document.querySelector('.mod.show'));
    }
  }
  function showModal(modalElem) {
    modalElem.classList.add('show');
    backdrop.classList.remove('hiden');
  }
  function hideModal(modalElem) {
    modalElem.classList.remove('.show');
    backdrop.classList.add('hiden');
  }
})();

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
