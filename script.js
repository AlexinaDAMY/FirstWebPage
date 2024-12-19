
///////////////////////////////////////////
//    PLANTS RECORDS BEHAVIOUR
///////////////////////////////////////////

// Two loops for applied only to the active plant record : close all active tabs & remove the active status

function informationType(evt, information,plant) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) { 
  if (tabcontent[i].classList.contains(plant)){
    tabcontent[i].style.display = "none";
  }}
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  if (tablinks[i].classList.contains(plant)){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace("activated", ""); //TODO : Chose the used class between active and activated
  }}
  document.getElementById(information).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.className += " activated";
}




///////////////////////////////////////////
// TOP BANNER BEHAVIOUR
///////////////////////////////////////////

var banniereHeight, inner, banniere;
    banniereHeight = 75;
    inner = document.getElementsByClassName("inner");
    banniere = document.getElementsByClassName("banniere");


window.addEventListener("scroll", () => {
  var headlineHeight, headline,currentOpacity, banniereOffset;
      let scrollTop = window.scrollY; 
      headline = document.getElementsByClassName("headline");
      headlineHeight = headline[0].offsetHeight - banniereHeight; 
 

  currentOpacity= (1 - (scrollTop / headlineHeight))
  headline[0].style.opacity = currentOpacity;

  if (scrollTop > headlineHeight) {
    banniere[0].classList.add("scrolled");
  } else {
    banniere[0].classList.remove("scrolled");
  }

console.log(banniere[0].classList.contains("scrolled"))});




///////////////////////////////////////////
// PLANTS'S RECORDS BEHAVIOUR
///////////////////////////////////////////


// Close the report
function closeReport(report, buttonToDesactivate){   
  var reportSheet= document.getElementById(report),
      button=document.getElementById(buttonToDesactivate);
  reportSheet.style.display = "none"; 
  button.classList.remove("activated");
}

// The plant record button named "Plus d'informations" : open record if it's closed, else close the record

function openReport(report, defaultTab, clickedButton){
  var reportSheet= document.getElementById(report),
      openedTab= document.getElementById(defaultTab),
      button=document.getElementById(clickedButton);

  if (button.classList.contains("activated")){
    closeReport(report,clickedButton)
  }else{
    reportSheet.style.display = "block"; 
    openedTab.click();
    button.classList.add("activated");
}}

