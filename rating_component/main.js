const ratingButtons = document.querySelector('.body-box').childNodes

ratingButtons.forEach(element => {
  element.addEventListener('click', function(e) {
    if(document.querySelector('.button-active')) {
      document.querySelector('.button-active').classList.remove('button-active')
    }
    e.target.classList.add('button-active')
  })
});