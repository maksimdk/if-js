// export const formEl = document.querySelector('.top-section__form-search');
// export const filterEl = document.querySelector('.filter__elements');
export const btnEl = document.querySelectorAll('.counter__btn');

export const inputEl = document.querySelector('.input--param');

const btnMinus = document.querySelector('[data-count="adults-minus"]');
const btnPlus = document.querySelector('[data-count="adults-plus"]');

export const showFilter = (event) => {
  const filterEl = document.querySelector('.filter-block');
  const el = event.target.closest('.form__param');
  if (el) {
    filterEl.style.display = 'block';
    return;
  }
  filterEl.style.display = 'none';
};

let adults = 0;
let children = 0;
let rooms = 0;

const filterSelect = document.querySelector('.filter__select');
const addChildrenSelect = () => {
  const cloneSelect = document.querySelector('.select__test').cloneNode(true);
  filterSelect.append(cloneSelect);
};

const removeChildrenSelect = () => {
  const cloneSelect = document.querySelectorAll('.select__test');
  cloneSelect[cloneSelect.length - 1].remove();
};

btnEl.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.dataset.count === 'adults-minus' && adults > 0) {
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
      if (children > 0) {
        removeChildrenSelect();
      } else {
        console.log('LOL');
      }

      children--;
      document.querySelector('[data-name="children"]').innerHTML = children;
      inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
    }
    if (event.target.dataset.count === 'children-plus' && children < 10) {
      if (children > 0) {
        addChildrenSelect();
      }

      if (children === 0) {
        document.querySelector('.filter__select').style.display = 'none';
      } else {
        document.querySelector('.filter__select').style.display = 'flex';
      }

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
  });
});
