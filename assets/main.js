let btn = document.getElementById("btn");
var text = "";
var i = 0;
let randomNumber = 0;
let life = getLife();

// getLife :: Void -> Number
function getLife() {
  return 10;
}

// hide :: Void -> Void
function hide() {
  document.getElementById("warn").style.zIndex = -2;
  document.getElementById("warn").style.opacity = 0;
}

// newGame :: Void -> Void
function newGame() {
  life = getLife();
  randomNumber = Math.floor(Math.random() * 30);
  document.getElementById("message").innerText = "Let guess the secret number!"
  clearAll();
}

// getNew :: Void -> Void
function getNew() {
  randomNumber = Math.floor(Math.random() * 30);
  life = getLife();
}

// clearAll :: Void -> Void
function clearAll() {
  var newt = "";
  document.getElementById("his").innerHTML = newt;
  text = "";
  i = 0;
}

btn.addEventListener("click", function() {
  if (life == 10) {
    clearAll();
  }

  setTimeout(() => {
    document.getElementById("dislike").className = 'ok';
    document.getElementById("like").className = 'ok';
  }, 600);

  const yourInput = parseInt(document.getElementById("anumber").value);

  if (life == 1 && yourInput != randomNumber) {
    document.getElementById("warn").style.zIndex = 2;
    document.getElementById("warn").style.opacity = 1;
  }


  console.log("You entered: ", yourInput);
  i++;

  if (yourInput < randomNumber) {
    life--;
    document.getElementById("message").innerHTML = "The secret number is larger! " + life + " lifes left!";
    document.getElementById("dislike").className = "dislike";
  } else if (yourInput > randomNumber) {
    life--;
    document.getElementById("message").innerHTML = "The secret number is smaller! " + life + " lifes left!";
    document.getElementById("dislike").className = "dislike";
  } else if (yourInput == randomNumber) {
    document.getElementById("like").className = "like";
    document.getElementById("message").innerHTML = "Congratulate, the secret number is " + yourInput + "!" +
      "<br>" + "The new secret number has generated, continue?";
    getNew();
    clearAll();
  }

  if (document.getElementById("anumber").value != "") {
    text += i + ". Guessed number: " + yourInput + "<br>";
    document.getElementById("his").innerHTML = text;
  }
  document.getElementById("anumber").value = "";
});


