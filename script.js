let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

//////////////// menu /////////////////////////////


let menuList = document.getElementById("menu-list");

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "600px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

document.body.addEventListener('click', function(event) {
    // Check if the clicked element is not part of the menu button or menu list
    if (!event.target.closest(".menu-button") && !event.target.closest("#menu-list")) {
        menuList.style.maxHeight = "0px";
    }
});


 /////////////// testimonials/////////////////
// vars
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})


            let animationStarted = false;

window.addEventListener('scroll', function() {
    // Adjust this value to the scroll position where you want to start the animation
    const scrollTriggerValue = 5750; 

    // Check if the scroll position is greater than or equal to the trigger value and the animation hasn't started yet
    if (window.scrollY >= scrollTriggerValue && !animationStarted) {
        startCountAnimation('donation1', 6200, 100); 
        startCountAnimation('donation2', 80, 100); 
        startCountAnimation('donation3', 256, 100); 
        startCountAnimation('donation4', 620, 100); 
        animationStarted = true; // Set animationStarted to true to prevent re-triggering the animation
    }
});

}
  
// donation numbers increasing/////////////


function startCountAnimation(targetId, finalValue, duration) {
    let start = 0;
    const increment = finalValue / duration;
    const targetElement = document.getElementById(targetId);

    const interval = setInterval(function() {
        start += increment;
        targetElement.innerHTML = numberWithCommas(Math.ceil(start)) + '<span class="plus-icon">+</span>';

        if (start >= finalValue) {
            clearInterval(interval);
            targetElement.innerHTML = numberWithCommas(finalValue) + '<span class="plus-icon">+</span>';
        }
    }, 1000 / 60); // Adjust the interval for smoother animation
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// back top icon /////////////////////

window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-top');
    if (window.pageYOffset > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

document.getElementById('back-top').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
    });
});


