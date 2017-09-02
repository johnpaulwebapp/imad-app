//Change the text of the main text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Move the Images
var img = document.getElementById('modi');
var marginLeft = 0;
function moveRight (){
  marginLeft = marginLeft+10;  
  img.style.marginLeft = marginLeft+'px';
}
img.onclick=function (){
  img.style.marginLeft = '100px';
  var interval = setinterval(moveRight, 100);
};
