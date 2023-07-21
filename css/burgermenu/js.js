function burgermenu (){
    let menu = document.querySelector ('.burger');
    menu.addEventListener ('click', function(){
        menu.classList.toggle ('active');
    });
};

burgermenu ();