export const btnEl = document.querySelectorAll('.counter__btn');

export const inputEl = document.querySelector('.input--param');

const btnMinusAdults = document.querySelector('[data-count="adults-minus"]');
const btnPlusAdults = document.querySelector('[data-count="adults-plus"]');
const btnMinusChildren = document.querySelector(
  '[data-count="children-minus"]',
);
const btnPlusChildren = document.querySelector('[data-count="children-plus"]');
const btnMinusRooms = document.querySelector('[data-count="rooms-minus"]');
const btnPlusRooms = document.querySelector('[data-count="rooms-plus"]');

const filterSelect = document.querySelector('.filter__select');

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

const addChildrenSelect = () => {
  const selectEl = document.createElement('select');
  selectEl.classList.add('select__options');
  const optionEl = document.createElement('option');
  optionEl.textContent = `Your answer`;
  optionEl.setAttribute('selected', null);
  optionEl.setAttribute('disabled', 'disabled');
  selectEl.append(optionEl);

  for (let i = 0; i <= 17; i++) {
    const optionEl = document.createElement('option');
    optionEl.textContent = `${i} years old`;
    optionEl.setAttribute('value', `${i} years`);
    selectEl.append(optionEl);
  }
  return selectEl;
};

const countFunc = (event) => {
  if (event.target.dataset.count === 'adults-minus' && adults > 0) {
    if (adults > 1) {
      btnMinusAdults.classList.add('counter__btn--active');
      btnPlusAdults.classList.add('counter__btn--active');
    } else {
      btnPlusAdults.classList.add('counter__btn--active');
      btnMinusAdults.classList.remove('counter__btn--active');
    }

    adults--;
    document.querySelector('[data-name="adults"]').innerHTML = adults;
  }
  if (event.target.dataset.count === 'adults-plus' && adults < 30) {
    if (adults >= 29) {
      btnPlusAdults.classList.remove('counter__btn--active');
    } else {
      btnPlusAdults.classList.add('counter__btn--active');
      btnMinusAdults.classList.add('counter__btn--active');
    }

    adults++;
    document.querySelector('[data-name="adults"]').innerHTML = adults;
  }
  if (event.target.dataset.count === 'children-minus' && children > 0) {
    if (children > 1) {
      btnMinusChildren.classList.add('counter__btn--active');
      btnPlusChildren.classList.add('counter__btn--active');
    } else {
      btnPlusChildren.classList.add('counter__btn--active');
      btnMinusChildren.classList.remove('counter__btn--active');
    }

    if (children > 0) {
      filterSelect.removeChild(filterSelect.lastElementChild);
    }
    if (children === 1) {
      document.querySelector('.select__lable').style.display = 'none';
    }

    children--;
    document.querySelector('[data-name="children"]').innerHTML = children;
  }
  if (event.target.dataset.count === 'children-plus' && children < 10) {
    if (children >= 9) {
      btnPlusChildren.classList.remove('counter__btn--active');
    } else {
      btnPlusChildren.classList.add('counter__btn--active');
      btnMinusChildren.classList.add('counter__btn--active');
    }

    if (children >= 0) {
      filterSelect.append(addChildrenSelect());
    }
    if (children === 0) {
      document.querySelector('.select__lable').style.display = 'block';
    }

    filterSelect.style.display = 'flex';

    children++;
    document.querySelector('[data-name="children"]').innerHTML = children;
  }
  if (event.target.dataset.count === 'rooms-minus' && rooms > 0) {
    if (rooms > 1) {
      btnMinusRooms.classList.add('counter__btn--active');
      btnPlusRooms.classList.add('counter__btn--active');
    } else {
      btnPlusRooms.classList.add('counter__btn--active');
      btnMinusRooms.classList.remove('counter__btn--active');
    }

    rooms--;
    document.querySelector('[data-name="rooms"]').innerHTML = rooms;
  }
  if (event.target.dataset.count === 'rooms-plus' && rooms < 30) {
    if (rooms >= 29) {
      btnPlusRooms.classList.remove('counter__btn--active');
    } else {
      btnPlusRooms.classList.add('counter__btn--active');
      btnMinusRooms.classList.add('counter__btn--active');
    }
    rooms++;
    document.querySelector('[data-name="rooms"]').innerHTML = rooms;
  }

  inputEl.value = `${adults} Adults − ${children} Children − ${rooms} Room`;
};

btnEl.forEach((item) => {
  item.addEventListener('click', countFunc);
});
