var particle = new Particle();
var myDevice = "0000"; // Photon device ID
var myToken = "0000"; // Photon access token

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

// Add other JS for your smart device web app
