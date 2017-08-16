document.addEventListener('DOMContentLoaded', function (event) {

    var slideManager = document.querySelector('.main-slider-cnt');
    var counter = 4;
    var previousSlide = document.querySelector('.main-slider-prev');
    var nextSlide = document.querySelector('.main-slider-next');
    var sliders = document.querySelectorAll('.main-slider-slide');
    console.log(sliders);
    var slider = setInterval(next,5000);
    function next() {
        sliders[counter].className = 'main-slider-slide hidden';
        counter = (counter+1)%sliders.length;
        sliders[counter].className = "main-slider-slide"
    }


    slider;

    previousSlide.addEventListener('click',function (e) {
        e.preventDefault();
            slideManager.children[counter].classList.toggle('hidden');
            counter--;
            if(counter < 0){
                counter = 4;
            }
            slideManager.children[counter].classList.toggle('hidden');
    });


    nextSlide.addEventListener('click',function (e) {
        e.preventDefault();
        slideManager.children[counter].classList.toggle('hidden');
        counter++;
        if(counter > 4){
            counter = 0;
        }
        slideManager.children[counter].classList.toggle('hidden');
    })


});
