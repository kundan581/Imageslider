let nextBtn = document.querySelector('.next')   // Next button ko select kar rahe hain


let prevBtn = document.querySelector('.prev')   // Previous button ko select kar rahe hain


let slider = document.querySelector('.slider')   // Slider ka main container


let sliderList = slider.querySelector('.list')
   // Slider ke andar image list container


let thumbnail = document.querySelector('.slider .thumbnail')   // Thumbnail container


let thumbnailItems = thumbnail.querySelectorAll('.item')   // Saare thumbnail items select kar rahe hain

// First thumbnail ko last me bhej dete hain
// Taaki initial layout match kare animation ke saath
thumbnail.appendChild(thumbnailItems[0])


// ================= NEXT BUTTON FUNCTION =================

// Jab next button click ho
nextBtn.onclick = function() {
    moveSlider('next')   // moveSlider function call with 'next'
}


// ================= PREV BUTTON FUNCTION =================

// Jab prev button click ho
prevBtn.onclick = function() {
    moveSlider('prev')   // moveSlider function call with 'prev'
}


// ================= MAIN SLIDER FUNCTION =================

function moveSlider(direction) {

   
    let sliderItems = sliderList.querySelectorAll('.item')    // Saare slider ke items (main images)

    // Saare thumbnail ke items
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')   // Saare thumbnail ke items
    
    
    if(direction === 'next'){           // Agar next button click hua


        sliderList.appendChild(sliderItems[0])           // First slide ko last me bhej do

  
        thumbnail.appendChild(thumbnailItems[0])         // First thumbnail ko bhi last me bhej do

   
        slider.classList.add('next')        // Slider me 'next' class add karo (CSS animation ke liye)

    } 
    // Agar prev button click hua
    else {

   
        sliderList.prepend(sliderItems[sliderItems.length - 1])     // Last slide ko first me le aao

    
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])     // Last thumbnail ko bhi first me le aao

    
        slider.classList.add('prev')    // Slider me 'prev' class add karo (CSS animation ke liye)
    }


    // ================= ANIMATION END HANDLING =================

    slider.addEventListener('animationend', function() {

        // Animation khatam hone ke baad class hata do
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }

    }, {once: true}) 
    // {once: true} ka matlab:
    // Event listener sirf ek baar chalega, fir auto remove ho jayega
}






