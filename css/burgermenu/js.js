function burgermenu (){
    let menu = document.querySelector ('.burger');
    let nav = document.querySelector ('.burger--menu');
    menu.addEventListener ('click', function addclass (){
        menu.classList.toggle ('active');
        nav.classList.toggle ('active');

    });

};

burgermenu ();