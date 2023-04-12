const galleryButtons = document.querySelectorAll("[data-gallery-button]")


galleryButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        const galleryOffset = button.dataset.galleryButton === "next" ? 1 : -1
        const gallerySlides = button.closest(["[data-gallery]"]).querySelector("[data-gallery-slides]")
        const activeGallerySlide = gallerySlides.querySelector("[data-active]")
        let newIndex = [...gallerySlides.children].indexOf(activeGallerySlide) + galleryOffset;
        if(newIndex < 0 ) newIndex = gallerySlides.children.length - 1
        if(newIndex >= gallerySlides.children.length) newIndex = 0

        gallerySlides.children[newIndex].dataset.active = true;
        delete activeGallerySlide.dataset.active
    })
})