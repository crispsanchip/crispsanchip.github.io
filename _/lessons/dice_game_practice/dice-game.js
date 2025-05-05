// ----- USERNAME INTERACTIVITY ----- //

function inputName(id) {
    id.style.backgroundColor = "white";
    id.style.color = "black";
}

function generateName(){
    const firstName = ["Shah", "Lara", "Master", "Zelda", "Isaac", "Karlach", "Murder", "Messr.", "James"];
    const lastName = ["Rukh-Khan", "Croft", "Chief", "of Hyrule", "Clarke", "Cliffgate", "Bot", "Storm", "Tender", "Howlette"];

    let inputName = document.getElementById('username')

    let userName = `${firstName[Math.floor(Math.random()*9)]} ${lastName[Math.floor(Math.random()*10)]}`;
    
    inputName.value = userName;
    inputName.style.backgroundColor = "white";
    inputName.style.color = "black";
}

function saveName(){

    let welcome = document.getElementById('welcome');
    let inputName = document.getElementById('username');
    let diceRoll = document.getElementById('diceRoll');


    if(inputName.value == null || inputName.value == "Character's Name" || inputName.value == "Please provide a a valid name"){
        inputName.style.backgroundColor = "white";
        inputName.style.color = "red";
        inputName.value = "Please provide a a valid name";
        diceRoll.style.disply = 'none';
    } else {
        welcome.innerHTML = `Welcome ${inputName.value}`;
    }
    

}

// --------------------------------- //

// ----- START DICE ROLL ----- //

function diceRoll(id){

    let diceRoll = Math.floor(Math.random() * 20) + 1;
    let diceSVG = document.getElementById('dice');
    let inputName = document.getElementById('username');


    if(inputName.value == null || inputName.value == "Character's Name" || inputName.value == "Please provide a a valid name"){
        alert("Please provide a suitable name.")
    } else if(welcome.innerHTML == ""){
        alert("Please press save to continue!");
    } else {
        id.innerHTML = diceRoll

        if(diceRoll == 1){
            diceSVG.style.stroke = "red";
            diceSVG.style.strokeWidth = 5;
            id.innerHTML = `CRITICAL FAILURE <br> ${diceRoll}`
        } else if(diceRoll == 20){
            diceSVG.style.stroke ="green";
            diceSVG.style.strokeWidth = 5;
            id.innerHTML = `CRITICAL SUCCESS <br> ${diceRoll}`
        } else {
            id.innerHTML = diceRoll;
            //diceSVG.style.stroke = "white";
            diceSVG.style.strokeWidth = 1;
        }

        narrativeOutcome(diceRoll);
    }

    

}

// --------------------------- //

function narrativeOutcome(dice) {

    let outcome = document.getElementById("outcome")

    if(dice == 1) 
    {
        outcome.innerHTML =  `You rolled a ${dice} <p>Critical Failure <br/> You get so mad that you walk into the dragon's fire and you ask why do you do this?</p>`
    }

    else if(dice >= 2 && dice <= 11)

        {
            outcome.innerHTML =  `You rolled a ${dice} <p>You realize that you're in Skyrim and you hate it. You really wanted to be in Fallout.</p>`
        }

    else if(dice >=12 && dice <= 19 )
    {
        outcome.innerHTML =  `You rolled a ${dice} <p>You're in Skyrim, and you've played this game sooo many times it's modded and you're already trying to break it.</p>`
    }

    else if(dice == 20)
    {
       outcome.innerHTML =  `You rolled a ${dice} <p><b>Critical Success<b><br/><p>You turn off your PC/Xbox/Switch/PS/Fridge</p>`
    }
}