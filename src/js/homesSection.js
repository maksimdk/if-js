async function dataHotels() {
  const res = await fetch(
    'https://if-student-api.onrender.com/api/hotels/popular',
  );
  return res.json();
}

async function displayContent() {
  let hotels = JSON.parse(sessionStorage.getItem('hotels'));
  if (!hotels) {
    hotels = await dataHotels();
    sessionStorage.setItem('hotels', JSON.stringify(hotels));
  }

  const element = document.querySelector('.homes__cards');
  hotels.forEach((item) => {
    element.innerHTML += `
            <li class="col-lg-3 col-md-6 col-sm-3 homes__card">
              <img
                class="homes__img"
                src="${item.imageUrl}"
                alt="image didn't load"
              />
              <a class="link homes__link" href="#">${item.name}</a>
              <p class="homes__text">${item.city}, ${item.country}</p>
            </li>
        `;
  });

  const newBtn = document.createElement('button');
  newBtn.classList.add('btn', 'arrow-block', 'homes__arrow-block');
  element.append(newBtn);
  newBtn.innerHTML = `
      <svg class="arrow">
        <use href="../src/images/favicons/sprite.svg#arrow" />
      </svg>
  `;
}

displayContent();
