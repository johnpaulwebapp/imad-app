//Change the text of the main text div
var element=document.getelementById('main-text'
);

element.innerHTML='New Value';

//Move the Images
var img =document.getelementById('img');
img.onclick=function (){
  img.style.marginLeft = '100px';
};
