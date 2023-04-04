const burgerTrigger = document.querySelectorAll(".burger__trigger");
const burgerBody = document.querySelectorAll(".burger__body");
let htmlBody = document.getElementsByTagName("body");
let subMenu = document.querySelectorAll(".header__nav-sub-menu")
let navItem = document.querySelectorAll(".header__nav-item")
const style = "active";
const contentWidth = "100vh";


burgerTrigger.forEach((item, i) => {
    burgerBody[i].style.height = "0";
    item.addEventListener("click", () => {
        if (!(style === "none")) { item.classList.toggle(style) };
        item.classList.contains("active")
            ? htmlBody[0].style.overflow = "hidden"
            : htmlBody[0].style.overflowY = "scroll";
        burgerBody[i].style.height === "0px"
            ? burgerBody[i].style.height = contentWidth
            : burgerBody[i].style.height = "0";
    });
    window.addEventListener("resize", () => {
        let pageWidth = document.documentElement.scrollWidth;
        if (pageWidth >= 1000) {
            burgerBody[i].style.height = "0";
            item.classList.remove("active")
        }
        if (!(item.classList.contains("active"))) htmlBody[0].style.overflowY = "scroll";

    })
});
navItem.forEach((nav) => {
    nav.addEventListener("click", (event) => {
        let currentItem = event.target.nextElementSibling
        if (typeof (currentItem) != 'undefined' && currentItem != null) { currentItem.classList.toggle("sub-menu-active"); }
    })
})
