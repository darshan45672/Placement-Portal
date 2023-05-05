auth = () =>{
    var email = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    if(email == "Ajadmin@gmail.com" && pass == "admin123"){
        window.location.assign("home.html");
        alert("Login sucessfull!!");
    }else{
        alert("incorrect password or username!");
        return;
    }
}