//Home transition
var length = document.querySelector(".works").getAttribute("id") - 1;
var imageSlide = document.getElementsByClassName("works")[0].getElementsByTagName("li");
var nowIndex = 0;
imageSlide[nowIndex].classList.add("show");
var slideTimer;
TweenMax.fromTo(".bar", 5, { width: "0%" }, { width: "100%", ease: "Linear" });
var getColor = imageSlide[nowIndex].getAttribute("id");
document.body.style.backgroundColor = getColor;

function sliderSlide(val) {
	TweenMax.fromTo(".bar", 5, { width: "0%", ease: "Linear" }, { width: "100%", ease: "Linear" });
	isChanging = true;
	imageSlide[nowIndex].classList.remove("show");
	nowIndex = val;
	imageSlide[nowIndex].classList.add("show");
	getColor = imageSlide[nowIndex].getAttribute("id");
	document.body.style.backgroundColor = getColor;
}

//Home transition | auto
setInterval(function () {
	var index = nowIndex + 1;
	if (index > length) {
		index = 0;
	}
	sliderSlide(index);
}, 5000);

//Home transition | clicking arrow
document.querySelector(".column_left").addEventListener("click", function () {
	var index = nowIndex - 1;
	if (index < 0) {
		index = length;
	}
	sliderSlide(index);
}, false);
document.querySelector(".column_right").addEventListener("click", function () {
	var index = nowIndex + 1;
	if (index > length) {
		index = 0;
	}
	sliderSlide(index);
}, false);


//Modal
var abouts = document.querySelectorAll(".icon-about");
var closes = document.querySelectorAll(".icon-close");
var modals = document.querySelectorAll(".modal");

abouts.forEach(function (about) {
	about.addEventListener("click", function () {
		modals.forEach(function (modal) {
			modal.classList.add("show");
		});
	});
});
closes.forEach(function (close) {
	close.addEventListener("click", function () {
		modals.forEach(function (modal) {
			modal.classList.remove("show");
		});
	});
});


//Name animation
var nameDivs = document.querySelectorAll(".name");
nameDivs.forEach(function (nameDiv) {

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", function () {
		nameDiv.innerHTML = xhr.responseText;
	});
	xhr.open("GET", nameDiv.getAttribute("data-src"));
	xhr.send();
});


//three js
window.addEventListener("DOMContentLoaded", init);

function init() {
	// ここに処理を追加していきます
}