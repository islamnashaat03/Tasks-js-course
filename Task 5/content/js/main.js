async function fetchData() {
  try {
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await result.json();
    showData(data);
  } catch {
    console.log(Error);
  }
}

let dataWrapper = document.querySelector('.wrapper');

function showData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log('showData', data);
    dataWrapper.innerHTML += `<li class='box'>
    <figure class="image-wrap">
      <img src="https://picsum.photos/200" alt="User Image">
    </figure>
    <div class="body">
      <span class="id-number">${data[i].id}</span>
      <h3 class="name">${data[i].name}</h3>
      <a class="mail" href="mailto:${data[i].email}">${data[i].email}</a>
      <ul class="adress">
        <li>Adress</li>
        <li>street : ${data[i].address.street}</li>
        <li>suite : ${data[i].address.suite}</li>
        <li>city : ${data[i].address.city}</li>
      </ul>
      <a class="phone" href="tel:${data[i].phone}">${data[i].phone}</a>
      <a class="website" href="${data[i].website}">${data[i].website}</a>
      <span class="company">Company : ${data[i].company.name}</span>
    </div>
  </li>`;
  }
}

// console.log(dataBox);

fetchData();
