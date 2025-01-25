const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});




// swiper

    var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
   
    });



    ScrollReveal({ 
      reset: true,
      distance:'60px',
      duration:2500,
      delay:100
  
   });
   ScrollReveal().reveal('.categories' ,{ interval:100 });
   ScrollReveal().reveal('.products' ,{ interval:100 });
  





   window.onload=()=>{
    if(window.scrollY >80){
        document.querySelector('.navbar').classList.add('active');
    }else{
        document.querySelector('.navbar').classList.remove('active');
    }
    fadeOut();
}
   function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  function fadeOut(){
    setTimeout(loader,2000);
  }


  
    // login-signup form
    const formOpenBtn = document.querySelector("#form-open"),
    container = document.querySelector(".container"),
    formConatiner = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide =document.querySelectorAll(".pw_hide");

    formOpenBtn.addEventListener("click",()=> container.classList.add("show"))
    formCloseBtn.addEventListener("click",()=> container.classList.remove("show"));

    pwShowHide.forEach(icon => {
     icon.addEventListener("click",()=>{
      let getPwInput = icon.parentElement.querySelector("input");
    //   // console.log(getPwInput);
    //   if(getPwInput.type === "password"){
    //     getPwInput.type = "text";
    //     icon.classList.replace("bx-bx-hide" ,"bx-hide");
    //   }else{
    //     getPwInput.type = "password";
    //     icon.classList.replace( "bx-hide","bx-bx-hide");
    //   }
     })
    })

    signupBtn.addEventListener("click" ,(e) => {
      e.preventDefault();
      formConatiner.classList.add("active");
    });
   
    loginBtn.addEventListener("click" ,(e) => {
      e.preventDefault();
      formConatiner.classList.remove("active");
    });
   
  