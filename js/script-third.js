"use strict";
{

  // SPナビメニュー
  const open = document.querySelector(".header_sp-menubtn");
	const navitem = document.querySelector(".header3-w-navmenu");
	const navmenuText = document.querySelector(".sp-menubtn-text");

	open.addEventListener("click", () => {
		open.classList.toggle("open");
		navitem.classList.toggle("open");
	});
	open.addEventListener("click", () => {
		if (navmenuText.textContent == "Menu") {
			navmenuText.textContent = "Close";
		  } else {
			navmenuText.textContent = "Menu";
		  }
	});

	const test = document.querySelectorAll(".nav-dropdown-toggle3");  
	function acToggle() {
  
	  const content = this.lastElementChild;
	  content.classList.toggle("is-open");
  
	  const test = this;
	  test.classList.toggle('is-active');
	}
  
	for (let i = 0; i < test.length; i++) { 
	  test[i].addEventListener("click", acToggle);
	}
}