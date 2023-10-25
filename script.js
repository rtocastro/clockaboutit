// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  //ADDED FUNCTIONALITY TO SAVE BUTTON TO RETURN KEY/VALUE AND RETRIEVE THE ID/TEXT AREA INFO.

  $(".saveBtn").on('click', function () {
    var key = $(this).parent().attr('id')
    var value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value)
  })

  //Displays current time.
  var currentTime = dayjs().hour()

  //RUNS A LOOP ON TIMEBLOCK CLASS AND PARSES THAT AIMS FOR THE ID SPLITS IT AND MAKES IT ARRAY SO IT'LL BE EASIER TO COMPARE TIME TO NUMBER
  $('.time-block').each(function () {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1])
   
//IF STATEMENT THAT GIVES STYLE/ADDS CLASS TO TIMEBLOCKS AND GIVE COLOR GREY, RED OR GREEN DEPENDING ON TIME.

  if (timeBlockHour < currentTime) {

    $(this).addClass("past")
  }else if (timeBlockHour === currentTime) {

    $(this).addClass("present")
  }else {
    $(this).addClass("future")
  }

  })

  // GETS LOCAL STORAGE OF TEXTAREA IN HOURS 

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
