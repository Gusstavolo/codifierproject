let textAreaCripto = document.getElementById("criptografar-texarea");
let textAreaDescripto = document.getElementById("descriptografar-texarea");
var robotAnim = document.getElementById("robot");

function playAnim(){
    robotAnim.style.animation = "robotJump 2s";
    setTimeout(function() {
        robotAnim.style.animation = "";
    }, 950);
}

function clickButtonCripto() {
    playAnim();
 var txtValue = textAreaCripto.value;
 txtValue = txtValue.replace(/e/g, "long").replace(/i/g, "pouuyn").replace(/a/g, "ober").replace(/u/g, "udumb");
 textAreaDescripto.value = txtValue;

 
}

function clickButtonDescripto() {
    playAnim();
    var txtValueDes = textAreaDescripto.value;
    txtValueDes = txtValueDes.replace(/long/g, "e").replace(/pouuyn/g, "i").replace(/ober/g, "a").replace(/udumb/g, "u");
    textAreaDescripto.value = txtValueDes;
  
}
function buttonCopy() {
    var txtCopy = document.getElementById('descriptografar-texarea');
    txtCopy.select();
    document.execCommand('copy');
}

