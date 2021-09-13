function data(){
    const username = document.getElementById("uname").value;
    const password=document.getElementById("pass").value;
    console.log(username);
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
}