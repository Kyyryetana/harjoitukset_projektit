// function javaScript() {
//   ika = parseInt(document.getElementById('ika').value);
//   var kouluikainen_alaraja = 7;
//   var kouluikainen_ylaraja = 16;
//   if (ika >= kouluikainen_alaraja && ika <= kouluikainen_ylaraja) {
//     document.getElementById('vastaus').innerHTML = "Olet kouluikäinen";
//   }
//   else {
//     document.getElementById('vastaus').innerHTML = "Et ole kouluikäinen!";
//   }
// }

function javaScript() {
  var kertoma = 1;
  luku = parseInt(document.getElementById('luku').value);
  for (var i = 1; i <= luku; i++) {
    kertoma = kertoma * i;
  }
  document.getElementById('vastaus').innerHTML = "Luvun " + luku + " kertoma on " + kertoma;
}
