const loadText = document.querySelector(".load-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

const customMapper = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blurring() {
	load++;

	if (load > 99) {
		// stop the interval clock
		// The clearInterval() method of the Window interface cancels a timed,
		// repeating action which was previously established by a call to setInterval().
		// If the parameter provided does not identify a previously established action,
		// this method does nothing.
		clearInterval(int);
	}
	// console.log(load);

	loadText.innerText = `${load}%`;
	loadText.style.opacity = customMapper(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${customMapper(load, 0, 100, 30, 0)}px)`;
}
