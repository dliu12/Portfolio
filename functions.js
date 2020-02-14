let i = 0;
function Slide(length,element,ImageArr){
    i === length-1? i=0
    :i++;
    console.log(i);
    element.style.backgroundImage = "url("+ImageArr[i]+")";
    return i;
};
