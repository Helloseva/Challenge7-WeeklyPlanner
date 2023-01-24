//running clock at top of page
var nMoment = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(nMoment);

//grabs and names correct current hour in a 24 hour clock //
var cal = new Date();
var currentHour = cal.getHours(); 
console.log(currentHour);

//past,present,future timeblocks with respective colors
for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).classList.add("present");
  } else if (i > currentHour) {
    document.getElementById("row-" + i).classList.add("future");
  }
}

