<script>
  var number = 1;
  var level = 0;

  window.onload = function() {
    number = parseInt(window.localStorage.getItem("number"));
    level = parseInt(window.localStorage.getItem("level"));
  }

  function increment() {
    number += level;
    number += Math.floor(Math.random() * 6)
    if (number > level * 50) {
      number = level * 50;
    }
    if (number % 50 == 0) {
      level++;
    }

    window.localStorage.setItem("number", number.toString());
    window.localStorage.setItem("level", level.toString());

  }

  function reset() {
    window.localStorage.setItem("number", "0");
    window.localStorage.setItem("level", "0");

    location.reload();
  }
</script>

<u><h1>Welcome to my amazing game!</h1></u>
<h2>Click the button bellow to increment the number!</h2>
<h3>If you get to some milestones, you may get a reward!</h3>
<p>Number: {number}</p>
<p>Level: {level}</p>

<button on:click={increment}>🧠</button>
<button on:click={reset}>Reset Game</button>
