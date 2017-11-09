var imagePad = "images/dashboard/";
//  kent de browser afbeeldingen??
var canSwap = document.images? true : false;
// het geselecteerde plaatjes als de pagina geladen is
var selImage = 0;

// functie die de ene afbeelding 'swapt' voor een andere
function swapImage( welkPlaatje, waarin, imageId ){
  var plaatje = document.getElementById(welkPlaatje);
  if( canSwap ){ // als canSwap true is
    if( imageId != selImage ){ // als de imageId NIET GELIJK IS aan de selImage
      plaatje.src = imagePad + waarin;
    }
  }
}

// de afbeeldingen die ingeladen moeten worden
var plaatjesArray = [
  "Panigale_Final-Edition_dash.png",
  "Panigale_Final-Edition_dash_riding-modes.png",
  "Panigale_Final-Edition_dash_dqs.png",
  "Panigale_Final-Edition_dash_dtc.png",
  "Panigale_Final-Edition_dash_ebc.png",
  "Panigale_Final-Edition_dash_dwc.png",
  "Panigale_Final-Edition_dash_abs.png"];

var ingeladenPlaatjes = new Array();

// functie voor het preloaden van de afbeeldingen die nog niet in de pagina staan maar wel gebruikt gaan worden
function preloadImages(){
  if( canSwap ){
    for( var i = 0; i < plaatjesArray.length; i++ ){
      // maak een virtueel plaatje aan
      ingeladenPlaatjes[i] = new Image();
      // ken daar een src aan toe
      ingeladenPlaatjes[i].src = imagePad + plaatjesArray[i];
    }
  }
}

function veranderContent( div, imageId ){

  var divs = [ "riding-modes", "dqs", "dtc", "ebc", "dwc", "abs" ];

  // tonen van de goede div en verbergen van alle andere
  for( var i =0; i < divs.length; i++ ){
    // selecteer een div uit de array op de pagina
    var obj = document.getElementById(divs[i]);
    // als de div uit de array gelijk is aan de doorgestuurde div
    if( div == divs[i] ){
      // zet die div dan op display block
      obj.style.display = "block";
    } else {
      // zet alle andere divs uit
      obj.style.display = "none";
    }
  }
}

window.onload = function(){
  preloadImages();
  veranderContent( "riding-modes", 0 );
}
