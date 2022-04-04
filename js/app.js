const rates = document.querySelectorAll(".rate");
const submit = document.querySelector('.submit-btn');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const userRate = document.querySelector('.user-rate');

let userRated;

for (const rate of rates) {
    rate.addEventListener('click',function() {
        rate.classList.add('selected');
        userRate.textContent = rate.textContent;
        userRated = true;
        for (const r of rates) {
            if (r !== rate) r.classList.remove('selected')
        }
    })
  }

    submit.addEventListener('click',function(){
        if (userRated) {
            submit.classList.toggle('active-btn');
            ratingState.style.display =' none';
            thankYouState.style.display = 'block';
        } else {
            alert('please rate!')
        }
    })
