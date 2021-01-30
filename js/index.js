document.querySelector(".menu__burger").addEventListener("click", () => {
	document.querySelector(".menu__burger").classList.toggle("active");
	document.querySelector(".menu__list").classList.toggle("active");
});