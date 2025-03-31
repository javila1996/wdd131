 // Update the current year
 document.getElementById("currentyear").textContent = new Date().getFullYear();

 // Update the last modified date
 document.getElementById("lastmodified").textContent = document.lastModified;

 const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/400x250/los-angeles-california-temple-56907.jpg"
    },{
        templeName: "Tegucigalpa Honduras",
        location: "Comayaguela, Honduras",
        dedicated: "2013, March, 17",
        area: 28254,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/400x250/tegucigalpa-honduras-temple-3878.jpg"
    } ,{
        templeName: "Tijuana Mexico",
        location: "Tijuana, Mexico",
        dedicated: "2015, December, 13",
        area: 33367,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/400x250/tijuana-mexico-temple-3660.jpg"
      }
  ];

  const templeContainer = document.getElementById('temple-card-container');

  function displayTemples(filteredTemples) {
    // Clear the existing content in the container
    templeContainer.innerHTML = "";

  // Loop through the temples array and create a card for each temple
  temples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');
  
    templeCard.innerHTML = `
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" class="temple-image" loading="lazy">
      <div class="temple-info">
        <h3 class="temple-name">${temple.templeName}</h3>
        <p class="temple-location">${temple.location}</p>
        <p class="temple-dedicated">Dedicated: ${temple.dedicated}</p>
        <p class="temple-area">Area: ${temple.area} sq ft</p>
      </div>
    `;
  
    // Append the card to the container
    templeContainer.appendChild(templeCard);
  });
}
displayTemples(temples);

// Filter by Old (temples dedicated before 1900)
document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

// Filter by New (temples dedicated after 2000)
document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

// Filter by Large (temples with area > 90,000 sq ft)
document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
});

// Filter by Small (temples with area < 10,000 sq ft)
document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});

// Show all temples (Home button)
document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples); // Show all temples
});