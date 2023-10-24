// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var now = dayjs();
var savebutton = document.getElementById("#save");
 
var formatteddate = now.format('dddd, MMMM D YYYY, h:mm:ss a');
var currentday = document.querySelector("#currentDay");
var savebutton = document.querySelector("#btn saveBtn col-2 col-md-1");
var hourids = ["hour-9","hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

var timeblockstate = document.body.children

//classes for past, present, future. 
var past = $("#row time-block past");
var present = $("#row time-block present");
var future = $("#row time-block future");

currentday.textContent = formatteddate

$(function saveButtonClick(event) {

  savebutton.addEventListener("click", event )

for (var i = 0; i < hourids.length; i++) {
  const element = hourids[i];
console.log(hourids[i]);

// PAST <class="row time-block past">
//PRESENT <class="row time-block present">
// FUTURE <class="row time-block future">
}

//if (hourids[i] > currentday) = past
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

  //add event listenter to save buttons use for loop.

  // setter and getters for save buttons
  
  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
