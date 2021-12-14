const kortit = document.querySelectorAll('.kortti');

function flipKortti(){
  this.classList.toggle('flip');
}

(function shuffle(){
  kortit.forEach(kortti => {
    let random = Math.floor(Math.random() * 16);
    kortti.style.order = random;
  });
})();

kortit.forEach(kortti => kortti.addEventListener('click', flipKortti));
//
function parit() {
  var eka = first.flip[0];
  var toka = second.flip[1];
  if (eka === toka) {
    alert("parit");
  } else {
    alert("ei parit");
  }

}
