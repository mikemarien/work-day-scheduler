
//Using moment.js documentation to add current date to jumbotron.
const m = moment();

$("#currentDay").append(m.format("dddd, MMMM Do"));

$("#description").append('<input type="text">');
