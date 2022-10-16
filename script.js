const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
//first we have to check if the navbar is showing on the screen or not
//if anyone click on the bar that means they are activating bar option or 
//it means the event is happening and if anyone click on hamburger then i want to run 
//function. if anyone clicks on the hamburger then i want to show the navbar
// and now we have to create this active class on the stylesheet
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}