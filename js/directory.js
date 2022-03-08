// const requestURL = 'https://anesushangwa.github.io/wdd230/Lesson9/datajson/data.json';
// const business = document.querySelector('.business');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing

//   const businesses = jsonObject['bussinessDirectory'];

//   businesses.forEach(displaybusinesses);
//   });

 


// function displaybusinesses(directoryBusinnes) {
//     // date of birth , birth place and directoryBusinnes images
//    const card = document.createElement('section');
//    const image = document.createElement('img');
//    const p1 = document.createElement('p');
//    const p2 = document.createElement('a');
//    const p3 = document.createElement('p');
  

//     p3.textContent = `${directoryBusinnes.companyAdress} `;
//     card.appendChild(p3);
    
//     p1.textContent = ` ${directoryBusinnes.phonenumber}`;
//     card.appendChild(p1);

//     p2.textContent = ` ${directoryBusinnes.website}`;
//     card.appendChild(p2);
  
//     image.src = directoryBusinnes.imageurl;
//     image.setAttribute('alt', directoryBusinnes.order);
//     card.appendChild(image);
  
  
//     document.querySelector('div.bs').appendChild(card);
  
//   }

const requestURL = 'https://anesushangwa.github.io/wdd230/Lesson9/datajson/another.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  const busineses = jsonObject['busineses'];

  busineses.forEach(displaybusineses);
  });

 


function displaybusineses(business) {
    // date of birth , birth place and prophet images
   const card = document.createElement('section');
   const image = document.createElement('img');
   const p1 = document.createElement('a');
   const p3 = document.createElement('p');
//    const p2 = document.createElement('p');
   const p4 = document.createElement('p');



   image.src = business.imageurl;
   image.setAttribute('alt', business.order);
   card.appendChild(image);
 

    p3.textContent = ` Phone number:  ${business.phonenumber}`;
    card.appendChild(p3);

    p4.textContent = ` Location: ${business.name}`;
    card.appendChild(p4);
    
    p1.href = ` Web site: ${business.website}`;
    card.appendChild(p1);
    // card.href = "https://www.geeksforgeeks.org";
    
                  
      // // Create anchor element.
      // var a = document.createElement('a'); 
        
      // // Create the text node for anchor element.
      // var link = document.createTextNode("This is link");
        
      // // Append the text node to anchor element.
      // a.appendChild(link); 
        
      // // Set the title.
      // a.title = "This is Link"; 
        
      // // Set the href property.
      // a.href = "https://www.geeksforgeeks.org"; 
        
      // // Append the anchor element to the body.
      // document.body.appendChild(a); 

  
   
  
    document.querySelector('div.cards').appendChild(card);
  
  }