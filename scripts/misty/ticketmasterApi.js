const concertId = document.querySelector("#button-is-primary");
const inputId = document.querySelector("#ticketmasterInput");
document.querySelector("#button-is-primary").addEventListener("click", () => {
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
      ticketmaster_keys.ticketmaster_key
    }&locale=*&city=Nashville&stateCode=TN&segmentName=music&keyword=${
      inputId.value
    }`
  )
    .then(data => data.json())
    .then(concertList => {
      document.querySelector("#test").innerHTML = "";
      for (let i = 0; i < concertList._embedded.events.length; i++) {
        const ticketmasterInput = concertList._embedded.events[i];
        createConcertSearchResults(ticketmasterInput);
      }
      let savRestaurant = document.querySelector("#test")
      for (let i = 0; i < savRestaurant.childNodes.length; i++) {
        let one = savRestaurant.childNodes[i].childNodes
            if (one.length !== 0 && one.length !== 1) {
              one[3].addEventListener('click', () => {
                itineraryArr.concert = `${one[1].innerText}`
                makeItinerary(itineraryArr)
            })
      }
      
    };
    inputId.value = "";
  })
})
