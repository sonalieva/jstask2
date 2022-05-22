let Bigbtn = document.getElementById('Bigsize');
let Smallbtn = document.getElementById('Smallsize');
let ColorBtn =document.getElementById('colorBtn')
var powBig = 5;

Bigbtn.onclick = function(){
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.fontSize = (powBig*4)+"px";}
        powBig++;
}
var powSml =100;
Smallbtn.onclick = function(){
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.fontSize = (powSml/4)+"px";}
        powSml--;
}

ColorBtn.onclick=function(){
    let colorvalue = document.getElementById('input').value;
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.color = colorvalue;}
}
