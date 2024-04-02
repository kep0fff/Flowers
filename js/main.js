var swiper = new Swiper(".mySwiper__clients", {
    slidesPerView: 4,
    freeMode: true,

    navigation: {
        nextEl: '.button-right',
        prevEl: '.button-left',
      },
  });

  document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('app__submit');
    var applicationInner = document.querySelector('.application__inner');
    var formSubmitWin = document.getElementById('form__submit-win');
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      applicationInner.style.display = 'none';
      formSubmitWin.style.display = 'block';
    });
  
  });

  document.addEventListener('DOMContentLoaded', function() {
    var link1 = document.querySelector('.delivery__list-link1');
    var link2 = document.querySelector('.delivery__list-link2');
    var link3 = document.querySelector('.delivery__list-link3');
    var link4 = document.querySelector('.delivery__list-link4');
    var link5 = document.querySelector('.delivery__list-link5');
    var item1 = document.getElementById('item1');
    var item2 = document.getElementById('item2');
    var item3 = document.getElementById('item3');
    var item4 = document.getElementById('item4');
    var item5 = document.getElementById('item5');
  
    link1.addEventListener('click', function() {
      event.preventDefault()
      toggleItem(item1);
    });
  
    link2.addEventListener('click', function() {
      event.preventDefault()
      toggleItem(item2);
    });
  
    link3.addEventListener('click', function() {
      event.preventDefault()
      toggleItem(item3);
    });
  
    link4.addEventListener('click', function() {
      event.preventDefault()
      toggleItem(item4);
    });
  
    link5.addEventListener('click', function() {
      event.preventDefault()
      toggleItem(item5);
    });
  });
  
  function toggleItem(item) {
    item.classList.toggle('show');
  }
  