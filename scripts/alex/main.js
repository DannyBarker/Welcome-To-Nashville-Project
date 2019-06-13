let searchAlexInput = document.querySelector("#eventbrite-search");
document.querySelector("#eventbrite-btn").addEventListener("click", () => {
  console.log("search term", searchAlexInput.value);
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${
      searchAlexInput.value
    }&location.address=nashville&token=${app_key.token}`
  )
    .then(eventData => eventData.json())
    .then(event => {
      document.querySelector("#test").innerHTML = "<h1>Results:</h1>";
      let newEvent = event.events.filter(name => {
        return (
          name.name.text.includes(searchAlexInput.value) ||
          name.description.html.includes(searchAlexInput.value)
        );
      });
      if (newEvent.length === 0) {
        document.querySelector("#test").innerHTML =
          "<h1>Results:</h1><p>Please search for something else</p>";
      } else
        newEvent.forEach(name => {
          console.log(name.name.text);
          let newEvent = name;
          createEventOption(newEvent);
          console.log("done");
        });
    });
    searchAlexInput.value = "";
});


const createEventOption = newEvent => {
  document.querySelector("#test").innerHTML += `
  <div id="createMeetUps">
    <a href="${newEvent.url}" target="_blank" class="noDecoration"><h3 class="header">${newEvent.name.text}</h3></a>
    <h6>Start Date/Time:${newEvent.start.local}</h6>
    <h6>End Date/Time:${newEvent.end.local}</h6>
    <button id="save">Save</button>
  </div>
                `;                
};

// let saveBtn = document.querySelector("#save")

function newPutRequest () {
  let newItinerary = {
    "id": 1,
    "restaurant": "burger",
  }
  fetch(`http://localhost:8088/itinerary`, {
    method: 'PUT',
    body: JSON.stringify(newItinerary),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}