import { useParks } from "../parks/ParkProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";
import { saveItinerary } from "./ItineraryProvider.js";

const eventHub = document.querySelector(".container");
const contentElementPark = document.querySelector(".park__card");
const contentElementEatery = document.querySelector(".attraction__card");
const contentElementAttraction = document.querySelector(".eatery__card");
const contentTarget = document.querySelector(".weather");
const contentError = document.querySelector(".error");

const initializeSaveItineraryEventListener = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (
      clickEvent.target.id === "saveItinerary" &&
      document.querySelector(".park__card").innerHTML != "" &&
      document.querySelector(".eatery__card").innerHTML != "" &&
      document.querySelector(".attraction__card").innerHTML != "" &&
      document.querySelector("#itinerary__Name").innerHTML != ""
    ) {
      console.log("save button clicked");
      const itineraryName = document.querySelector("#itinerary__Name").value;

      const allParks = useParks();
      const [prefix, parkId] = document
        .querySelector(".park__content")
        .id.split("--");
      const theDisplayedPark = allParks.find(park => (park.id = parkId));

      const allEateries = useEateries();
      const [taco, eateryId] = document
        .querySelector(".eatery__content")
        .id.split("--");
      const theDisplayedEatery = allEateries.find(
        eatery => (eatery.id = eateryId)
      );

      const allAttractions = useAttractions();
      const [burrito, attractionId] = document
        .querySelector(".attraction__content")
        .id.split("--");
      const theDisplayedAttraction = allAttractions.find(
        attraction => (attraction.id = attractionId)
      );

      const newItinerary = new CustomEvent("itinerarySaved", {
        detail: {
          itineraryName: itineraryName,

          itineraryDetails: {
            park: theDisplayedPark,
            eatery: theDisplayedEatery,
            attraction: theDisplayedAttraction
          }
        }
      });

      eventHub.dispatchEvent(newItinerary);
    } else 
    if(clickEvent.target.id === "saveItinerary"){
      contentError.innerHTML = `Please Fill Out All Fields...`;
    }
  });

  eventHub.addEventListener("itinerarySaved", event => {
    saveItinerary(event.detail);
    contentTarget.innerHTML = "";
    contentElementPark.innerHTML = "";
    contentElementEatery.innerHTML = "";
    contentElementAttraction.innerHTML = "";
    contentError.innerHTML = "";

    document.querySelector("#itinerary__Name").value = "";
  });
};

const ItineraryListComponent = () => {
  const render = itineraryCollection => {
    contentElement.innerHTML = `
  ${itineraryCollection
    .map(itinerary => {
      return itineraryComponent(itinerary);
    })
    .join(" ")}
  `;
  };
  render(itineraryCollection);
};
export default initializeSaveItineraryEventListener;
