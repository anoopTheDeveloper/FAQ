const accordian = document.querySelectorAll('.accordian');
accordian.forEach((ele) =>{
    const answer = ele.querySelector('.answer');
    ele.addEventListener("click" , ()=>{
        answer.classList.toggle("active")
    })
    
   
})