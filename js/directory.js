const requestURL = 'https://anesushangwa.github.io/wdd230/Lesson9/datajson/data.json';
const business = document.querySelector('.business');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  const businesses = jsonObject['bussinessDirectory'];

  businesses.forEach(displaybusinesses);
  });

 


function displaybusinesses(directoryBusinnes) {
    // date of birth , birth place and directoryBusinnes images
   const card = document.createElement('section');
   const image = document.createElement('img');
   const p1 = document.createElement('p');
   const p2 = document.createElement('a');
   const p3 = document.createElement('p');
  

    p3.textContent = `${directoryBusinnes.companyAdress} `;
    card.appendChild(p3);
    
    p1.textContent = ` ${directoryBusinnes.phonenumber}`;
    card.appendChild(p1);

    p2.textContent = ` ${directoryBusinnes.website}`;
    card.appendChild(p2);
  
    image.src = directoryBusinnes.imageurl;
    image.setAttribute('alt', directoryBusinnes.order);
    card.appendChild(image);
  
  
    document.querySelector('div.bs').appendChild(card);
  
  }