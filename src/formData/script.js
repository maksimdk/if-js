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
