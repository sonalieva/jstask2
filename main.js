let btnBig = document.getElementById('sizeBig');
let btnSml = document.getElementById('sizeSmall');
let colorBtn =document.getElementById('colorBtn')
var powBig = 5;

btnBig.onclick = function(){
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.fontSize = (powBig*4)+"px";}
        powBig++;
}
var powSml =80;
btnSml.onclick = function(){
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.fontSize = (powSml/4)+"px";}
        powSml--;
}

colorBtn.onclick=function(){
    let colorvalue = document.getElementById('input').value;
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.color = colorvalue;}
}