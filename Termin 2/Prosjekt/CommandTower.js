
function visStartside(){
  main.innerHTML ="";
  kort.on("value",genererStartside);
}
function visKort(){
  main.innerHTML ="";
  kort.on("child_added",genererHTMLKort);
}
function visAlfabetisk(){
  main.innerHTML ="";
  kort.orderByChild("Navn").on("child_added",genererHTMLKort);
}
function visMpop(){
  main.innerHTML ="";
  kort.on("child_added",genererHTMLKort);
}
function visDyreste(){
  main.innerHTML ="";
  kort.orderByChild("Pris").limitToLast(10).on("child_added",genererHTMLKort);
}
function visBilligste(){
  main.innerHTML ="";
  kort.orderByChild("Pris").limitToFirst(10).on("child_added",genererHTMLKort);
}
