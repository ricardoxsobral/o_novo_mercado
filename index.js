/*CONTADOR*/
var FutureDate = new Date("April 01, 2022 23:59").getTime();
var days, hours, minutes, seconds;
setInterval(function(){
    var ActualDate = new Date().getTime();
    var TotalSeconds = (FutureDate - ActualDate)/1000;
    days = parseInt(TotalSeconds/86400); /*86400 segundos é equivalente a 1 dia*/
    TotalSeconds = TotalSeconds%86400; /*a porcentagem serve para eu retirar os segundos restantes*/

    hours = parseInt(TotalSeconds/3600); /*3600 segundos é equivalente a 1 hora*/
    TotalSeconds = TotalSeconds%3600;

    minutes = parseInt(TotalSeconds/60); /*60 segundos é equivalente a 1 minuto*/
    seconds = parseInt(TotalSeconds%60);
    
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    console.log(seconds)
},1000);
/*CONTADOR*/
/*ACCORDIOM*/
    var questions = document.querySelectorAll(".questions");
    questions.forEach(question => {
        question.addEventListener("click", () =>{
            question.classList.toggle("active");
        });
    });
/*ACCORDIOM*/
/*POPUP*/
    var btn = document.getElementById("button1");
    btn.addEventListener("click", function(){
        var popup = document.getElementById("popup");
        popup.style.display = "flex";
    });
    
    var btn = document.getElementById("button2");
    btn.addEventListener("click", function(){
        var popup = document.getElementById("popup");
        popup.style.display = "flex";
    });

    var btn = document.getElementById("button3");
    btn.addEventListener("click", function(){
        var popup = document.getElementById("popup");
        popup.style.display = "flex";
    });

    var btnout = document.getElementById("bton-out");
    btnout.addEventListener("click", function(){
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    });
         
/*POPUP*/