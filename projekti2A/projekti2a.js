function lahetaVastaukset() {
  var yhteensa = 5;
  var pisteet = 0;
  var huom = 0;
  //
  var k1 = document.forms["kyselyLomake"]["k1"].value;
  var k2 = document.forms["kyselyLomake"]["k2"].value;
  var k3 = document.forms["kyselyLomake"]["k3"].value;
  var k4 = document.forms["kyselyLomake"]["k4"].value;
  var k5 = document.forms["kyselyLomake"]["k5"].value;
  //
  for (i = 1; i <= yhteensa; i++) {
    if (eval('k'+i) == null || eval('k'+i) == '') {
      alert('Et vastannut kysymykseen numero: ' + i);
      huom = 1;
    }
    if (huom == 1) return false;
  }
  //
  var vastaukset = ["b", "a", "d", "c", "d"];
  //
  for (j = 1; j <= yhteensa; j++) {
    if (eval('k'+j) == vastaukset[j-1]) {
      pisteet++;
    }
  }
  //
  var tulokset = document.getElementById("tulokset");
  alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensa);

  tulokset.innerHTML = 'Sait' + pisteet + 'pistettä, kun maksimi pistemäärä oli' + yhteensa;

}
