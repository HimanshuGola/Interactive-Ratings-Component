const submitBtn = document.getElementById("submit-btn");
const thankYou = document.querySelector(".thankyou-container");
const ratingsCont = document.querySelector(".rating-container");
const userRating = document.querySelector("#user-rating");
const form = document.querySelector(".rating-form");
console.log(form)
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const stars = document.querySelector("input[name='stars']:checked").value;
    form.reset();
    ratingsCont.style.display = "none";
    thankYou.style.display = "flex";
    userRating.innerHTML = stars;
})