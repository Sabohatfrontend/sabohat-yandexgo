let slideIndex = 1;

function plusSlide(n) {
    showSlider(slideIndex += n);
}

function showSlider(n) {
    const images = document.getElementsByClassName('subsciption-image');
    const buttonArrow = document.getElementsByClassName('button-arrow');
    buttonArrow[0].disabled = (n === 1) ? true : false;
    buttonArrow[1].disabled = (n === images.length) ? true : false;
    for (i = 0; i <= images.length; i++) {
        images[i].style.display = (i === n - 1) ? 'block' : 'none';
    }
}
