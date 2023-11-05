// functions that hide all screens & then show a specific screen
// these functions also update navigation menu to highlight active screen
function showScreen1() {
  $(".screen").hide();
  $("#screen1").show();
  $(".menu").removeClass("active");
  $(".menu").eq(0).addClass("active"); // eq(0) = 1st menu item
}

function showScreen2() {
  $(".screen").hide();
  $("#screen2").show();
  $(".menu").removeClass("active");
  $(".menu").eq(1).addClass("active"); // eq(1) = 2nd menu item
}

function showScreen3() {
  $(".screen").hide();
  $("#screen3").show();
  $(".menu").removeClass("active");
  $(".menu").eq(2).addClass("active"); // eq(2) = 3rd menu item
}

function showScreen4() {
  $(".screen").hide();
  $("#screen4").show();
  $(".menu").removeClass("active");
  $(".menu").eq(3).addClass("active"); // eq(3) = 4th menu item
}

function showNotification() {
  // choose temporary or persistent notification
  // only use one - comment out unused option

  // temporary - closes automatically after delay (can also close manually)
  $("#notification").slideDown("fast").delay(5000).slideUp();

  // persistent - must close manually
  //$("#notification").slideDown("fast");
}


// Main function to retrieve and display the weather
//Asynchronously retreives weather and displays it
async function getAndDisplayWeather() {
    const weatherForecast = await retrieveWeather();
    displayWeather(weatherForecast);
  }
  
  // Function to retrieve the weather
  async function retrieveWeather() {
    //Send GET request to the meteo weather API. Await the response
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
  
    //Check if response failed, if so log an error and halt the app
    if (!response.ok) {
      console.error(`Status: ${response.status}`);
      console.error(`Text: ${await response.text()}`);
      return;
    }
  
    //return the parsed JSON from the response (which contains weather object)
    const data = await response.json();
    return data;
  }
  
  //test retrieveWeather with console.log();
  // console.log(retrieveWeather);
  
  // Function to update the DOM with the provided weather
  function displayWeather(weatherForecast) {
    const weatherMinTemp = document.getElementById("weatherMin");
    weatherMinTemp.textContent = `${weatherForecast.setup}`;
    const weatherMaxTemp = document.getElementById("weatherMax");
    weatherMaxTemp.textContent = `${weatherForecast.delivery}`;
    weatherMaxTemp.setAttribute("style", "color:rgb(2, 79, 2);");
    const laughIcon = document.getElementById("laugh");
laughIcon.setAttribute("style", "color:rgb(2, 79, 2);")
  }
  
  // Waits for the DOM to be fully loaded and then displays the weather
  document.addEventListener("DOMContentLoaded", getAndDisplayWeather);


  //reveals punchline of joke
 function revealPunchline () {
const punchline = document.getElementById("weatherMax");
punchline.setAttribute("style", "color:white;")
const laughIcon = document.getElementById("laugh");
laughIcon.setAttribute("style", "color:white;")
 }

  const punchlineButton = document.getElementById("punch__button")

  punchlineButton.addEventListener("click", revealPunchline);

  //brings new joke
  const newJokeButton = document.getElementById("joke__button")

  newJokeButton.addEventListener("click", getAndDisplayWeather);

  // Function to calculate the time remaining until Christmas
function countdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // Month is 0-indexed, so 11 is December
  
    // Calculate the time remaining until Christmas
    const difference = christmas - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    // Display the countdown
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
  
  // Update the countdown every second
  setInterval(countdown, 1000);
  
  // Initial call to display the countdown immediately when the page loads
  countdown();
  