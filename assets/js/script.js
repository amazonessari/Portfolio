//Home transition
var length = document.querySelector(".works").getAttribute("id") - 1;
var imageSlide = document.getElementsByClassName("works")[0].getElementsByTagName("li");
var nowIndex = 0;
imageSlide[nowIndex].classList.add("show");
var isChanging = false;
var slideTimer;
TweenMax.fromTo(".bar" , 5 , {width: "0%"}, {width: "100%"});
var getColor = imageSlide[nowIndex].getAttribute("id");
document.body.style.backgroundColor = getColor;

function sliderSlide(val) {
	if (isChanging === true) {
		return false;
	}
	TweenMax.fromTo(".bar" , 5 , {width: "0%"}, {width: "100%"} );
	isChanging = true;
	imageSlide[nowIndex].classList.remove("show");
	nowIndex = val;
	imageSlide[nowIndex].classList.add("show");
	getColor = imageSlide[nowIndex].getAttribute("id");
	document.body.style.backgroundColor = getColor;
	slideTimer = setTimeout(function(){
		isChanging = false;
	}, 600);
}

//Home transition | auto
setInterval(function(){
	var index = nowIndex + 1;
	if(index > length){
		index = 0;
	}
	sliderSlide(index);
},5000);

//Home transition | clicking arrow
document.querySelector(".column_left").addEventListener("click", function(){
	var index = nowIndex - 1;
	if(index < 0){
	  index = length;
	}
	sliderSlide(index);
}, false);
document.querySelector(".column_right").addEventListener("click", function(){
	var index = nowIndex + 1;
	if(index > length){
	  index = 0;
	}
	sliderSlide(index);
}, false);


//Modal
document.querySelector(".icon-about").addEventListener("click", function(){
	document.querySelector(".modal").style.display = 'block';
});
document.querySelector(".icon-close").addEventListener("click", function(){
	document.querySelector(".modal").style.display = 'none';
});
