function f1(){
    a=document.getElementById('pw')
    if(a.type=="password"){
        a.type="text";
      lock.innerText="lock_open";
    }else{
        a.type="password";
        lock.innerText="lock";
    }
}