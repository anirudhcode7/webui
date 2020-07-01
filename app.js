var modalBtns = document.querySelectorAll('.modal-btn');
var modalBg = document.querySelectorAll('.modal-bg');
var modalClose = document.querySelectorAll('.modal-close');

modalBtns.forEach(function(btn){
	btn.onclick=function(){
		var modal = btn.getAttribute('data-modal');
		document.getElementById(modal).classList.toggle('bg-active');
	}
})
modalClose.forEach(function(btn)){
	btn.onclick=function(){
		var modal = btn.getAttribute('data-modal');
		document.getElementById(modal).classList.toggle('bg-active');
	}
}






// modalClose.addEventListener('click',function(){
// 	modalBg.classList.remove('bg-active');
// });