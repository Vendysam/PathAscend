const slides = document.querySelectorAll(".bcg");
const navButtons = document.querySelectorAll(".slider-navigation .nav-btn");

let currentIndex = 0;

// Function to update the active slide
function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    navButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
}

// Event listeners for navigation buttons
navButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index;
        updateSlide(index);
    });
});

// Auto-slide every 5 seconds (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}, 5000);



// SCROLL TO TOP
const calcScrollValue = () =>{
    const scrollProgress = document.getElementById("progress");

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight -
                     document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) /calcHeight);

    if (pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none"
    }

    //important
    scrollProgress.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background =`conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Form
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("contact-name").value;

    if (name.length === 0){
        nameError.innerHTML ='<i class="fa-solid fa-circle-exclamation" style="color: red;"></i>';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
nameError.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Write full name';  
      return false;
    };

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return  true;
};




function validateEmail() {
    const email = document.getElementById("contact-email").value;

   
    if (email.length === 0) {
        emailError.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: orange;"></i> Email is required';
        return false;
    }

   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Enter a valid email';
        return false;
    }

   
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i> ';
    return true;
};


function validateMessage() {
    const message = document.getElementById("contact-message").value;
    const required = 40;
    const left = required - message.length;



   
    if (left> 0) {
        messageError.innerHTML = `${left} more characters required`;
        return false;
    }

   
   
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i> ';
    return true;
};


function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false;
    }
}



document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});