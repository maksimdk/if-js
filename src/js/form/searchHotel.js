export const searchBtn = document.querySelector('.form__button');

export const searchHotels = (event) => {
  const inputDestinationValue = document.querySelector(
    '.input--destination',
  ).value;
  const lengthCards = document.querySelector('.available__cards');

  if (!(lengthCards.children.length === 0)) {
    document.querySelector('.available').classList.add('block');
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
        element.innerHTML += `
            <li class="col-lg-3 col-md-6 col-sm-3 available__card">
              <img
                class="available__img"
                src="${item.imageUrl}"
                alt="image didn't load"
              />
              <a class="link available__link" href="#">${item.name}</a>
              <p class="available__text">${item.city}, ${item.country}</p>
            </li>
        `;
      });
    })
    .catch((err) => console.log(err.message));

  event.preventDefault();
};
