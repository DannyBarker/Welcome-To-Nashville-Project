let searchInput = document.querySelector("#eventbrite-search");
document.querySelector("#eventbrite-btn").addEventListener("click", () => {
  console.log("search term", searchInput.value);
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${
      searchInput.value
    }&location.address=nashville&token=${app_key.token}`
  )
    .then(eventData => eventData.json())
    .then(event => {
      document.querySelector("#events").innerHTML = "<h1>Results:</h1>";
      let newEvent = event.events.filter(name => {
        return (
          name.name.text.includes(searchInput.value) ||
          name.description.html.includes(searchInput.value)
        );
      });
      if (newEvent.length === 0) {
        document.querySelector("#events").innerHTML =
          "<h1>Results:</h1><p>Please search for something else</p>";
      } else
        newEvent.forEach(name => {
          console.log(name.name.text);
          let newEvent = name;
          createEventOption(newEvent);
          console.log("done");
        });
    });
});

const createEventOption = newEvent => {
  document.querySelector("#events").innerHTML += `
                <h4><a href="${newEvent.url}">${newEvent.name.text}</a></h4>
                <h6>Start Date/Time:${newEvent.start.local}</h6>
                <h6>End Date/Time:${newEvent.end.local}</h6>
                `;
};