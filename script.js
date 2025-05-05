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

function restart(){
    hairCount = 1;
    shirtCount = 1;
    pantCount = 1;
    shoeCount = 1;
    document.getElementById("hairfrontImg").src = "images/clothes/hairF/hair00.png"
    document.getElementById("hairbackImg").src = "images/clothes/hairB/hairback01.png"
    shirtState = false;
    document.getElementById("shirtImg").style.opacity = "0%";
    document.getElementById("shirtImg").src = "images/clothes/shirts/shirt01.png"
    pantsState = false;
    document.getElementById("pantsImg").style.opacity = "0%";
    document.getElementById("pantsImg").src = "images/clothes/pants/pant01.png";
    shoesState = false;
    document.getElementById("shoesImg").style.opacity = "0%";
    document.getElementById("shoesImg").src = "images/clothes/shoes/shoes01.png";

    fixButtons();
}

function random(){
    shirtState = true;
    pantsState = true;
    shoesState = true;
    document.getElementById("shirtImg").style.opacity = "100%";
    document.getElementById("pantsImg").style.opacity = "100%";
    document.getElementById("shoesImg").style.opacity = "100%";

    hairCount = Math.floor((Math.random()*hairFArray.length));
    shirtCount = Math.floor((Math.random()*shirtArray.length));
    pantCount = Math.floor((Math.random()*pantArray.length));
    shoeCount = Math.floor((Math.random()*shoeArray.length));

    document.getElementById("hairfrontImg").src = hairFArray[hairCount];
    document.getElementById("hairbackImg").src = hairBArray[hairCount];
    document.getElementById("shirtImg").src = shirtArray[shirtCount];
    document.getElementById("pantsImg").src = pantArray[pantCount];
    document.getElementById("shoesImg").src = shoeArray[shoeCount];



}



function done(){

    const arrowHair = document.getElementById("arrow1");
    arrowHair.disabled = true;
    document.getElementById("arrow1").style.opacity = "0%";
    //
    const arrowShirt = document.getElementById("arrow2");
    arrowShirt.disabled = true;
    document.getElementById("arrow2").style.opacity = "0%";
    //
    const arrowpant = document.getElementById("arrow3");
    arrowpant.disabled = true;
    document.getElementById("arrow3").style.opacity = "0%";
    //
    const arrowShoe = document.getElementById("arrow4");
    arrowShoe.disabled = true;
    document.getElementById("arrow4").style.opacity = "0%";
    //
    //
    //
    document.getElementById("tag_hair").style.opacity = "0%";
    document.getElementById("tag_shirt").style.opacity = "0%";
    document.getElementById("tag_pant").style.opacity = "0%";
    document.getElementById("tag_shoe").style.opacity = "0%";
    //
    const button = document.getElementById("button");
    button.disabled = true;
    document.getElementById("button").style.opacity = "0%";
    //
    const random = document.getElementById("random_button");
    random.disabled = true;
    document.getElementById("random_button").style.opacity = "0%";
}

function fixButtons(){
    const arrowHair = document.getElementById("arrow1");
    arrowHair.disabled = false;
    document.getElementById("arrow1").style.opacity = "100%";
    //
    const arrowShirt = document.getElementById("arrow2");
    arrowShirt.disabled = false;
    document.getElementById("arrow2").style.opacity = "100%";
    //
    const arrowpant = document.getElementById("arrow3");
    arrowpant.disabled = false;
    document.getElementById("arrow3").style.opacity = "100%";
    //
    const arrowShoe = document.getElementById("arrow4");
    arrowShoe.disabled = false;
    document.getElementById("arrow4").style.opacity = "100%";
    //
    //
    //
    document.getElementById("tag_hair").style.opacity = "100%";
    document.getElementById("tag_shirt").style.opacity = "100%";
    document.getElementById("tag_pant").style.opacity = "100%";
    document.getElementById("tag_shoe").style.opacity = "100%";
    //
    const button = document.getElementById("button");
    button.disabled = false;
    document.getElementById("button").style.opacity = "100%";
    //
    const random = document.getElementById("random_button");
    random.disabled = false;
    document.getElementById("random_button").style.opacity = "100%";
}