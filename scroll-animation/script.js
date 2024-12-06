const boxes = document.querySelectorAll(".box");
// console.log(boxes);
window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
	// console.log((window.innerHeight / 5) * 4);
	triggerBottom = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#return_value

		const boxTop = box.getBoundingClientRect().top;
		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}
