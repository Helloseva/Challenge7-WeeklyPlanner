//running clock at top of page
var nMoment = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(nMoment);

//grabs and names correct current hour in a 24 hour clock //
var cal = new Date();
var currentHour = cal.getHours(); 
console.log(currentHour);



