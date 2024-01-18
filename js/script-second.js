"use strict";
{

  // SPナビメニュー
  const open = document.querySelector(".header_sp-menubtn");
	const navLogin = document.querySelector(".w-nav-navmenu");
	const navmenuText = document.querySelector(".sp-menubtn-text");

	open.addEventListener("click", () => {
		open.classList.toggle("open");
		navLogin.classList.toggle("open");
	});
	open.addEventListener("click", () => {
		if (navmenuText.textContent == "Menu") {
			navmenuText.textContent = "Close";
		  } else {
			navmenuText.textContent = "Menu";
		  }
	});


  // header-2 スマホメニューアコーディオン
  const menuToggle = document.querySelectorAll(".nav-dropdown-toggle");  
  function acToggle() {

    const content = this.nextElementSibling;
    content.classList.toggle("is-open");

    const menuToggle = this;
    menuToggle.classList.toggle('is-active');
  }

  for (let i = 0; i < menuToggle.length; i++) { 
    menuToggle[i].addEventListener("click", acToggle);
  }


}