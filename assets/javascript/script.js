// Global-Scope variables
let scoreTextWin = document.getElementById('you-win');
let scoreTextLoose = document.getElementById('you-loose');
let drawText = document.getElementById('draw');
let empty = document.getElementById('user-pick');
let computerPick = document.getElementById('computer-pick');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');
let choicesArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/**
 * Function for the different buttons in the game and for the DOM to be loaded before the game begins.
 */

function selectHand() {
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName('buttons');

    for(let button of buttons) { 
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'play') {
                alert('Pick A Hand To Start The Game')
            } else {
                let option = this.getAttribute('data-type');
                empty.innerHTML = `${option}!!`;
                empty.style = 'opacity: 1';
                runGame(selectHand);
                
                }  
            })   
        }
    })

}

/**
 *  Function for making computer selecting a random choice. 
 */
function randomComputerChoice() { 
    let random = Math.floor(Math.random() * choicesArray.length);
    computerPick.textContent = `${choicesArray[random]}!!`;

    return choicesArray[random];   
}






/**
 * Function for defining what operator beats what.
 */
function runGame(selectHand) {
    let computerHand = randomComputerChoice();

    switch (selectHand + computerHand) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        case "lizardspock":
        case "spockrock":
            win(selectHand, computerHand);
            break;
        case "rocklizard":
        case "paperspock":
        case "scissorslizard":
        case "lizardpaper":
        case "spockscissors":
            win(selectHand, computerHand);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "spockpaper":
        case "lizardscissors":
        case "paperlizard":
            lose(computerHand, selectHand);
            break;
        case "lizardrock":      
        case "paperscissors":
        case "scissorsspock":
        case "rockspock": 
        case "spocklizard":
            lose(computerHand, selectHand);
            break;
        case "rockrock":
        case "lizardlizard":
        case "paperpaper":
        case "spockspock":
        case "scissorsscissors":
            draw(computerHand, selectHand);
            break;
        
    }
}



/**
 * Function to define what will happen when user wins
 */
function win(selectHand, computerHand) {
    let oldScore = parseInt(document.getElementById('score-point-you').innerText);
    document.getElementById('score-point-you').innerText = ++oldScore;
    scoreTextWin.style = 'opacity: 1'; 
    setTimeout(function() {scoreTextWin.style = 'opacity: 0'}, 500);
}

/**
 * Function to define what will happen when user looses
 */
function lose(selectHand, computerHand) {
    let oldScore = parseInt(document.getElementById('score-point-computer').innerText);
    document.getElementById('score-point-computer').innerText = ++oldScore;
    scoreTextLoose.style = 'opacity: 1';
    setTimeout(function() {scoreTextLoose.style = 'opacity: 0'}, 500);
}


/**
 * Function for when score is equal to draw.
 */
function draw(computerHand, selectHand) {
    drawText.style = 'opacity: 1';
    setTimeout(function() {drawText.style = 'opacity: 0'}, 500);
}

/**
 * Function for when user clicks on the different hands in the game.
 */
function main() {
        
        rock.addEventListener('click', function() {
        runGame("rock");
    })

        paper.addEventListener('click', function() {
        runGame("paper");
    })

        scissors.addEventListener('click', function() {
        runGame("scissors");
    })

        lizard.addEventListener('click', function() {
        runGame("lizard");
    })

        spock.addEventListener('click', function() {
        runGame("spock");
    })
    selectHand();


}
main();

/**
 *  Function for sending email
 */

 function sendEmailForm(params) {
     var emailParameters = {
         from_name: document.getElementById('fromName').Value,
         to_name: document.getElementById('toName').value,
         message: document.getElementById('message').value
     };

     emailjs.send('jacobsgmail', 'template_sq8kkwq', emailParameters)
     .then(function(res){
         console.log("email sent", res.status);
     })

 }

