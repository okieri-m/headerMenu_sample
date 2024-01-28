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

	const bgScreen = document.querySelector(".nabOpen-bg");

	open.addEventListener("click", () => {
		bgScreen.classList.toggle("hamburger-bg-cover");
	});

 // アコーディオン

  const accordionTitle = document.querySelectorAll('.nav-dropdown-toggle');

  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", function () {
      for (let j = 0; j < accordionTitle.length; j++) {
        if (accordionTitle[i] !== accordionTitle[j]) {
          accordionTitle[j].classList.remove("is-active");
          accordionTitle[j].nextElementSibling.classList.remove('is-open');
        }
      }
      this.classList.toggle('is-active');
      this.nextElementSibling.classList.toggle('is-open');
    });
  }
}