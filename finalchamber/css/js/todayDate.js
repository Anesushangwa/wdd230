const datefield = document.querySelector("small");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

// greetings
const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 13) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("greeting").innerHTML = greeting;


// var x = document.getElementById("myImg").src;
// document.getElementById("demo").innerHTML = x;