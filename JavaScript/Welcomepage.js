setInterval(() => {
let a=new Date();
b=a.getHours()+" : "+a.getMinutes()+" : "+a.getSeconds();
c=a.toLocaleDateString();
document.getElementById('box').style.fontSize="50px";
document.getElementById('box').style.color="white";
document.getElementById('box').innerHTML=b+" \n "+c;
document.getElementById('box').style.textAlign="center";
},1000);