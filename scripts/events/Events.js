const eventComponent = (event) => {
  
  return `
    <div class="event__title" id="event__title">${event.title}</div>
    <div class="event__schedule">
    <div class="event__dateStart" id="event__dateStart">Start Date: ${event.datestart}</div>
    <div class="event__dateend" id="event__dateend">End Date: ${event.dateend}</div>
    <hr/>

      ${event.times.map(time => 
      `<div class="event__timeStart" id="event__timeStart">Start Time: ${time.timestart}</div>
    <div class="event__timeend" id="event__timeend">End Time: ${time.timeend}</div>`).join("")}
    </div>
    <div class="event__description" id="event__description">${event.description}</div>
    <div class="event__feeinfo" id="event__feeinfo">Cost: ${event.feeinfo}</div>
    <button class="close__eventsDialog">HIDE</button>
  <br/>
  <br/>
  
  `
}



export default eventComponent