let searchInput = document.querySelector("#metro-search")
document.querySelector("#metro-search").addEventListener("change", () => {
  let apiUrl = `https://data.nashville.gov/resource/xbru-cfzi.json?${searchInput.value}=Yes`
  let apiId = app_keys.app_id
  let apiKey = app_keys.app_key
  fetch(`${apiUrl}&$$app_token=${app_keys.app_key}`)
    .then(data => data.json())  
    .then(data => {
      showOptionText.innerHTML = ""
      renderSearchResults(data)
      let savRestaurant = document.querySelector("#test")
      for (let i = 0; i < savRestaurant.childNodes.length; i++) {
        let one = savRestaurant.childNodes[i].childNodes
          if (one.length !== 0 && one.length !== 1) {
            one[9].addEventListener('click', () => {
              itineraryArr.park= `${one[1].innerText}`
              makeItinerary(itineraryArr);
          })

        }
      }
    })
});

//Add drop down menu. Still use the click but do it based off of "value" added to option in HTML. Then that is sent to API

//values for drop down: hiking_trails dog_park soccer_fields  playground

//Value you want: Name= park_name, Address= mapped_location.human_address.(adrress city state zip), bathroom= restrooms_available, ADA Accesible= ada_accesible

