
function onRegister()
{
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    let mail = document.getElementById('email').value;
    let mobno = document.getElementById('mobno').value;
    let p1 = document.getElementById('password1');
    let p2 = document.getElementById('password2');
    let p3 = "";
    let err = document.getElementById('passError');
    if (p1.value != p2.value)
    {
        err.style.display = "block";
        p1.type = "text";
        p2.type = "text";
        p2.focus;
        return false;
    }
    else
    {
        p3 = p2.value;
        err.style.display = "none";
        p1.type = "password";
        p2.type = "password";
        localStorage.setItem("fn",fn);
        localStorage.setItem("ln",ln);
        localStorage.setItem("mail",mail);
        localStorage.setItem("mobno",mobno);
        localStorage.setItem("pswd",p3);
        return true;
    }
};
