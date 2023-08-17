(function sendFile() {
  const formEl = document.getElementById('form');
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    const body = new FormData(formEl);

    const fetchOptions = {
      method: 'POST',
      body,
    };

    const res = await fetch(
      'https://if-student-api.onrender.com/api/file',
      fetchOptions,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => result)
      .catch((error) => console.log(error.message));

    console.log(res);
  });
})();

(function showImage() {
  const fileEl = document.querySelector('.input-file');
  const imgEl = document.createElement('img');
  const imgBtn = document.getElementById('image-div');
  // const inputEl = document.getElementById('file');
  const spanEl = document.querySelector('.span');

  // imgBtn.addEventListener('click', (e) => {
  //   inputEl.click();
  // });

  imgEl.setAttribute('src', '');
  imgEl.setAttribute('src', '');

  imgBtn.append(imgEl);

  fileEl.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
      spanEl.remove();
      imgEl.setAttribute('src', e.target.result);
      imgEl.setAttribute('alt', file.name);
      imgEl.setAttribute('width', '100%');
      imgEl.setAttribute('object-fit', 'cover');
    });

    reader.readAsDataURL(file);
  });
})();
