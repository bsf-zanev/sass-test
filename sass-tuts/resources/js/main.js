if(document.getElementsByTagName('body')[0].offsetHeight < window.innerHeight){
	let head = document.getElementsByClassName('headerWrapper')[0];
	let navi = document.getElementsByClassName('navWrapper')[0];
	let main = document.getElementsByClassName('mainWrapper')[0];
	let foot = document.getElementsByClassName('footerWrapper')[0];
	foot.style.position = "fixed";
	foot.style.bottom = "0";
	main.style.height = window.innerHeight - head.offsetHeight - navi.offsetHeight - foot.offsetHeight + "px";

}