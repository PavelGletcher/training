//классическое получение данных
/*
function checkForm(el) {
  var name = document.getElementById('name').value;
  console.log(name);
  return false;
}
*/
document.getElementById ('main-form').addEventListener("submit", checkForm);

function checkForm() {
  event.preventDefault();
  var el = document.getElementById ('main-form');

  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  if (name=="" || pass=="" || repass=="" || state=="")
    fail = "Заполните все поля";
    else if (name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
    else if (pass != repass)
    fail = "Пароль не совпадает";
    else if (pass.split("&").length > 1)
    fail = "Некорректный пароль";
    
    if (fail != ""){
      document.getElementById ('error').innerHTML = fail;

      return false;
    } else {
      alert ('ОК')
      // window.location = "" -- перенаправление
      return true; // при перенаправлении нужно поменять на false
    }
}


//document.getElementsByName ('button').add