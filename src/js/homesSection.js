export function createCard(imageUrl, name, city, country) {
  return `
  <img
                class="homes__img"
                src="${imageUrl}"
                alt="Hotel Leopold"
              />
              <a class="link homes__link" href="#">${name}</a>
              <p class="homes__text">${city}, ${country}</p>
  `;
}

export function displayContent(arr) {
  const element = document.querySelector('.homes__cards');
  arr.forEach((item) => {
    const newEl = document.createElement('li');
    newEl.classList.add('col-lg-3', 'col-md-6', 'col-sm-3', 'homes__card');
    element.append(newEl);
    newEl.innerHTML = createCard(
      item.imageUrl,
      item.name,
      item.city,
      item.country,
    );
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

fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => response.json())
  .then((json) => displayContent(json))
  .catch((err) => console.log(err));
