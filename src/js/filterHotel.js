export const formEl = document.querySelector('.top-section__form-search');

export const filterEl = document.querySelector('.filter__elements');

export const btnEl = document.querySelectorAll('.counter__btn');

export const showFilter = (event) => {
  const el = event.target.closest('.form__param');
  if (el) {
    document.querySelector('.filter-block').style.display = 'block';
  }
  if (!el) {
    document.querySelector('.filter-block').style.display = 'none';
  }
};

export const inputEl = document.querySelector('.input--param');

let adults = 0;
let children = 0;
let rooms = 0;
// export const counterAdults = (event) => {
//   // const el = event.target.closest('.counter__btn');
//   // if (!el) {
//   //   return;
//   // }
//   // el.classList.toggle('counter__btn--active');
//
//   const elPlus = event.target.closest('.counter__btn--plus');
//   const elMinus = event.target.closest('.counter__btn--minus');
//
//   if (elPlus) {
//     if (adults < 30) {
//       adults++;
//     }
//     p.innerHTML = adults;
//   }
//   if (elMinus) {
//     adults--;
//     p.innerHTML = adults;
//   }
//
//   inputEl.value = `${adults} Adults − ${children} Children − ${room} Room`;
//
//   event.preventDefault();
// };

const btnMinus = document.querySelector('[data-count="adults-minus"]');
const btnPlus = document.querySelector('[data-count="adults-plus"]');

btnEl.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.dataset.count === 'adults-minus' && adults > 0) {

      // АКТИВНЫЕ И НЕАКТИВНЫЕ ИНДИКАТОРЫ верно сделаны???
      if (adults > 1) {
        btnMinus.classList.add('counter__btn--active');
        btnPlus.classList.add('counter__btn--active');
      } else {
        btnPlus.classList.add('counter__btn--active');
        btnMinus.classList.remove('counter__btn--active');
      }

      adults--;
      document.querySelector('[data-name="adults"]').innerHTML = adults;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }
    if (event.target.dataset.count === 'adults-plus' && adults < 30) {
      if (adults >= 29) {
        btnPlus.classList.remove('counter__btn--active');
      } else {
        btnPlus.classList.add('counter__btn--active');
        btnMinus.classList.add('counter__btn--active');
      }

      adults++;
      document.querySelector('[data-name="adults"]').innerHTML = adults;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }
    if (event.target.dataset.count === 'children-minus' && children > 0) {
      children--;
      document.querySelector('[data-name="children"]').innerHTML = children;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }
    if (event.target.dataset.count === 'children-plus' && children < 10) {
      children++;
      document.querySelector('[data-name="children"]').innerHTML = children;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }
    if (event.target.dataset.count === 'rooms-minus' && rooms > 0) {
      rooms--;
      document.querySelector('[data-name="rooms"]').innerHTML = rooms;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }
    if (event.target.dataset.count === 'rooms-plus' && rooms < 30) {
      rooms++;
      document.querySelector('[data-name="rooms"]').innerHTML = rooms;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }

    event.preventDefault(); // Чтобы не выкидывало ошибку после того, как COUNT выходит за пределы чисел
    // Но клики срабатывают всё равно
  });
});
