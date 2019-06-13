    const makeItinerary = (arr) => {
        document.querySelector("#itineraryStuff").innerHTML =
         `
        <h3>MeetUp:</h3>
          <a href="${arr.meetup.url}" target="_blank" class="noDecoration"><p class="header">${arr.meetup.name}</p></a>
          <h3>Concert:</h3>
          <p class="header">${arr.concert}</p>
          <h3>Restaurant:</h3>
          <a href="${arr.restaurant.url}" target="_blank" class="noDecoration"><p class="header">${arr.restaurant.name}</p></a>
          <h3>Park:</h3>
          <p class="header">${arr.park}</p>
      
         `
     }
let itineraryArr = {
    park: "",
    restaurant: {
        name: "",
        url: "",
    },
    meetup: {
        name: "",
        url: "",

    },
    concert: "",
}