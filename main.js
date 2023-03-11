// Smooth scrolling
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Instagram link
const instagramLink = document.getElementById('instagram');
instagramLink.addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/myvoodoobar/';
});

// Cocktail menu section

const menuItems = [
  {
    name: "Voodoo Magic",
    description: "Our signature cocktail, made with a secret blend of herbs and spices.",
    image: "images/voodoo-magic.jpg"
  },
  {
    name: "Zombie Apocalypse",
    description: "A strong and fruity drink that will bring you back to life.",
    image: "images/zombie-apocalypse.jpg"
  },
  {
    name: "Midnight Margarita",
    description: "A classic margarita with a twist of blackcurrant liqueur.",
    image: "images/midnight-margarita.jpg"
  },
  {
    name: "Jungle Juice",
    description: "A refreshing and exotic blend of tropical fruits and rum.",
    image: "images/jungle-juice.jpg"
  }
];

const menuContainer = document.querySelector(".menu-container");

function createMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  menuItem.appendChild(image);

  const name = document.createElement("h3");
  name.textContent = item.name;
  menuItem.appendChild(name);

  const description = document.createElement("a");
  description.textContent = item.description;
  menuItem.appendChild(description);

  const button = document.createElement("button");
  button.textContent = "Order now";
  menuItem.appendChild(button);

  menuContainer.appendChild(menuItem);
}

menuItems.forEach(item => createMenuItem(item));

// Event section


const eventDescription = document.querySelector('.event-description');

// Load the description from the server
fetch('/event-description')
  .then(response => response.text())
  .then(text => {
    eventDescription.innerHTML = text;
  })
  .catch(error => {
    console.error(`Failed to load event description: ${error}`);
  });


  //contact section
  // Google Maps API
function initMap() {
  const voodooBar = { lat: 48.8566, lng: 2.3522 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: voodooBar,
  });
  const marker = new google.maps.Marker({
    position: voodooBar,
    map: map,
  });
}

// Opening hours data
const openingHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "5pm - 11pm" },
  { day: "Wednesday", hours: "5pm - 11pm" },
  { day: "Thursday", hours: "5pm - 11pm" },
  { day: "Friday", hours: "5pm - 2am" },
  { day: "Saturday", hours: "5pm - 2am" },
  { day: "Sunday", hours: "5pm - 11pm" },
];

const hoursContainer = document.querySelector(".opening-hours");

openingHours.forEach((item) => {
  const div = document.createElement("div");
  const day = document.createElement("h3");
  day.textContent = item.day;
  div.appendChild(day);
  const hours = document.createElement("p");
  hours.textContent = item.hours;
  div.appendChild(hours);
  hoursContainer.appendChild(div);
});