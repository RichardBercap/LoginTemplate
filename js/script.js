//declaracion de variables
const formualrio=$("#formulario");
const clave=$("#calve");
const ci=$("#ci");
const cajaAlerta=$("#alerta");

var alerta;
//Definicion de funciones
var validar=function(c1,c2){
  if (c1==null && c2==null) {
    return false;
  }
  return true;
}

var empezar=function(){
  $("#formulario").on("submit", function(e){
     e.preventDefault();
    var aux=validar(clave,ci);
    if (aux) {
      alerta='<div class="alert alert-success"> <strong>Success!</strong> Los datos correctos. </div>';
    }else {

        alerta='<div class="alert alert-danger"><strong>Danger!</strong> Debes llenar los campos.</div>';

    }
    cajaAlerta.html(alerta);
  });

};

//ejecutamos el programa
$(document).on("ready", empezar());
