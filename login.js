function validateForm()
{
    let err = document.getElementById("errorMsg");
    let mailLocal = localStorage.getItem("mail");
    let pswdLocal = localStorage.getItem("pswd");

    let mail = document.getElementById('email').value;
    let pswd = document.getElementById('password1').value;

    if (mailLocal == mail)
    {
        if (pswdLocal == pswd)
        {
            err.innerText = "";
            err.style.display = "none";
            return true;
        }
        else
        {
            err.innerText = "Entered Password not matching with Local Storage";
            err.style.display = "block";
            return false;           
        }
    }
    else
    {
        err.innerText = "Entered Email not found in Local Storage";
        err.style.display = "block";
        return false;
    }
};