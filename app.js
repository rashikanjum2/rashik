let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

if (nextDom && prevDom && carouselDom && listItemDom && thumbnailDom) {
    nextDom.onclick = function(){
        showSlider('next');
    }

    prevDom.onclick = function(){
        showSlider('prev');
    }

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runAutoRun = setTimeout(() =>{
        showSlider('next'); // Changed from nextDom.click() to prevent potential issues
    }, timeAutoNext);

    function showSlider(type){
        let itemSlider = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

        if (itemSlider.length === 0 || itemThumbnail.length === 0) return; // Prevents errors if no items exist

        if(type === 'next'){
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');
        }else{
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() =>{
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() =>{
            showSlider('next');
        }, timeAutoNext);
    }
}
