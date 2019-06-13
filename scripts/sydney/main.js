
fetch("https://data.nashville.gov/resource/74d7-b74t.json") 
    .then(data => data.json())  
    // .then(data => console.log(data))

const createSearchResults = (value) => {
    return `
    <div class="createPark">
        <h3 class="header">${value.park_name}</h3>
        <h4>${value.mapped_location_address}</h4>
        <p>Restrooms Available: ${value.restrooms_available}</p>
        <p>ADA Accesible: ${value.ada_accessible}</p>
        <button id="save">Save</button>
    </div>
    `
}

const showOptionText = document.querySelector("#showOptions")

const renderSearchResults = (results) => {
    for(i = 0; i < 7; i++) {
        let finishedDiv = createSearchResults(results[i]); 
        showOptionText.innerHTML += finishedDiv 
    }
}