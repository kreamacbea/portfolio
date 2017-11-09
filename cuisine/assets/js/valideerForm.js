// formulier validatie
function valideerForm(){

  // initialiseer de var's
  var correct = true; // de scheidsrechter, houdt bij of er een fout is gemaakt
  var error = "Whoops, er is iets mis gegaan:\n"; // gebruiken voor eventuele errors
  //alert( "In de functie" );

  // haal de inhoud van het voornaamveld op...
  var voornaam = document.getElementById( "voornaam" ).value;
  var dvoornaam = document.getElementById( "voornaam" ).defaultValue;

  // valideer de inhoud van voornaam...
  if( voornaam.length <= 1 || voornaam == dvoornaam ){
    // als de conditie waar is, dus het is FOUT...
    correct = false;
    error += "Voornaam is verplicht\n"; // tel deze string op bij de error var
    document.getElementById( "voornaam_error" ).style.display = "inline";// zet de error span op de pagina aan
  } else {
    // als het GOED is...
    document.getElementById( "voornaam_error" ).style.display = "none";
  }

  // haal de inhoud van het achternaamveld op...
  var achternaam = document.getElementById( "achternaam" ).value;
  var dachternaam = document.getElementById( "achternaam" ).defaultValue;

  // valideer de inhoud van achternaam...
  if( achternaam.length <= 1 || achternaam == dachternaam ){
    // als de conditie waar is, dus het is FOUT...
    correct = false;
    error += "Achternaam is verplicht\n"; // tel deze string op bij de error var
    document.getElementById( "achternaam_error" ).style.display = "inline";// zet de error span op de pagina aan
  } else {
    // als het GOED is...
    document.getElementById( "achternaam_error" ).style.display = "none";
  }

  // valideer de inhoud van straatnaam
  var straat = document.getElementById( "straat" ).value;
  var dstraat = document.getElementById( "straat" ).defaultValue;

  if( straat == "" || straat == dstraat){
    // als de conditie waar is, dus als het FOUT is
    correct = false;
    error += "Straatnaam en huisnummer is verplicht\n"; // tel deze string op bij de error var
    document.getElementById( "straat_error" ).style.display = "inline";// zet de error span op de pagina aan
  } else {
    // als de conditie niet waar is...dus er is iets ingevuld
    document.getElementById( "straat_error" ).style.display = "none";
  }

  // haal de inhoud uit het postcodeveld
  var postcode = document.getElementById( "postcode" ).value;
  var dpostcode = document.getElementById( "postcode" ).defaultValue;

  // stuur de email var naar de functie valideerEmail...true of false antwoord
  var res = valideerPostcode( postcode );

  // valideer de inhoud van email
  if( !res || postcode == dpostcode ){
    // als de conditie waar is, dus als het FOUT is
    correct = false;
    error += "Postcode is verplicht\n"; // tel deze string op bij de error var
    document.getElementById( "postcode_error" ).style.display = "inline";// zet de error span op de pagina aan
  } else {
    document.getElementById( "postcode_error" ).style.display = "none";
  }

  // haal de inhoud uit het plaatsnaamveld
  var plaats = document.getElementById( "plaats" ).value;
  var dplaats = document.getElementById( "plaats" ).defaultValue;

  // valideer de inhoud van plaatsnaam...
  if( plaats.length <= 1 || plaats == dplaats ){
    // als de conditie waar is, dus het is FOUT...
    correct = false;
    error += "Plaatsnaam is verplicht\n"; // tel deze string op bij de error var
    document.getElementById( "plaats_error" ).style.display = "inline";// zet de error span op de pagina aan
  } else {
    // als het GOED is...
    document.getElementById( "plaats_error" ).style.display = "none";
  }

  // valideer de inhoud van telefoonnummer
  var tel = document.getElementById( "tel" ).value;
  var dtel = document.getElementById( "tel" ).defaultValue;

  if( tel.length != 10 || tel == dtel ){ // als tel niet gelijk is aan 10 karakters...letters of cijfers
    // dus het is fout..
    correct = false;
    error += "Telefoonnummer moet 10-cijferig zijn\n";
    // voor de zekerheid de tweede foutmelding uitzetten
    document.getElementById( "tel_error2" ).style.display = "none";
    // presenteer de goede foutmelding
    document.getElementById( "tel_error" ).style.display = "inline";
  } else if( isNaN( tel ) ){ // is tel wel een nummer
    // dus het zijn geen cijfers
    correct = false;
    error += "Pannekoek, dit gaat niet werken. Hou je gewoon aan de regels!\n";
    // we zetten de eerste foutmelding uit
    document.getElementById( "tel_error" ).style.display = "none";
    // presenteer de goede foutmelding
    document.getElementById( "tel_error2" ).style.display = "inline";
  } else { // als het goed is
    // foutmeldingen verbergen
    document.getElementById( "tel_error2" ).style.display = "none";
    document.getElementById( "tel_error" ).style.display = "none";
  }

  // haal de inhoud uit het emailveld
  var email = document.getElementById( "email" ).value;
  var demail = document.getElementById( "email" ).defaultValue;

  // stuur de email var naar de functie valideerEmail...true of false antwoord
  var res = valideerEmail( email );

  // valideer de inhoud van email
  if( !res || email == demail ){
    // als de conditie waar is, dus als het FOUT is
    correct = false;
    error += "Een geldig e-mailadres is verplicht\n"; // tel deze string op bij de error var
    document.getElementById( "email_error" ).style.display = "inline";// zet de error span op de pagina aan
  } else {
    document.getElementById( "email_error" ).style.display = "none";
  }

  // als alles goed is verstuur dan het formulier
  if( !correct ){ // correct == false
    alert( error ); // eerst de alert, dan pas de return false
    return false;
  } else {
    return true; // verzend het formulier als er geen fouten zijn gemaakt
  }


} // sluit curly van valideerForm

