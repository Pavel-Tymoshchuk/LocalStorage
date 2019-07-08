let save = document.getElementById("save");
let show = document.getElementById("show");
let clear = document.getElementById("clear");

save.addEventListener('click',function(event){
    event.preventDefault();
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("surname", document.getElementById("surname").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("password", document.getElementById("password").value);
});

show.addEventListener('click', function(){
    event.preventDefault();
    let name= localStorage.getItem("name");
    let surname = localStorage.getItem("surname");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    alert(`name : ${name} , surname : ${surname} , email : ${email} , password : ${password} `);
});

clear.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
})