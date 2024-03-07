
function hide() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but2");
     x.style.display="block";
     y.style.display="none";    
}
function hide2() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but4");
     x.style.display="none";
     y.style.display="block";
}
function hide3() {
    const x = document.getElementById("but4");
    const y = document.getElementById("but2");
     x.style.display="none";
     y.style.display="none";
}
function show1() {
    const x = document.getElementById("click");
    const y = document.getElementById("first");
     x.style.display="none";
     y.style.display="block"; 
     document.getElementById("audio3").play();
}
function show() {
    const x = document.getElementById("first");
    const y = document.getElementById("form1");
    const a = document.getElementById("but3");
    const b = document.getElementById("but4");
    a.style.display="none";
    b.style.display="none";
    x.style.display="none";
    y.style.display="block";  
}
function troll() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut3");
      x.style.display="none";
      y.style.display="block";
      document.getElementById("alert").innerHTML = "😒";
      document.getElementById("alert2").innerHTML = "Cậu mà tắt hay thoát là mình bùn lắm ó!";
      return false;
}
function troll1() {
    const x = document.getElementById("fbut3");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     y.style.display="block";
     return false;
}
function troll2() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     y.style.display="none";
     return false;
}
function inrel() {
    const x = document.getElementById("fbut1alt");
    const y = document.getElementById("fbut1");
    const z = document.getElementById("click");
    const c = document.getElementById("h23");
    const d = document.getElementById("h24");
    const v =  document.getElementById("fbut2");
    const b = document.getElementById("fbut2alt");
     b.style.display="none";
     z.style.display="none";
     y.style.display="none";
     c.style.display="none";
     d.style.display="block";
     v.style.display="inline";
     x.style.display="inline";
     document.getElementById("alert2").innerHTML = "";
     return false;
}
function inrel2() {
    document.getElementById("click").style.display="none";
    document.getElementById("yess").style.display="block";
    document.getElementById("form1").style.display="none";
    document.getElementById("audio3").pause();
    document.getElementById("audio").play();
    return false;
}
function trollalt() {
    document.getElementById("alert2").innerHTML="Sao cậu hong muốn, sẽ rất bất ngờ đấy!";
    alert("Sao cậu hong muốn, sẽ rất bất ngờ đấy!");
    return false;
}
