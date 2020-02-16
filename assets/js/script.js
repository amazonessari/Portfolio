//Home transition
const works = document.querySelector('.works');
if (works) {
	var prevButton = document.querySelector('.column_left');
	var nextButton = document.querySelector('.column_right');
	var work = document.querySelectorAll(".work");
	var length = works.getAttribute("id") - 1;
	var nowIndex = 0;
	work[nowIndex].classList.add("show");
	TweenMax.fromTo(".bar", 8, { width: "0%", ease: "Linear" }, { width: "100%", ease: "Linear" });
	var getColor = work[nowIndex].getAttribute("id");
	document.body.style.backgroundColor = getColor;

	function sliderSlide(val) {
		TweenMax.fromTo(".bar", 8, { width: "0%", ease: "Linear" }, { width: "100%", ease: "Linear" });
		prevButton.disabled = true;
		nextButton.disabled = true;
		work[nowIndex].classList.remove("show");
		nowIndex = val;
		work[nowIndex].classList.add("show");
		getColor = work[nowIndex].getAttribute("id");
		document.body.style.backgroundColor = getColor;
	}
	function slidePrev() {
		const itemToMove = works.removeChild(works.lastElementChild);
		works.prepend(itemToMove);
		var index = nowIndex - 1;
		if (index < 0) {
			index = length;
		}
		sliderSlide(index);
		works.classList.add('sliding-right');
	}
	function slideNext() {
		const itemToMove = works.removeChild(works.firstElementChild);
		works.append(itemToMove);
		var index = nowIndex + 1;
		if (index > length) {
			index = 0;
		}
		sliderSlide(index);
		works.classList.add('sliding-left');
	}

	//clicking arrow
	prevButton.addEventListener("click", slidePrev, false);
	nextButton.addEventListener("click", slideNext, false);

	//auto
	setInterval(slideNext, 8000);

	//reset sliding class
	works.addEventListener('animationend', () => {
		nextButton.disabled = false;
		prevButton.disabled = false;
		works.classList.remove('sliding-left', 'sliding-right');
	})

	//SP
	window.addEventListener("load", function (event) {
		var touchStartX;
		var touchStartY;
		var touchMoveX;
		var touchMoveY;

		window.addEventListener("touchstart", function (event) {
			event.preventDefault();
			touchStartX = event.touches[0].pageX;
			touchStartY = event.touches[0].pageY;
		}, false);

		window.addEventListener("touchmove", function (event) {
			event.preventDefault();
			touchMoveX = event.changedTouches[0].pageX;
			touchMoveY = event.changedTouches[0].pageY;
		}, false);

		if (touchStartX > touchMoveX) {
			if (touchStartX > (touchMoveX + 50)) {
				window.addEventListener("touchend", slideNext, false);
			}
		} else if (touchStartX < touchMoveX) {
			if ((touchStartX + 50) < touchMoveX) {
				window.addEventListener("touchend", slidePrev, false);
			}
		}
	}, false);

}


//Modal
var about = document.querySelector(".icon-about");
var close = document.querySelector(".icon-close");
var modal = document.querySelector(".modal");

about.addEventListener("click", function () {
	modal.classList.add("show");
});
close.addEventListener("click", function () {
	modal.classList.remove("show");
});


//Name
var nameDivs = document.querySelectorAll(".name");
if (nameDivs) {
	nameDivs.forEach(function (nameDiv) {

		var xhr = new XMLHttpRequest();
		xhr.addEventListener("load", function () {
			nameDiv.innerHTML = xhr.responseText;
		});
		xhr.open("GET", nameDiv.getAttribute("data-src"));
		xhr.send();
	});
}