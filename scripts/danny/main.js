const zomBtn = document.querySelector("#zomatoBtn");
zomBtn.addEventListener('click', () => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=${zomato.user_key}&start=first&sort=rating`)
      
    .then( data => data.json())
    .then( restaurantList => {
        restaurantList.restaurants.forEach( eatery => {
            console.log('restaurantList :', eatery.restaurant.R.res_id);
            
        });
        
    })
    
})
