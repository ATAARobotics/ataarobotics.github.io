window.onload = function () {
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 76);
    });
    // Uncomment to enable background movement
    // window.addEventListener('scroll', () => {
    //     document.getElementById('about').style.backgroundPositionY = `${-window.pageYOffset}px`;
    // }, false)
}