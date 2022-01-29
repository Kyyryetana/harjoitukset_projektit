const newYears = "1 Jan 2023";
function toteuta() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  let plop = newYearsDate - currentDate;
  document.getElementById('vastaus').innerHTML = plop;

}