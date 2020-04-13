function Slide(length,element,ImageArr){
    let i=0;
    function SlideIn(){
        i === length-1? i=0
        :i++;
        console.log(i);
        element.style.backgroundImage = "url("+ImageArr[i]+")";
        return i;
    }
    setInterval(function(){SlideIn()},3000);
    return;
};