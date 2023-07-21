function go() {
    let box = document.querySelector ('.burger--box');
    let line = document.querySelector ('.burger--line');
    box.addEventListener ('click', function(){
        line.classList.toggle('active');
    });
    
}

go ();