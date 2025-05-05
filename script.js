let shirtState = false;
let pantsState = false;
let shoesState = false;

let hairCount = 1;
let shirtCount = 1;
let pantCount = 1;
let shoeCount = 1;

const shirtArray = ["images/clothes/shirts/shirt01.png", "images/clothes/shirts/shirt02.png", "images/clothes/shirts/shirt03.png", "images/clothes/shirts/shirts04.png", "images/clothes/shirts/shirts05.png", "images/clothes/shirts/shirts06.png", "images/clothes/shirts/shirts07.png", "images/clothes/shirts/shirts08.png"];
//import FirstImg from "./img/pexels-cátia-matos-1072179.jpg";
const pantArray = ["images/clothes/pants/pant01.png", "images/clothes/pants/pant02.png", "images/clothes/pants/pant03.png", "images/clothes/pants/pant04.png", "images/clothes/pants/pant05.png", "images/clothes/pants/pant06.png", "images/clothes/pants/pant07.png"];
const hairFArray = ["images/clothes/hairF/hair00.png", "images/clothes/hairF/hair01.png", "images/clothes/hairF/hair02.png", "images/clothes/hairF/hair03.png", "images/clothes/hairF/hair04.png", "images/clothes/hairF/hair05.png"];
const hairBArray = ["images/clothes/hairB/hairback01.png", "images/clothes/hairB/hairblank.png", "images/clothes/hairB/hairback02.png", "images/clothes/hairB/hairback03.png", "images/clothes/hairB/hairback04.png", "images/clothes/hairB/hairback05.png"];
const shoeArray = ["images/clothes/shoes/shoes01.png", "images/clothes/shoes/shoes02.png", "images/clothes/shoes/shoes03.png", "images/clothes/shoes/shoes04.png", "images/clothes/shoes/shoes05.png"];


///media/js/close.gif"

function nextShirt(){
    if(shirtState){
        if(shirtCount < shirtArray.length){
            //document.getElementById("shirtImg").innerHTML = shirtArray[shirtCount];
            document.getElementById("shirtImg").src = shirtArray[shirtCount];
            shirtCount++;
        } else if(shirtCount == shirtArray.length){
            shirtCount = 0;
            document.getElementById("shirtImg").src = shirtArray[shirtCount];
            shirtCount++;
        }

    }else{
        shirtState = true;
        document.getElementById("shirtImg").style.opacity = "100%";
        //document.getElementById("shirtImg").src = shirtArray[1];
    }
}

function nextShoes(){
    if(shoesState){
        if(shoeCount < shoeArray.length){
            //document.getElementById("shirtImg").innerHTML = shirtArray[shirtCount];
            document.getElementById("shoesImg").src = shoeArray[shoeCount];
            shoeCount++;
        } else if(shoeCount == shoeArray.length){
            shoeCount = 0;
            document.getElementById("shoesImg").src = shoeArray[shoeCount];
            shoeCount++;
        }

    }else{
        shoesState = true;
        document.getElementById("shoesImg").style.opacity = "100%";
        //document.getElementById("shirtImg").src = shirtArray[1];
    }
}

function nextPant(){
    if(pantsState){
        if(pantCount < pantArray.length){
            //document.getElementById("shirtImg").innerHTML = shirtArray[shirtCount];
            document.getElementById("pantsImg").src = pantArray[pantCount];
            pantCount++;
        } else if(pantCount == pantArray.length){
            pantCount = 0;
            document.getElementById("pantsImg").src = pantArray[pantCount];
            pantCount++;
        }

    }else{
        pantsState = true;
        document.getElementById("pantsImg").style.opacity = "100%";
        //document.getElementById("shirtImg").src = shirtArray[1];
    }
}

function nextHair(){
    if(hairCount < hairFArray.length){
        //document.getElementById("shirtImg").innerHTML = shirtArray[shirtCount];
        document.getElementById("hairfrontImg").src = hairFArray[hairCount];
        document.getElementById("hairbackImg").src = hairBArray[hairCount];
        hairCount++;
    } else if(hairCount == hairFArray.length){
        hairCount = 0;
        document.getElementById("hairfrontImg").src = hairFArray[hairCount];
        document.getElementById("hairbackImg").src = hairBArray[hairCount];
        hairCount++;
    }
}