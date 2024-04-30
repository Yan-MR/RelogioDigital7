window.addEventListener('load', calcularTempo)
function calcularTempo(){
  let data = new Date();
  let numerodias =  data.getDay();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let ampm = hora >= 12 ? "PM" : "AM";
  let nomedias = ["DOM","SEG","TER","QUAR","QUI","SEX","SAB"];

hora = hora % 12;
hora = hora == 12 ? '12' : hora;
hora = hora < 10 ? '0' + hora : hora;
minuto = minuto < 10 ? '0' + minuto : minuto;

document.getElementById("dia").innerHTML = nomedias[numerodias];
document.getElementById("hora").innerHTML = hora;
document.getElementById("minuto").innerHTML = minuto;
document.getElementById("ampm").innerHTML = ampm;


setTimeout(calcularTempo, 200)
}