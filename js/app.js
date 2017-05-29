var pantalla=document.getElementById("display"); //elemento pantalla de salida
var x="0"; //número en pantalla
var xi=1; //iniciar número en pantalla: 1=si; 0=no;
var coma=0; //estado coma decimal 0=no, 1=si;
var ni=0; //número oculto o en espera.
var op="no"; //operación en curso; "no" =  sin operación.

var calculadora = {
  init: function(){
  var self = this;
  var cero = document.getElementById("0");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var punto = document.getElementById("punto");
  var on = document.getElementById("on");
  var sign = document.getElementById("sign");
  var raiz = document.getElementById("raiz");
  var div = document.getElementById("dividido");
  var por = document.getElementById("por");
  var menos = document.getElementById("menos");
  var mas = document.getElementById("mas");
  var igual = document.getElementById("igual");

  cero.addEventListener("click", function(){
  self.numero("0");
  });
  cero.addEventListener("mousedown",function(){
  cero.setAttribute("style","transform:scale(0.90,0.90)")
  });
  cero.addEventListener("mouseout",function(){
  cero.setAttribute("style","transform:scale(1,1)")
  });
  uno.addEventListener("click", function(){
  self.numero("1");
  });
  uno.addEventListener("mousedown",function(){
  uno.setAttribute("style","transform:scale(0.90,0.90)")
  });
  uno.addEventListener("mouseout",function(){
  uno.setAttribute("style","transform:scale(1,1)")
  });
  dos.addEventListener("click", function(){
  self.numero("2");
  });
  dos.addEventListener("mousedown",function(){
  dos.setAttribute("style","transform:scale(0.90,0.90)")
  });
  dos.addEventListener("mouseout",function(){
  dos.setAttribute("style","transform:scale(1,1)")
  });
  tres.addEventListener("click", function(){
  self.numero("3");
  });
  tres.addEventListener("mousedown",function(){
  tres.setAttribute("style","transform:scale(0.90,0.90)")
  });
  tres.addEventListener("mouseout",function(){
  tres.setAttribute("style","transform:scale(1,1)")
  });
  cuatro.addEventListener("click", function(){
  self.numero("4");
  });
  cuatro.addEventListener("mousedown",function(){
  cuatro.setAttribute("style","transform:scale(0.90,0.90)")
  });
  cuatro.addEventListener("mouseout",function(){
  cuatro.setAttribute("style","transform:scale(1,1)")
  });
  cinco.addEventListener("click", function(){
  self.numero("5");
  });
  cinco.addEventListener("mousedown",function(){
  cinco.setAttribute("style","transform:scale(0.90,0.90)")
  });
  cinco.addEventListener("mouseout",function(){
  cinco.setAttribute("style","transform:scale(1,1)")
  });
  seis.addEventListener("click", function(){
  self.numero("6");
  });
  seis.addEventListener("mousedown",function(){
  seis.setAttribute("style","transform:scale(0.90,0.90)")
  });
  seis.addEventListener("mouseout",function(){
  seis.setAttribute("style","transform:scale(1,1)")
  });
  siete.addEventListener("click", function(){
  self.numero("7");
  });
  siete.addEventListener("mousedown",function(){
  siete.setAttribute("style","transform:scale(0.90,0.90)")
  });
  siete.addEventListener("mouseout",function(){
  siete.setAttribute("style","transform:scale(1,1)")
  });
  ocho.addEventListener("click", function(){
  self.numero("8");
  });
  ocho.addEventListener("mousedown",function(){
  ocho.setAttribute("style","transform:scale(0.90,0.90)")
  });
  ocho.addEventListener("mouseout",function(){
  ocho.setAttribute("style","transform:scale(1,1)")
  });
  nueve.addEventListener("click", function(){
  self.numero("9");
  });
  nueve.addEventListener("mousedown",function(){
  nueve.setAttribute("style","transform:scale(0.90,0.90)")
  });
  nueve.addEventListener("mouseout",function(){
  nueve.setAttribute("style","transform:scale(1,1)")
  });
  punto.addEventListener("click", function(){
  self.numero(".");
  });
  punto.addEventListener("mousedown",function(){
  punto.setAttribute("style","transform:scale(0.90,0.90)")
  });
  punto.addEventListener("mouseout",function(){
  punto.setAttribute("style","transform:scale(1,1)")
  });
  on.addEventListener("click", function(){
  self.borradoTotal();
  });
  on.addEventListener("mousedown",function(){
  on.setAttribute("style","transform:scale(0.90,0.90)")
  });
  on.addEventListener("mouseout",function(){
  on.setAttribute("style","transform:scale(1,1)")
  });
  sign.addEventListener("click", function(){
  self.opuest();
  });
  sign.addEventListener("mousedown",function(){
  sign.setAttribute("style","transform:scale(0.90,0.90)")
  });
  sign.addEventListener("mouseout",function(){
  sign.setAttribute("style","transform:scale(1,1)")
  });
  raiz.addEventListener("click", function(){
  self.raizc();
  });
  raiz.addEventListener("mousedown",function(){
  raiz.setAttribute("style","transform:scale(0.90,0.90)")
  });
  raiz.addEventListener("mouseout",function(){
  raiz.setAttribute("style","transform:scale(1,1)")
  });
  div.addEventListener("click", function(){
  self.operar('/');
  });
  div.addEventListener("mousedown",function(){
  div.setAttribute("style","transform:scale(0.90,0.90)")
  });
  div.addEventListener("mouseout",function(){
  div.setAttribute("style","transform:scale(1,1)")
  });
  por.addEventListener("click", function(){
  self.operar("*");
  });
  por.addEventListener("mousedown",function(){
  por.setAttribute("style","transform:scale(0.90,0.90)")
  });
  por.addEventListener("mouseout",function(){
  por.setAttribute("style","transform:scale(1,1)")
  });
  menos.addEventListener("click", function(){
  self.operar("-");
  });
  menos.addEventListener("mousedown",function(){
  menos.setAttribute("style","transform:scale(0.90,0.90)")
  });
  menos.addEventListener("mouseout",function(){
  menos.setAttribute("style","transform:scale(1,1)")
  });
  mas.addEventListener("click", function(){
  self.operar("+");
  });
  mas.addEventListener("mousedown",function(){
  mas.setAttribute("style","transform:scale(0.90,0.90)")
  });
  mas.addEventListener("mouseout",function(){
  mas.setAttribute("style","transform:scale(1,1)")
  });
  igual.addEventListener("click", function(){
  self.igualar();
  });
  igual.addEventListener("mousedown",function(){
  igual.setAttribute("style","transform:scale(0.90,0.90)")
  });
  igual.addEventListener("mouseout",function(){
  igual.setAttribute("style","transform:scale(1,1)")
  });

},

//mostrar número en pantalla según se va escribiendo:
numero: function(xx) { //recoge el número pulsado en el argumento.
      var cadena = document.getElementById("display").innerHTML;
        if (cadena.length < 8) {
           if (x=="0" || xi==1  ) {	// inicializar un número,
            pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {}

               //Resto de casos: escribir un número del 0 al 9:
                    else  {
                    pantalla.innerHTML+=xx;
                    x+=xx
                  }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
          }
         },

  operar: function(s) {
        this.igualar(); //si hay operaciones pendientes se realizan primero
        ni=x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
        op=s; //guardamos tipo de operación.
        xi=1; //inicializar pantalla.
        },

  igualar: function() {
        if (op=="no") { //no hay ninguna operación pendiente.
              pantalla.innerHTML=x;	//mostramos el mismo número
                     }
          else { //con operación pendiente resolvemos
              sl=ni+op+x; // escribimos la operación en una cadena
              sol=eval(sl); //convertimos la cadena a código y resolvemos
              pantalla.innerHTML=sol; //mostramos la solución
              x=sol; //guardamos la solución
              op="no"; //ya no hay operaciones pendientes
              xi=1; //se puede reiniciar la pantalla.
              }
        },

raizc: function() {
       x=Math.sqrt(x) //resolver raíz cuadrada.
       //pantalla.innerHTML=x; //mostrar en pantalla resultado
       pantalla.innerHTML=x.toPrecision(8);
       op="no"; //quitar operaciones pendientes.
       xi=1; //se puede reiniciar la pantalla
      },

opuest: function() {
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a cadena
         pantalla.innerHTML=x; //mostrar en pantalla.
       },

borradoTotal: function() {
         pantalla.innerHTML=0; //poner pantalla a 0
         x="0"; //reiniciar número en pantalla
         coma=0; //reiniciar estado coma decimal
         ni=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
       },

}
calculadora.init();
