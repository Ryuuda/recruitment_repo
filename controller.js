/**
 * Created by Jim on 2/23/2017.
 */

var blue = false;
function changeColor() {
    blue = !blue;
    console.log(blue)
    if(blue == true){
        document.getElementById('helloWorld').style.color = "yellow";
    }else{
        document.getElementById('helloWorld').style.color = "blue";
    }
}