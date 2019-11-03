
// スライドの数を取得(処理のために-1する)
var length = document.querySelector(".works").getAttribute("id") - 1;
// クラス名「imageSlide」に画像の1枚の要素を格納
var imageSlide = document.getElementsByClassName("works")[0].getElementsByTagName("li");
// クラス名「dotNavigation」にドットナビの1つの要素を格納
// 「現在○○枚目のスライドを表示している」というインデックス番号を格納する変数
var nowIndex = 0;
// 現在表示されている画像とドットナビにクラス名を付ける
imageSlide[nowIndex].classList.add("show");
// スライドがアニメーション中か判断するフラグ
var isChanging = false;
// スライドのsetTimeoutを管理するタイマー
var slideTimer;

var getColor = imageSlide[nowIndex].getAttribute("id");
document.body.style.backgroundColor = getColor;

// スライド切り替え時に呼び出す関数
function sliderSlide(val) {
	if (isChanging === true) {
		return false;
	}

	isChanging = true;
	// 現在表示している画像とナビからクラス名を削除
	imageSlide[nowIndex].classList.remove("show");
	nowIndex = val;
	// 次に表示するスライドとナビにカレントクラスを設定
	imageSlide[nowIndex].classList.add("show");
	getColor = imageSlide[nowIndex].getAttribute("id");
	document.body.style.backgroundColor = getColor;
	// アニメーションが終わるタイミングでisChangingのステータスをfalseに
	slideTimer = setTimeout(function(){
		isChanging = false;
	}, 600);
}


// 左矢印のナビをクリックした時のイベント
document.querySelector(".column_left").addEventListener("click", function(){
	var index = nowIndex - 1;
	if(index < 0){
	  index = length;
	}
	sliderSlide(index);
}, false);
// 右矢印のナビをクリックした時のイベント
document.querySelector(".column_right").addEventListener("click", function(){
	var index = nowIndex + 1;
	if(index > length){
	  index = 0;
	}
	sliderSlide(index);
}, false);


//modal
document.querySelector(".icon-about").addEventListener("click", function(){
	document.querySelector(".modal").style.display = 'block';
});
document.querySelector(".icon-close").addEventListener("click", function(){
	document.querySelector(".modal").style.display = 'none';
});
