const itineraryComponent = (itinerary) => {
  const yesWifi = () => {

    //  const useWifi = yesWifi
    if (`${itinerary.itineraryDetails.eatery.ameneties.wifi}` === "false") {

      return "Bring your mobile hotspot becase there is no WiFi here."
    } else {

      return "Snap a pic and post it to your gram, this spot has WiFi!"
    }

  }
  const wifi = yesWifi()


  const yesRestrooms = () => {
    if (`${itinerary.itineraryDetails.eatery.ameneties.restrooms}` === "false") {

      return "This place is a dive and doesn't have a restroom. Stop and go to the bathroom before."

    } else {

      return "Restrooms are available here!"
    }

  }
  const restrooms = yesRestrooms()

  const yesSouvenirs = () => {

    if (`${itinerary.itineraryDetails.attraction.ameneties.souvenirs}` === "false") {

      return "No souvenirs sold here...wah wah"


    } else {

      return "They sell merch! Strike up a brand deal with the owners. Buy a shirt, snap a pic, build that following!"

    }

  }
  const souvenirs = yesSouvenirs()


  return `
    <div class="itinerary__content" id="itinerary--${itinerary.id}">
      <div class="itinerary__name">${itinerary.itineraryName}<br/></div>
      <div class="itinerary__header">Your trip to ${itinerary.itineraryDetails.park.name}</div>
      <img class="icon itinerary_icon" src="/images/icons/road.svg" alt="">
    <div class="itinerary__buttons">
        <button class="button__details" id="itineraryDetailsButton__${itinerary.id}">Details</button>
        <dialog class="dialog__itinerary" id="details__${itinerary.id}">
          <div class="itinerary__headline">Pack your bags and get ready for your trip! </div> 
          <div class="itinerary__parkName"> You're headed to ${itinerary.itineraryDetails.park.fullName} </div>
          <div class="itinerary__eateryName"> and grabbing a bite to eat at ${itinerary.itineraryDetails.eatery.businessName} in ${itinerary.itineraryDetails.eatery.city}, ${itinerary.itineraryDetails.eatery.state}.</div>
        
          <div class="itinerary__eateryWifi">${wifi}</div>
          <div class="itinerary__eateryRestrooms">${restrooms}</div>
          <hr/>
          <div class="itinerary__attrationName"> Don't forget to pull over and see the ${itinerary.itineraryDetails.attraction.name} in ${itinerary.itineraryDetails.attraction.city}, ${itinerary.itineraryDetails.attraction.state}</div>
          
          <div class="itinerary__attractionSouvenirs">${souvenirs}</div>
          
          <button class="close__itineraryDialog">HIDE</button>
        </dialog>
        <button class="button__events" id="eventsButton__${itinerary.id}">EVENTS</button>
        <button class="button__events" id="directions__${itinerary.id}">DIRECTIONS</button>
        <dialog class="dialog__events event"></dialog>

        <dialog class="dialog__directions">
        <div class="dialog__directionsInner"></div>
        <button class="close__directionsDialog">HIDE</button>
        </dialog>


        <button class="button__delete" id="itineraryDeleteButton__${itinerary.id}">DELETE</button>
    </div>
    </div>
    `
}



export default itineraryComponent