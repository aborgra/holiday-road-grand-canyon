const attractionComponent = (attraction) => {
    
  const yesSouvenirs = () => {
    
    if (`${attraction.ameneties.souvenirs}` === "false") {
      console.log(attraction.ameneties.souvenirs)
   
      return "Souvenirs are not available"
   
   
    } else {  
      console.log(attraction.ameneties.souvenirs)
      
      return "Souvenirs are available"
    
      }
    
    }
    const souvenirs = yesSouvenirs()
    
    
    const yesRestrooms = () => {
      
      if (`${attraction.ameneties.restrooms}` === "false") {
        console.log(attraction.ameneties.restrooms)
     
        return "Restrooms are not available"
     
     
      } else {  
        console.log(attraction.ameneties.restrooms)
        
        return "Restrooms are available"
    
        }
      
      }
      const restrooms = yesRestrooms()
  
  
  
  
  
  return `
    <div class="attraction__content" id="attraction--${attraction.id}">
    <img class="icon dino_icon" src="/images/icons/dino.svg" alt="">
      <div class="attraction__name">${attraction.name}</div>

    <button class="button__details" id="attractionButton__${attraction.id}">Details</button>
  
    <dialog class="dialog__attraction" id="details__${attraction.id}">
      
      <div class="attraction__name">${attraction.name}</div>
      <div class="attraction__city">${attraction.city}</div>
      <div class="attraction__state">${attraction.state}</div>
      <div class="attraction__description">${attraction.description}</div>
      <img class="rating" src="/images/icons/rating.png">
      <div class="attraction__souvenirs">Souvenirs: ${souvenirs}</div>
      <div class="attraction__restrooms">Restrooms: ${restrooms}</div>

      
      <button class="close__dialog">hide</button>
    </dialog>
    </div>
    `
}



export default attractionComponent