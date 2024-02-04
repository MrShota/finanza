//  --------------------  carousel
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2').style.display = 'none';

function nextSlide(){
    if (slide1){
        slide1.style.display = 'none';
        console.log('1 works')
        slide2.style.display='flex';
        console.log('2 works')

    }

}

