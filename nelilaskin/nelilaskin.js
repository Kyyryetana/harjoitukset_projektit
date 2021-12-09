var numero = '';
var luku = '';
var taulu = ['+','-','*','/','%'];
var index = 0;

function lisaa(luku)
{
<<<<<<< HEAD
  numero + numero = luku;
=======
  numero+= luku;
>>>>>>> 7bd3fe8f57675a374fa496c5c72f0fe82671eb7d
  document.getElementById('tulos').innerHTML = numero;
}

function laske()
{
  var indeksi, jono;
  if(numero.search("%") > 0)
  {
    jono = numero.split('%');
    numero = jono[0] * jono[1] / 100;
    document.getElementById('tulos').innerHTML = numero;
  }
  else{
    document.getElementById('tulos').innerHTML = eval(numero);
    numero = eval(numero);
  }
}
function tyhjenna()
{
  numero = '';
  document.getElementById('tulos').innerHTML = numero;
}

function poistaViimeisin()
{
  for(var i = 0; i < numero.length; i++)
  {
    for(var j = 0; j < taulu.length; j++)
    {
      if(numero[i] == taulu[j])
      {
        index = i;
      }
    }
  }
  numero = numero.substr(0, index);
  document.getElementById('tulos').innerHTML = numero;
}
