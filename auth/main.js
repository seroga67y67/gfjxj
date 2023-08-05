
let longTxt = true
let PasTxt = true
let logTxt = $('#login').val()

let usersDB = JSON.parse(localStorage.getItem('usersDB')) || [];
// sognup ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
$('#signupBtn').click(function () {
    let newUser = {
        login: $('#login').val(),
        password: $('#password').val()
    };


  if(logTxt.length == 0 || pasTxt.length == 0 || logTxt.length == 0 && pasTxt.length == 0){
    longTxt = false
    
   }
    else if(logTxt.length >=1 && pasTxt.length >= 1){
        longTxt = true
    }


    logTxt = $('#login').val()  
    pasTxt = $('#password').val()
    $('#login').val('');
    $('#password').val('')
    let findUser = false;
    for (let el of usersDB) {
        if (el.login == newUser.login) {
            findUser = true;
        }
    }

    if (findUser == false && longTxt == true) {
        usersDB.push(newUser);

        localStorage.setItem('usersDB', JSON.stringify(usersDB))
        alert('Додано нового користувача');
    } else if(findUser == true && longTxt == true){
        alert('Нікнейм зайнятий');
    }
    else if (longTxt == false){
        alert('Ви не заповнили поля')
    }
})
// signin oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

let auth 
$('#signinBtn').click(function () {
    let candidate = {
        login: $('#login').val(),
        password: $('#password').val()
    };

    
    $('#login').val('');
    $('#password').val('');
    let findUser = false;
    for (let el of usersDB) {
        if (el.login == candidate.login && el.password == candidate.password) {
            findUser = true;
        }
    }
    if (findUser == true) {
        $('.wrap').css('display','none')
        $('.wrap2').css('display','flex')
        alert('gok')
    } else {
        alert('Невідомий користувач');
    }
})


    $('.wrap2').append(`<div class='userBox'>${JSON.stringify(usersDB.login)}</div>`);
    $('#taskInfo').val('');
   