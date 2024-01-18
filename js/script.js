"use strict";
{

  // SPナビメニュー
  const open = document.querySelector(".header_sp-menubtn");
	const nav = document.querySelector(".nav-list");
	const navLogin = document.querySelector(".w-nav-navmenu");
	const bgScreen = document.querySelector(".nabOpen-bg");

	open.addEventListener("click", () => {
		open.classList.toggle("open");
		nav.classList.toggle("open");
		bgScreen.classList.toggle("hamburger-bg-cover");
		navLogin.classList.toggle("open");
	});

}