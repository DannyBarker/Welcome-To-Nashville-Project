let searchAlexInput = document.querySelector("#eventbrite-search");
document.querySelector("#eventbrite-btn").addEventListener("click", () => {
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
          let newEvent = name;
          num++;
          createEventOption(newEvent, num);
        });
        let savRestaurant = document.querySelector("#test")
        for (let i = 0; i < savRestaurant.childNodes.length; i++) {
            let one = savRestaurant.childNodes[i].childNodes
            if (one.length !== 0 && one.length !== 1) {
              one[7].addEventListener('click', () => {
                itineraryArr.meetup.name = `${one[1].innerText}`
                itineraryArr.meetup.url = `${one[1].childNodes[3].innerHTML}`
                makeItinerary(itineraryArr);;
            })
          };
          searchAlexInput.value = "";
        };
    
      });
        
      let num = 0;
        
      const createEventOption = (newEvent, num) => {
        document.querySelector("#test").innerHTML += `
        <div id="createMeetUps">
        <div>
          <a href="${newEvent.url}" target="_blank" class="noDecoration"><h3 class="header">${newEvent.name.text}</h3></a>
          <p hidden>${newEvent.url}</p>
        </div>
        <h6>Start Date/Time:${newEvent.start.local}</h6>
        <h6>End Date/Time:${newEvent.end.local}</h6>
        <button id="save-this${num}">Save</button>
        </div>
        `;                
      };
      
    });