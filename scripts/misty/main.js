
// taking an object to create the HTML representation to place it in the DOM
// const concertId = document.querySelector("#button");
// const inputId = document.querySelector("#ticketmasterInput")

// concertId.addEventListener("click", function createConcertSearchResults) {
  
// }

//create search results and return to DOM 
// stores a reference to HTML element   
// const createConcertSearchResults = document.querySelector("#ticketmasterInput")


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



// for (let i = 0; i < concertObj.length; i++) {
//     const ticketmasterInput = ticketmasterInput.events[i].name
//     concertSearchResults.innerHTML += createConcertSearchResults(
//         ticketmasterInput.name,
//     )