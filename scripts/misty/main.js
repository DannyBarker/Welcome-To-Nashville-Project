//create search results and return to DOM 
// stores a reference to HTML element   


const createConcertSearchResults = (concertObj) => {
    document.querySelector("#test").innerHTML +=
     `
    <div class = "createConcert">
        <div>
            <h3 class="header">${concertObj.name}</h3>
        </div>
        <button id="save">Save</button>
    </div>
        `
}


