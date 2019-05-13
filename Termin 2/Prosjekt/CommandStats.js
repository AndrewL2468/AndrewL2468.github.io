const statBilde = document.querySelector("#statBilde");
const statInfo = document.querySelector("#statInfo");
const statVisning = document.querySelector("statVisning");
const main = document.querySelector("main");


//hente id fra url
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

const db = firebase.database();
const varer = db.ref("Prosjekt/Varer/Kort/" + id);
const kort = db.ref("Prosjekt/Varer/Kort");

function visStats(snapshot){
    let varer = snapshot.val();

    statBilde.innerHTML +=`
    <style>
      img{padding:10px;}
    </style>
        <article>
          <img src="bilder/${varer.Forsidebilde}" alt="2">
       </article>
    `
    statInfo.innerHTML +=`
    <article class="infoVare">
      <h1><strong>${varer.Navn}</strong></h1>
      <p>Farge: ${varer.Farge}</p>
      <p>Type: ${varer.Type}</p>
      <p>Pris: ${varer.Pris}$</p>
      <a><button id="leggTil" onclick="kjøpNå()">Kjøp Nå!</button></a>
      <a><button id="leggTil">Legg til handlekurv</button></a>
    </article>
    `

}

function kjøpNå(){
  alert("Varen har blit sendt.\nTakk for kjøpet.")
}
