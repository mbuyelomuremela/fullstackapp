/*
    Name: Mbuyelo Muremela
    Qualification: Bachelor of science, Informatics
    Email: mbuyelomuremela05@gmail.com
    Number: +27721816840
    Date Modified: 08/11/2024
*/

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const leftFigureImage = document.getElementById('left-image');
const centerFigureImage = document.getElementById('center-image');
const rightFigureImage = document.getElementById('right-image');


function advanceImagesToLeft(){
  
    const centerImage = centerFigureImage.src;
    centerFigureImage.src = rightFigureImage.src;
    rightFigureImage.src = leftFigureImage.src;
    leftFigureImage.src = centerImage;
}

function advanceImagesToRight(){
    
    const centerImage = centerFigureImage.src;
    centerFigureImage.src = leftFigureImage.src;
    leftFigureImage.src = rightFigureImage.src;
    rightFigureImage.src = centerImage;  
}


setInterval(advanceImagesToRight,5000)

const eventListeners = ()=>{

    if(leftArrow.addEventListener)
        leftArrow.addEventListener('click',advanceImagesToLeft,false);
    else if(leftArrow.attachEvent)
        leftArrow.attachEvent('onclick',advanceImagesToLeft);

    if(rightArrow.addEventListener)
        rightArrow.addEventListener('click',advanceImagesToRight,false);
    else if(rightArrow.attachEvent)
        rightArrow.attachEvent('onclick',advanceImagesToRight);
}


eventListeners()