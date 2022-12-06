function f1(){
    a=document.getElementById("pw");
    if(a.type=="password"){
        a.type="text";
        lock.innerText="lock_open";
    }else{
        a.type="password";
        lock.innerText="lock";
    }
}
function f2(){
    a=document.getElementById("pw1");
    if(a.type=="password"){
        a.type="text";
        lock1.innerText="lock_open";
    }else{
        a.type="password";
        lock1.innerText="lock";
    }
}
function f3(){
    a=document.getElementById("nm").value;
    b=document.getElementById("nm1").value;
    c=document.getElementById("mob").value;
    d=document.getElementById("dat").value;
    e=document.getElementById("pw").value;
    f=document.getElementById("pw1").value;
    if(!a){
        alert("Please Fill Your First Name");
        return false;
    }else if(!b){
        alert("Please fill your Last Name");
        return false;
    }else if(!c){
        alert("Please fill your Mobile Number");
        return false;
    }else if(!d){
        alert("Please fill your Date of Birth");
        return false;
    }else if(!e){
        alert("Please fill Password");
        return false;
    }else if(!f){
        alert("Please fill Password");
        return false;
    }else if(e!=f){
        alert("Password Mismatch");
        return false;
    }else{
        alert("Account Created Sucesssfully");
        window.location.href="Loginpage.html";
    }
}