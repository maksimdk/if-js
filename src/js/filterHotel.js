export const formEl = document.querySelector('.top-section__form-search');

export const showFilter = (event) => {
  const el = event.target.closest('.form__param');
  if (el) {
    document.querySelector('.filter-block').style.display = 'block';
  }
  if (!el) {
    document.querySelector('.filter-block').style.display = 'none';
  }
};
