// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  //ADDED FUNCTIONALITY TO SAVE BUTTON TO RETURN KEY/VALUE AND RETRIEVE THE ID/TEXT AREA INFO.

  $(".saveBtn").on('click', function () {
    //this is the save button function for event listenter for a click
    var key = $(this).parent().attr('id')
    //variable for aiming at the  parent of save button that has the "id" class to get "hour-x"

    var value = $(this).siblings('textarea').val()
    //this aims for the siblings of the button with the name "textarea"
   

    localStorage.setItem(key, value)
    //this is the "setter" and sets the key and value to local storage
  })

  //Displays current time.
  var currentTime = dayjs().hour()

  //RUNS A LOOP ON TIMEBLOCK CLASS AND PARSES THAT AIMS FOR THE ID SPLITS IT AND MAKES IT ARRAY SO IT'LL BE EASIER TO COMPARE TIME TO NUMBER
  $('.time-block').each(function () {
//this one up here runs a for loop through each section with the class "time-block" as function to get the id hours and turn them into single numbers

    var timeBlockHour = parseInt($(this).attr('id').split('-')[1])
   //this line of code convert timeblockhour parses it with attribute "id" and splits itinto an array and after hyphen so it would aim for the numbers so the array is like (-, 1) (-, 2) etc so it aims for the number 1 index in array

//IF STATEMENT THAT GIVES STYLE/ADDS CLASS TO TIMEBLOCKS AND GIVE COLOR GREY, RED OR GREEN DEPENDING ON TIME.

  if (timeBlockHour < currentTime) {
    //this if statement compares variable timeblockhour when less then currenttime

    $(this).addClass("past") //will add class to timeblockhour called past and use the css styling for the ".past" class
  }else if (timeBlockHour === currentTime) {
//and if timeblockhour is strictly equal to the time will mark with ".present"class
    $(this).addClass("present")
  }else {
    $(this).addClass("future")
  } //if it's none of the other conditions it will be classed as ".future"

  })

  // GETS LOCAL STORAGE OF TEXTAREA IN HOURS 


//jquery here aims for the class and textarea that's stored in the as value and gets it from local storage hour-x
  $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
  $("#hour-10 textarea").val(localStorage.getItem("hour-10"))
  $("#hour-11 textarea").val(localStorage.getItem("hour-11"))
  $("#hour-12 textarea").val(localStorage.getItem("hour-12"))
  $("#hour-13 textarea").val(localStorage.getItem("hour-13"))
  $("#hour-14 textarea").val(localStorage.getItem("hour-14"))
  $("#hour-15 textarea").val(localStorage.getItem("hour-15"))
  $("#hour-16 textarea").val(localStorage.getItem("hour-16"))
  $("#hour-17 textarea").val(localStorage.getItem("hour-17"))

  //Displays the current time in Mon/Da/Year format
  
  $('#currentDay').text(dayjs().format('MMM DD YYYY'))

});
