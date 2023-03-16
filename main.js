const burgerOpen = document.getElementById("burger-menu");

const burgerClose = document.getElementById("burger-close");

const nav = document.getElementById("nav");

const shadow = document.getElementById("shadow");

burgerOpen.addEventListener("click", open);

burgerClose.addEventListener("click", close);

shadow.addEventListener("click", close)

function open(){
	shadow.style.display = "block";
	nav.style.display = "flex";
	burgerClose.style.display = "block";
}

function close(){
	nav.style.display = "none";
	shadow.style.display = "none";
}