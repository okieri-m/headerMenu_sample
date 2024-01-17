"use strict";
{

  // SPナビメニュー
  const open = document.getElementById("js-hamburger");
  const nav = document.querySelector(".hamburger-menu-cont");

	open.addEventListener("click", () => {
		nav.classList.toggle("nav-open");
	});



}