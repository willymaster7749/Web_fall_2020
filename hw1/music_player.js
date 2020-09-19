
var slider = document.getElementById("myRange")
var output = document.getElementById("value")

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(54, 214, 255)' + x + '%, rgb(130, 130, 130) ' + x + '%)';
    slider.style.background = color;
})
