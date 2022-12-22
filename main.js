var iconNavBar = document.querySelector(".header-content-iconnavbar");
var titleNavBar = document.querySelector(".header-content-title");

var sideBar = document.querySelector(".sideBar");
var iconSideBar = document.querySelector(".sideBar-icon-info");
var imgSideBar = document.querySelector(".sideBar-img-block");
var nameSideBar = document.querySelector(".sideBar-info-name");
var infoSideBar = document.querySelector(".sideBar-info-detail-block");
var workSideBar = document.querySelector(".sideBar-info-work");

var content = document.querySelector(".content");

var activeSidebar = {
  widthSidebar: "20%",
  widthContent: "80%",
};

var hideSidebar = {
  widthSidebar: "8%",
  widthContent: "92%",
};

var isActiveSidebar = false;
var isActiveNavbar = false;

iconNavBar.addEventListener("click", () => {
  if (!isActiveNavbar) {
    titleNavBar.setAttribute("style", "display: flex");
    isActiveNavbar = true;
  } else {
    titleNavBar.setAttribute("style", "display: none");
    isActiveNavbar = false;
  }
});

iconSideBar.addEventListener("click", () => {
  if (!isActiveSidebar) {
    sideBar.setAttribute("style", `width: ${activeSidebar.widthSidebar}`);
    content.setAttribute(
      "style",
      `width: ${activeSidebar.widthContent}; margin-left: ${activeSidebar.widthSidebar}`
    );

    imgSideBar.setAttribute("style", "display: block");
    nameSideBar.setAttribute("style", "display: block");
    infoSideBar.setAttribute("style", "display: flex");
    workSideBar.setAttribute("style", "display: block");

    isActiveSidebar = true;
  } else {
    sideBar.setAttribute("style", `width: ${hideSidebar.widthSidebar}`);
    content.setAttribute(
      "style",
      `width: ${hideSidebar.widthContent}; margin-left: ${hideSidebar.widthSidebar}`
    );

    imgSideBar.setAttribute("style", "display: none");
    nameSideBar.setAttribute("style", "display: none");
    infoSideBar.setAttribute("style", "display: none");
    workSideBar.setAttribute("style", "display: none");

    isActiveSidebar = false;
  }
});
