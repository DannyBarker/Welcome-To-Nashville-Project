// add concert search component to the DOM

function createConcertSearchComponent(concertObj) {
    return `
    <h2>${concertObj.text}</h2>
    <h2>${}</h2>
    
`
  }
  function AddConcertComponentToDom(concertComponent, element){
  document.querySelector(`#${}`).innerHTML += concerntComponent
}
// taking an object to create the HTML representation to place it in the DOM