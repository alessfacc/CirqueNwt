// Função para trocar imagens de fundo
    let currentBackground = 0;
    const backgrounds = document.querySelectorAll('.background-images img');

    function changeBackground() {
        backgrounds[currentBackground].classList.remove('active');
        currentBackground = (currentBackground + 1) % backgrounds.length;
        backgrounds[currentBackground].classList.add('active');
    }

    setInterval(changeBackground, 7000); // Troca de imagem a cada 7 segundos



    //menu hamburger
    let item1 = document.querySelector('.icon-hamburger');

    item1.addEventListener("click", function(){
      document.body.classList.toggle('menu-open1')
    });

    let item2 = document.querySelector('.show');

    item2.addEventListener("click", function(){
      document.body.classList.toggle('menu-open2')
    });


//popup
//document.querySelector("#open-popup").addEventListener("click", function(){
//  document.body.classList.add("active-popup");
//});

//document.querySelector(".popup .close-btn").addEventListener("click", function(){
//  document.body.classList.remove("active-popup");
//});



    //elements
    var elements_to_watch =document.querySelectorAll('.watch');
    //callback
    var callback = function(items){
      items.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("in-page");
        } else{
          item.target.classList.remove("in-page");
        }
      });
    }
    //observer
    var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
    //applay
    elements_to_watch.forEach((element) => {
      observer.observe(element);
    });