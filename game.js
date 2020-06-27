
function loadme() {
    alert('Welcome to Kanmi\'s pig game which is one of the best online, play and come back and give testimony...   Press "ok" to continue.');
}

  var name = prompt('What\'s your name?');
    alert('Thanks for visiting my site ' + name + '.');
    

function welcom() {
    alert('Hey Nsa, i\'m going to tell you a little secret about Kanmi. If you would like to know click okay');
};

function welcom2() {
    alert('He\'s going to allow you win the first game you guys will play, because he wants to see you smile at the thought of you winning him.')
};

//setTimeout(welcom, 4000);
//setTimeout(welcom2, 5000);


var scores, roundScore, activePlayer, dice, gamePlaying;
init();

//var lastDice;
/******** EVENTS AND EVENT HANDLING ***********/

document.querySelector('.btn-roll').addEventListener('click', function () {
    // generate a random number
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);


        // let the random number be displayed as the dice value
        var diceDom = document.querySelector('.dice')


        diceDom.style.display = 'inline';


        diceDom.src = '../dice-' + dice + '.png';
        // add the score to the round score
        roundScore += dice;
        document.querySelector('.current-score-' + activePlayer).textContent = roundScore;
        console.log(roundScore);

        // the player loses his turn by rolling a 1
        /* if (dice === 6 && lastDice === 6) {
            document.querySelector('.score-' + activePlayer).textContent = 0;
            scores[activePlayer] = 0;
            nextPlayer();
        } */

        // hide image when a player rolls a one 
        if (dice === 1) {
            nextPlayer();
        }
    } else {

    }
   // lastDice = dice;
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    // save the roundscore to the global score
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // check if global score is >= 100, declacre the winner
        if (scores[activePlayer] >= getInput()) {
           document.querySelector('.name-' + activePlayer).innerHTML = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
            setTimeout(click, 1000);
        } else {
            nextPlayer();
        }
    }  // 
})

document.querySelector('.btn-new').addEventListener('click', init);

function getInput() {
    var input = document.querySelector('.scoreboard').value;
    return input;

}

/********** FINISHING TOUCHES *************/




/************** CREATING A GAME INITIALIZATION FUNCTION **********/

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('.current-score-0').textContent = '0';
    document.querySelector('.current-score-1').textContent = '0';
    document.querySelector('.name-0').textContent = name;
    document.querySelector('.name-1').textContent = 'Frizz';
    document.querySelector('.name-0').classList.remove('active');
    document.querySelector('.name-1').classList.remove('active');
    document.querySelector('.name-0').classList.add('active');

    function display() {
       alert('Hey ' + name + ', you just clicked "new game", press "ok" to continue.')
    }
    setTimeout(display, 1400);

}


function nextPlayer() {
    document.querySelector('.dice').style.display = 'none';
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.current-score-0').textContent = '0';
    document.querySelector('.current-score-1').textContent = '0';

    document.querySelector('.name-0').classList.toggle('active');
    document.querySelector('.name-1').classList.toggle('active');
}



function click() {
    alert('And there we have our winner, CONGRATULATIONS!!!');
};

/*
document.querySelector('.btn-roll').addEventListener('click', function () {
    // generate a random number
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        // var dicey = Math.floor(Math.random() * 6) + 1;
        // let the random number be displayed as the dice value
        var diceDom = document.querySelector('.dice')
       // var diceyDom = document.querySelector('.dicey')
        diceDom.style.display = 'inline';
       // diceyDom.style.display = 'inline';
        diceDom.src = '../images/dice-' + dice + '.png';
        // diceyDom.src = 'images/dice-' + dicey + '.png';
        // add the score to the round score
        roundScore += dice;
        document.querySelector('.current-score-' + activePlayer).textContent = roundScore;
        console.log(roundScore);
        // the player loses his turn by rolling a 1
        // hide image when a player rolls a one
        if (dice === 1) {
            nextPlayer();
        }
    } else {
    }
})*/


var switchDirection = true;

function doAnimation() {
    var kanm = document.querySelector('.kanmi');
    var currentLeft = kanm.offsetLeft;
    var newLocation;

    if (switchDirection) {
        newLocation = currentLeft + 2;

        if (currentLeft >= 365) {
            switchDirection = false;
        }
    } else {
        newLocation = currentLeft - 2;

        if (currentLeft <= 90) {
            switchDirection = true;
        }
    }
    kanm.style.left = newLocation + 'px';
}

setInterval(doAnimation, 30);
