var counter = 0;
function changeImage(){
    if(counter % 3 == 0){
        document.getElementById("image").src= "bunny.jpeg";
        counter++;
    }
    else if(counter % 3 == 1){
        document.getElementById("image").src = "dog1.jpeg";
        counter++;
    }
    else{
        document.getElementById("image").src = "duck2.png";
        counter++;
    }

}
document.getElementById("button").addEventListener("click", changeImage);