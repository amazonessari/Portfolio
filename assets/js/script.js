//Home transition
var length = document.querySelector(".works").getAttribute("id") - 1;
var imageSlide = document.getElementsByClassName("works")[0].getElementsByTagName("li");
var nowIndex = 0;
imageSlide[nowIndex].classList.add("show");
var slideTimer;
TweenMax.fromTo(".bar" , 5 , {width: "0%"}, {width: "100%", ease : "Linear"});
var getColor = imageSlide[nowIndex].getAttribute("id");
document.body.style.backgroundColor = getColor;

function sliderSlide(val) {
	TweenMax.fromTo(".bar" , 5 , {width: "0%", ease : "Linear"}, {width: "100%", ease : "Linear"} );
	isChanging = true;
	imageSlide[nowIndex].classList.remove("show");
	nowIndex = val;
	imageSlide[nowIndex].classList.add("show");
	getColor = imageSlide[nowIndex].getAttribute("id");
	document.body.style.backgroundColor = getColor;
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
var about = document.querySelectorAll(".icon-about");
var close = document.querySelectorAll(".icon-close");

for(var i = 0; i<about.length; i++){
	about[i].addEventListener("click", function(){
		document.querySelector(".modal").style.display = 'block';
	});
}
for(var i = 0; i < close.length; i++){
	close[i].addEventListener("click", function(){
		document.querySelector(".modal").style.display = 'none';
	});
}


//Name animation
var name = document.querySelector(".name")

console.log(about);
console.log(document.querySelector("object"));
