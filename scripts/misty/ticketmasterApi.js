// taking an object to create the HTML representation to place it in the DOM
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
      //   console.log("concert list", concertList);
      //   console.log(concertList._embedded.events);
      //   for (let i = 0; i < concertList._embedded.events.length; i++) {
      //     console.log(concertList._embedded.events[i].classifications);
      //add to the dOM
      for (let i = 0; i < concertList._embedded.events.length; i++) {
        const ticketmasterInput = concertList._embedded.events[i];
        createConcertSearchResults(ticketmasterInput);
      }
    });
});
