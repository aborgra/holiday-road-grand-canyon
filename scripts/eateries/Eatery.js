
// const eateryWifi = (eatery) => {
//   const yesWifi = () => {
// if (`${eatery.ameneties.wifi}` === "false") {
//   console.log("WIFI not available")
  
// } else {  console.log("WIFI is available") }

//   }
// }


// if (currentPark.fullName === park) {
//   return currentPark
   


const eateryComponent = (eatery) => {
  
  
   const yesWifi = () => {
    //  const useWifi = yesWifi
    if (`${eatery.ameneties.wifi}` === "false") {
      console.log(eatery.ameneties.wifi)
   
      return "WIFI not available"
    // if WIFI NOT available then FALSE
   
    } else {  
      console.log(eatery.ameneties.wifi)
      
      return "WIFI is available"
    // if WIFI available then TRUE
      }
    
    }
    const wifi = yesWifi()
    
    
    const yesRestrooms = () => {
      //  const useWifi = yesWifi
      if (`${eatery.ameneties.restrooms}` === "false") {
        console.log(eatery.ameneties.restrooms)
     
        return "Restrooms are not available"
      // if WIFI NOT available then FALSE
     
      } else {  
        console.log(eatery.ameneties.restrooms)
        
        return "Restrooms are available"
      // if WIFI available then TRUE
        }
      
      }
      const restrooms = yesRestrooms()
    

    return `
    <div class="eatery__content" id="eatery--${eatery.id}">
    <img class="icon fork_icon" src="/images/icons/fork.svg" alt="">
      
    <div class="eatery__name">${eatery.businessName}</div>

      <button class="button__details" id="eateryButton__${eatery.id}">Details</button>

  
    <dialog class="dialog__eatery" id="details__${eatery.id}">
     
      <div class="eatery__name">${eatery.businessName}</div>
      <div class="eatery__city">${eatery.city}</div>
      <div class="eatery__state">${eatery.state}</div>
      <div class="eatery__description">${eatery.description}</div>
      <img class="rating" src="/images/icons/rating.png">
      <div class="eatery__wifi">Wifi: ${wifi}</div>
 
      <div class="eatery__restrooms">Restrooms: ${restrooms}</div>

      
      <button class="close__dialog">Hide</button>
    </dialog>
    </div>
    `
}



export default eateryComponent


// <div class="eatery__wifi">Wifi Available: ${eatery.ameneties.wifi}</div>
{/* <div class="eatery__wifi">Wifi Available: ${availWifi}</div> */}