// deze functie verwacht een argument, zonder arg zal de functie niets doen

// valideerPostcode( postcode );
function valideerPostcode( postcode ){

  var patroon = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
  return patroon.test( postcode );

}

// valideerEmail( email );
function valideerEmail( emailadres ){

  var patroon = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return patroon.test( emailadres );

}

// reset de foutmeldingen in de pagina als er op de reset knop geklikt wordt
function resetForm(){
  // zet de foutmeldingen uit
  document.getElementById( "voornaam_error" ).style.display = "none";
  document.getElementById( "achternaam_error" ).style.display = "none";
  document.getElementById( "straat_error" ).style.display = "none";
  document.getElementById( "postcode_error" ).style.display = "none";
  document.getElementById( "plaats_error" ).style.display = "none";
  document.getElementById( "tel_error" ).style.display = "none";
  document.getElementById( "tel_error2" ).style.display = "none";
  document.getElementById( "email_error" ).style.display = "none";
  // zet de textkleur en font style weer op default...grijs en italic
  document.getElementById( "voornaam" ).style.color = "#AAA";
  document.getElementById( "voornaam" ).style.fontStyle = "italic";
  document.getElementById( "achternaam" ).style.color = "#AAA";
  document.getElementById( "achternaam" ).style.fontStyle = "italic";
  document.getElementById( "straat" ).style.color = "#AAA";
  document.getElementById( "straat" ).style.fontStyle = "italic";
  document.getElementById( "postcode" ).style.color = "#AAA";
  document.getElementById( "postcode" ).style.fontStyle = "italic";
  document.getElementById( "plaats" ).style.color = "#AAA";
  document.getElementById( "plaats" ).style.fontStyle = "italic";
  document.getElementById( "tel" ).style.color = "#AAA";
  document.getElementById( "tel" ).style.fontStyle = "italic";
  document.getElementById( "email" ).style.color = "#AAA";
  document.getElementById( "email" ).style.fontStyle = "italic";
}

// als er een focus op het veld plaatsvind wis dan de defaultValue als die gelijk is aan de value
function wisText( veld ){
  if( veld.defaultValue == veld.value ){
    veld.value = "";
    veld.style.color = "#000";
    veld.style.fontStyle = "normal";
  }
}

function resetText( veld ){
  if( veld.value == "" ){
    veld.value = veld.defaultValue;
    veld.style.color = "#AAA";
    veld.style.fontStyle = "italic";
  }
}

// de anonieme functie die wordt aangeroepen door het onload event van de pagina
window.onload = function(){

  // als js aanstaat dan...
  document.getElementById( "formholder" ).style.display = "block";
  document.getElementById( "jsUit" ).style.display = "none";

  // bind de onsubmit en onreset aan het formulier
  document.getElementById( "form-club-cuisine" ).onsubmit = valideerForm;
  document.getElementById( "reset" ).onclick = function(){
    return confirm( "Weet je het zeker?" );
  };
  document.getElementById( "form-club-cuisine" ).onreset = resetForm;

  // bind de onfocus en onblur events aan de formfields
  document.getElementById( "voornaam" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "voornaam" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "achternaam" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "achternaam" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "straat" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "straat" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "postcode" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "postcode" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "plaats" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "plaats" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "tel" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "tel" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "email" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "email" ).onblur = function(){
    resetText( this );
  };

  // zet de default waardes van de velden neer
  document.getElementById( "voornaam" ).defaultValue = "bijv. Robert";
  document.getElementById( "achternaam" ).defaultValue = "bijv. Kranenborg";
  document.getElementById( "straat" ).defaultValue = "bijv. Egelenburg 150";
  document.getElementById( "postcode" ).defaultValue = "bijv. 1081 GK";
  document.getElementById( "plaats" ).defaultValue = "bijv. Amsterdam";
  document.getElementById( "email" ).defaultValue = "bijv. masterchef@cuisine.nl";
  document.getElementById( "tel" ).defaultValue = "bijv. 0204623939";

}
