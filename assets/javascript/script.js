//running clock at top of page
setInterval(function () {
    var clock = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(clock);
  }, 1000);

  //past,present,future timeblocks with respective colors
var cal = new Date();
var currentHour = cal.getHours(); // grabs number from 0-23 on a 24 hour clock
console.log(currentHour);

for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).classList.add("present");
  } else if (i > currentHour) {
    document.getElementById("row-" + i).classList.add("future");
  }
}