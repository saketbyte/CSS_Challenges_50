// goals
// click on next to move line next

// click on prev to move line prev

// step 1: Bring in the elements from the html
// namely: progress bar, prev, next, circles

const progressBar = document.getElementById("progress");
const prev = document.getElementById("previous");
const next = document.getElementById("next");
// dont forget the '.' in class name
const circles = document.querySelectorAll(".circle");

// index variable to set the current one active
let current = 1;

// add event listener to buttons
//  Read here about event listener
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#syntax
// it takes two arguments - 'type of event'  and callback as to what to do with it.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback

// the callback accepts a single parameter: an object based on Event describing the event that has occurred, and it returns nothing.
// For example, an event handler callback that can be used to handle both fullscreenchange and fullscreenerror might look like this:
// function handleEvent(event) {
//   if (event.type === "fullscreenchange") {
//     /* handle a full screen toggle */
//   } else {
//     /* handle a full screen toggle error */
//   }
// }

next.addEventListener("click", () => {
	current++;
	if (current > circles.length) {
		current = circles.length;
	}
	update();
	console.log(circles);
});

prev.addEventListener("click", () => {
	current--;
	if (current < 1) {
		current = 1;
	}

	update();
});

// DOM Updates Required:
// 1. Change circle color
// 2. Change width of progress bar.
// 3. Change status of prev button
function update() {
	// changing circle color
	circles.forEach((circle, idx) => {
		if (idx < current) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	// get length of active circles

	const activeCircles = document.querySelectorAll(".active");

	let width = (100 * (activeCircles.length - 1)) / (circles.length - 1);

	// progressBar length
	progressBar.style.width = width + "%";

	// prev buttonstatus
	if (current != 1) {
		prev.disabled = false;
	} else {
		prev.disabled = true;
	}

	if (current == circles.length) {
		next.disabled = true;
	} else {
		next.disabled = false;
	}
}
