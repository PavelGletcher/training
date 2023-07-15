document.querySelector('.btn--login').addEventListener('click', function(){
  document.querySelector('.wrapper').classList.add('wrapper-open')
})
document.querySelector('.wrapper-close_img').addEventListener('click', function(){
  document.querySelector('.wrapper').classList.remove('wrapper-open')
})