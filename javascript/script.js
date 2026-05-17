
/* =========================Hamburger Menu Section========================== */


const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");

hamburger.addEventListener("click", function(){

    menu.classList.toggle("active");

});

/* =========================FAQ Section========================== */
document.addEventListener("DOMContentLoaded", () =>  {
    const faqContainers = document.querySelector('.faq-content');
   
    faqContainers.addEventListener("click",  (e) => {
        const faqQuestion = e.target.closest('.faq-question');
        if(!faqQuestion) return;
  
        const faqItem = faqQuestion.parentElement;  
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const icon = faqQuestion.querySelector('i');


        /*       Toggle the display of the answer and the icon       ================================================== */
        
        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');

        /* Toggle visibility of other answers and reset icons       ================================================== */
        faqAnswer.classList.toggle('open');
        const allFaqItems = faqContainers.querySelectorAll('.faq-group');
        allFaqItems.forEach(item => {
            if(item !== faqItem){
                const answer = item.querySelector('.faq-answer');
                const itemIcon = item.querySelector('.faq-question i'); 

                answer.classList.remove('open');
                itemIcon.classList.remove('fa-minus');
                itemIcon.classList.add('fa-plus');
               
            }                       
        });


        
});
});

 // Form switching functionality
        function showSignup() {
            document.getElementById('loginForm').classList.remove("active");
            document.getElementById('signupForm').classList.add("active");
            document.getElementById('forgetForm').classList.remove("active");
            
          
        }

        function showLogin() {
            document.getElementById('loginForm').classList.add("active");
            document.getElementById('signupForm').classList.remove("active");
            document.getElementById('forgetForm').classList.remove("active");
            
         
        }

        function showForgotPassword() {
            document.getElementById('loginForm').classList.remove("active");
            document.getElementById('signupForm').classList.remove("active");
            document.getElementById('forgetForm').classList.add("active");
            
        }