import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");

form.addEventListener("submit", onFormSubmit)
function onFormSubmit(e) {
  e.preventDefault()

  let step = Number(stepEl.value)
  let amount = Number(amountEl.value)
  let delay = Number(delayEl.value)
  for( let position = 1; position <= amount; position +=1) { 
     createPromise(position, delay) 
    .then(i => Notify.success(i))
    .catch(i => Notify.failure(i))
    console.log(position);
    delay +=step
  }

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 1;
      console.log(shouldResolve);
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }

      return shouldResolve ? resolve(`✅ Fulfilled promise ${position} in ${delay}ms`) : reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay)
  })
  }



