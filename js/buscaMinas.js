alert("cdccccc");

var cuadro = document.getElementsByTagName('td');


function tipoDeCasilla(){
  var casilla = this.getAttribute("casilla");
  switch(casilla) {
    case "numero2":
    this.textContent = 2;
    break;
    case "numero1":
    this.textContent = 1;
    break;
    case "bomba":
    this.textContent = boom;
    bloqueoDePantalla();
    break;
    case "vacio":
    this.textContent = o;
    break;
    default:
  }
}
