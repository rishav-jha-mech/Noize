var i=0;
function show(){
    if(i==0){
    i++;
    
    document.getElementById("bg1").style.backgroundColor="black";
    document.getElementById("mobLinks").style.display="flex";
    document.getElementById("mobhide").style.display="none";
    document.getElementById("smh1").classList.remove('fa-bars');
    document.getElementById("smh1").classList.add('fa-times');
}
    else if(i==1){
    i--;
    document.getElementById("bg1").style.background="url('images/bgx.jpg')";
    document.getElementById("bg1").style.height="100vh";
    document.getElementById("bg1").style.backgroundPosition="center";
    document.getElementById("bg1").style.backgroundSize="cover";
    document.getElementById("mobLinks").style.display="none";
    document.getElementById("mobhide").style.display="flex";
    document.getElementById("smh1").classList.remove('fa-times');
    document.getElementById("smh1").classList.add('fa-bars');
}
}
function send(){

document.getElementById("send").innerHTML="Sent !";
document.getElementById("send").style.background="orangered";
}