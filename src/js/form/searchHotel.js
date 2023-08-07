export const searchBtn = document.querySelector('.form__button');

export const searchHotels = (event) => {
  const inputDestinationValue = document.querySelector(
    '.input--destination',
  ).value;

  const lengthCards = document.querySelector('.available__cards');

  if (!(lengthCards.children.length === 0)) {
    lengthCards.innerHTML = '';
  }

  fetch(
    `https://if-student-api.onrender.com/api/hotels?search=${inputDestinationValue}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((json) => {
      if (json.length === 0) {
        alert('Введите корректные данные!');
        return;
      }

      document.querySelector('.available').classList.remove('block');
      const element = document.querySelector('.available__cards');
      json.forEach((item) => {
        const newEl = document.createElement('li');
        newEl.classList.add(
          'col-lg-3',
          'col-md-6',
          'col-sm-3',
          'available__card',
        );
        element.append(newEl);
        newEl.innerHTML = `
              <img
                class="available__img"
                src="${item.imageUrl}"
                alt="image didn't load"
              />
              <a class="link available__link" href="#">${item.name}</a>
              <p class="available__text">${item.city}, ${item.country}</p>
        `;
      });
    })
    .catch((err) => console.log(err.message));

  event.preventDefault();
};
