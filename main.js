document.addEventListener('DOMContentLoaded', () => {
  // Animate phones on first load
  const phones = document.querySelectorAll('.phone');
  phones.forEach((phone, index) => {
    setTimeout(() => {
      phone.style.opacity = '1';
      phone.style.transform = 'translateY(0)';
    }, index * 300); // Staggered animation
  });

  // Store user's visit in local storage
  if (!localStorage.getItem('visited')) {
    alert('Welcome to our crypto investment platform!');
    localStorage.setItem('visited', 'true');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Trigger animations on page load
  document.querySelectorAll('.fade-in').forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 300);
  });

  if (!localStorage.getItem('visited')) {
    alert('Welcome to the platform!');
    localStorage.setItem('visited', 'true');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Animation for features
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.style.opacity = '0.8';
      feature.style.transform = 'translateY(-5)';
    }, index * 300); // Staggered animation
  });

  // Newsletter subscription alert
  const inputvalueEl =document.getElementById("input-footer").value
  console.log(inputvalueEl)
  const subscribeButton = document.querySelector('.newsletter button');
  subscribeButton.addEventListener('click', () => {
       
 });
})

const navEL = document.querySelector("header")
const bottomEl = document.querySelector("#trusted-section")
window.addEventListener("scroll",()=>{
 if (window.scrollY > bottomEl.offsetTop + 270) {
   navEL.classList.add("active")
 }else{
   navEL.classList.remove("active")
 }
  console.log(bottomEl.offsetTop)


});
//form submit
const formEl =document.querySelector("#form")
formEl.addEventListener("submit",()=>{
  alert("Thanks For Subscribing")
})

