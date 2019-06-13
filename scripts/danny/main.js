const zomBtn = document.querySelector("#zomatoBtn");
const searchText = document.querySelector("#restaurantInput")
zomBtn.addEventListener('click', () => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=${zomato.user_key}&q=${searchText.value}&sort=rating`)
    .then( data => data.json())
    .then( restaurantList => {
        document.querySelector("#test").innerHTML = "<h1>Results:</h1>";
        let wordReturn = restaurantList.restaurants;
        wordReturn.forEach( keyWord => {
            createRestaurantOption(keyWord.restaurant)
        if (document.querySelector("#test").innerHTML === "<h1>Results:</h1>") {
            document.querySelector("#test").innerHTML = 
            `<h1>Results:</h1>
            <p>Unable to find "${searchText.value}":(</p>
                `
        }

        })
        let savRestaurant = document.querySelector("#test")
        for (let i = 0; i < savRestaurant.childNodes.length; i++) {
            let one = savRestaurant.childNodes[i].childNodes
            if (savRestaurant.childNodes[i].childNodes[9] !== undefined) {
                savRestaurant.childNodes[i].childNodes[9].addEventListener('click', () => {
                    itineraryArr.restaurant.name = `${one[1].innerText}`
                    itineraryArr.restaurant.url = `${one[1].childNodes[3].innerHTML}`
                    makeItinerary(itineraryArr);
                })
            }
            };   
           
        searchText.value = "";
    })
})

    
    const createRestaurantOption = (newObj) => {
        document.querySelector("#test").innerHTML += 
        `
        <div id="createRestaurant">
            <div>
                <a href="${newObj.url}" target="_blank" class="noDecoration"><h3 class="header">${newObj.name}</h3></a>
                <p hidden>${newObj.url}</p>
             </div>
            <h5>Rating:</h5>
            <p class="rating">${newObj.user_rating.aggregate_rating}</p>
            <address>Address: ${newObj.location.address}<br>
                ${newObj.location.city}
                ${newObj.location.zipcode}
            </address>
            <button id="save">Save</button>
        </div>
        `
    }
