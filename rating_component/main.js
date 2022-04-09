const ratingButtons = document.querySelector('.body-box').childNodes

const headerbox = document.querySelector('.header-box')
const bodyBox = document.querySelector('.body-box')
const footerBox = document.querySelector('.footer-box')
const ratingBox = document.querySelector('#ratingBox')

const submitButton = document.querySelector('#submit')

const rateBox = document.createElement('div')
const img = document.createElement('img')
const smallBox = document.createElement('div')
const h2 = document.createElement('h2')
h2.innerText = "Thank you!"
const p = document.createElement('p')
p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch."
rateBox.classList.add('submit-box')
img.src = "src/images/illustration-thank-you.svg"
rateBox.append(img)
rateBox.append(smallBox)
rateBox.append(h2)
rateBox.append(p)



ratingButtons.forEach(element => {
  element.addEventListener('click', function(e) {
    if(document.querySelector('.button-active')) {
      document.querySelector('.button-active').classList.remove('button-active')
    }
    smallBox.textContent = `You selected ${e.target.textContent} of 5`
    smallBox.classList.add('rate-number')
    e.target.classList.add('button-active')
  })
});

submitButton.addEventListener('click', function() {
  ratingBox.removeChild(headerbox)
  ratingBox.removeChild(bodyBox)
  ratingBox.removeChild(footerBox)
  ratingBox.append(rateBox)
})
