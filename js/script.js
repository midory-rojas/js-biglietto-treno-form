// Prendo tutti gli elementi

const form = document.getElementById("ticket-form");
const nameImput = document.getElementById("name");
const kmImput = document.getElementById("km");
const ageSelect = document.getElementById("age");
const ticketSection = document.getElementById("ticket-section");
const passengerName = document.getElementById("passenger-name");
const offer = document.getElementById("offer");
const carrozza = document.getElementById("carrozza");
const codice = document.getElementById("codice");
const price = document.getElementById("price");

//Dati a disposizione
// const scontoPerMenori = 20; // questa variabile RIMMARRA SEMPRE COSI
// onst scontoPerOver = 40; // questa variabile RIMMARRA SEMPRE COSI
const prezzoPerKm = 0.21; 

// Altri < 65 - 18 = nessuno sconto

// Form --> Event listener
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameImput.value.trim();
  const km = parseFloat(kmImput.value);
  const fasciaEta = ageSelect.value;
  ticketSection.classList.remove("d-none");

  let prezzoBiglietto = km * prezzoPerKm;
  let tipoSconto = "Biglietto Standart";

  // Appllico gli sconti

  if (fasciaEta === "minorenne") {
    prezzoBiglietto = prezzoBiglietto * 0.8;
    tipoSconto = "Sconto Minorenni - 20%";
  } else if (fasciaEta === "over65") {
    prezzoBiglietto = prezzoBiglietto * 0.6;
    tipoSconto ="Sconto Over 65 - 40%";
  }

  // Numeri casuali per la carroza

  const numeroCarrozza = Math.floor(Math.random() *10) + 1;
  const codiceCP = Math.floor(Math.random() * 90000) + 10000;

  passengerName.innerHTML = name;
  offer.innerHTML = tipoSconto;
  carrozza.innerHTML = numeroCarrozza;
  codice.innerHTML = codiceCP;
  price.innerHTML = prezzoBiglietto.toFixed(2) + `€`;

});

const cancelBtn = document.getElementById("cancel");

cancelBtn.addEventListener("click", function(){
  nameImput.value = "";
  kmImput.value = "";
  ageSelect.value = "maggiorenne";
  ticketSection.classList.add("d-none");
});
