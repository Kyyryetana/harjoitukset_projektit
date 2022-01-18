// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = "";
//
// // How do you keep the spaces between the words if I remve them from the array?
//
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent = greetingEl.textContent + sentence[i] + " ";
// }
// console.log(greetingEl);
function PankkiTili(tilinumero, saldo, omistaja) {
  this.tilinumero = tilinumero;
  this.saldo = saldo;
  this.omistaja = omistaja;

  otto: function(otto) {
    this.saldo = saldo - otto;
  }

  pano: function(pano) {
    this.saldo = saldo + pano;
  }

}
