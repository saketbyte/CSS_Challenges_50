// collect all the elements from the page which have panel cals
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
});

// utility function to remove active from all the classes when a click is registered.
function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
