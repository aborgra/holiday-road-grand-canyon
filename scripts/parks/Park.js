const parkComponent = (park) => {
  
    return `
    <div class="park__content" id="park--${park.id}">

    <img class="icon mountain_icon" src="/images/icons/mountains.svg" alt="">
    
      <div class="park__name">${park.name}</div>
    
    <button class="button__details" id="parkButton__${park.id}">Details</button>
    <dialog class="dialog__park" id="details__${park.id}">
      <div class="park__name" id="park__name">${park.fullName}</div>
      <div class="park__state" id="park__state">${park.states}</div>
      <div class="park__description" id="park__description">${park.description}</div>
      
      <a class="park__url" id="park__url" href="${park.url}">${park.url}</a>
      
      <button class="close__dialog">Hide</button>
    </dialog>
    </div>
    `
}



export default parkComponent