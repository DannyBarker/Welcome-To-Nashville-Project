// let getEvents() {
//     eventBriteAPI()
//         .then( eventData => {
//             eventData.forEach( eventItem => {
//                 eventBriteAPI(eventItem.search)
//                 .then ( eventItemFromAPI => {
//                     if eventItemFromAPI
//                 })
//             })
//         })
// }

// function eventBriteAPI (search) {
//     return(`https://www.eventbriteapi.com/v3/events/search/?q=cooking&location.address=nashville&token=${app_key.token}`)
//     .then( eventFromAPI => eventFromAPI.json())
// }

// document.querySelector("#eventbrite-btn").addEventListener("click", () =>{
//     fetch(`https://www.eventbriteapi.com/v3/events/search/?q=cooking&location.address=nashville&token=${app_key.token}`)
//     .then(data => data.json())
//     .then(eventList => {
//         console.log(eventList)
//         eventList.events.forEach(eventName => {
//             console.log(eventName.name.text)
//         })
//     })
// })