const ui = {
  menu: null,
  menuItems: null,
  navItems: null,
  hamburger: null,
  closeIcon: null,
  menuIcon: null,
};

function toggleMenu() {
  if (ui.menu.classList.contains("show-menu")) {
    // ui.hamburger.classList.remove("show-menu");
    ui.menu.classList.remove("show-menu");
    ui.closeIcon.style.display = "none";
    ui.menuIcon.style.display = "block";
  } else {
    // ui.hamburger.classList.add("show-menu");
    ui.menu.classList.add("show-menu");
    ui.closeIcon.style.display = "block";
    ui.menuIcon.style.display = "none";
  }
}

function main() {
  ui.menu = document.querySelector(".menu");
  ui.menuItems = document.querySelectorAll(".menu-item");
  ui.navItems = document.querySelectorAll(".nav-item");
  ui.hamburger = document.querySelector(".hamburger");
  ui.closeIcon = document.querySelector(".close-icon");
  ui.menuIcon = document.querySelector(".menu-icon");

  ui.hamburger.addEventListener("click", toggleMenu);

  ui.menuItems.forEach(
    function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    }
  );

  // window.addEventListener("resize", function () {
  //   var w = window.innerWidth;
  //   var tabletAndUp = 768;
  //   console.log(w)

  //   if (w < tabletAndUp) {
  //     ui.menu.classList.add("menu");
  //     ui.menu.classList.remove("nav-wrapper");
  //     ui.navItems.forEach((navItem) => {
  //       navItem.classList.add("nav-item");
  //       navItem.classList.remove("menuItem");
  //     });
  //   } else {
  //     ui.menu.classList.remove("menu");
  //     ui.menu.classList.add("nav-wrapper");
  //   }
  // });
}

main();