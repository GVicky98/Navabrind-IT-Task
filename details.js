
let welcome = document.getElementById("welcome");
let fn = localStorage.getItem("fn");

let v = setInterval(()=>{
    welcome.innerText = "Welcome " + fn + "!";

},100);

let profile = document.getElementById('details');
let gd = document.getElementById('getDetails');
let fnD = document.getElementById('firstname');
let lnD = document.getElementById('lastname');
let emailD = document.getElementById('email');
let mobnoD = document.getElementById('mobno');

gdFlag = true;
gd.onclick = ()=>{
    if (gdFlag == true)
    {
        profile.style.display = "flex";
        gdFlag = false;
        gd.innerText = "Hide Details";
        fnD.innerText = fn;
        lnD.innerText = localStorage.getItem("ln");
        emailD.innerText = localStorage.getItem("mail");
        mobnoD.innerText = localStorage.getItem("mobno");
    }
    else
    {
        profile.style.display = "none";
        gdFlag = true;
        gd.innerText = "Show Details";

    }

};