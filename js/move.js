
var timer = null, move = false, f = false;var inix;var contline; var ultimaline = 1; var iniy; var movcos = false;
   var wdthtamanio;
   var wdthnumlinea;
function moveconsole(){
   this.largo=function(){
   	var largo=window.innerHeight || document.documentElement.clientheight || document.body.clientheight;
   	return largo;
   };
   this.move=function(){
   	  var mv=function(){
   	  	 var evento=evento || window.event;
        switch(evento.type){
        case 'mousedown':
           iniy=event.clientY;
           puntoyx=(event.clientY);
           eleconsole=document.getElementById("console");
           objeconsole = parseInt(window.getComputedStyle(eleconsole, null).getPropertyValue("height"));
           movcos=true;

        break;
        case 'mouseup':
                movcos=false;
        break;
        //establece  largo de los campo consola al activar el evento mousemove
        case 'mousemove':
              var acy=event.clientY;
              if(acy<iniy){
                //document.getElementById("c2").innerHTML='Arriba'; solo para prueba
              }else{
                //document.getElementById("c2").innerHTML='Abajo'+lar; solo para prueba
              }

              if(movcos==true){
                //var pue=document.getElementById("c2").innerHTML;solo para prueba                  	
                var ventmenu=menuVent();                  
                document.getElementById("console").style.height=(puntoyx-(event.clientY-objeconsole))+'px';
                document.getElementById("conteditor").style.marginTop='-'+((puntoyx-(event.clientY-objeconsole))+ventmenu['hgtlargo'])+'px';
                document.getElementById("conteditor").style.paddingTop=((puntoyx-(event.clientY-objeconsole))+ventmenu['hgtlargo'])+'px';
                document.getElementById("capaar").style.marginTop='-'+(puntoyx-(event.clientY-objeconsole))+'px';
                document.getElementById("capaar").style.paddingTop=(puntoyx-(event.clientY-objeconsole))+'px';
               }else{                    
                };   
        break;
        case 'mouseleave':
           move=false;
        break;
   	  	 }
   	  };
   	  mv(lar);
   };
    
   this.hgthcosole=function(){
	 var hgtmenu=document.getElementById("menu");
	 var menu=parseInt(getComputedStyle(hgtmenu,null).getPropertyValue("height"));
	 var hgtventana=document.getElementById("ventana");
	 var ventana=parseInt(getComputedStyle(hgtventana,null).getPropertyValue("height"));
	 var hgtlargo=ventana+menu;
     var hgthconsoline=document.getElementById("lineconsole");
     var hgtconsoline=parseInt(window.getComputedStyle(hgthconsoline, null).getPropertyValue("height"));
     var arraydata={
     	             'hgtlargo':hgtlargo,
     	              'hgtconsoline':hgtconsoline
                    };	 
	 return arraydata;
   };
   this.hconsole=function(lar){
     var hgthconsoline=document.getElementById("lineconsole");
     hgtconsoline=parseInt(window.getComputedStyle(hgthconsoline, null).getPropertyValue("height"));
     var consol=document.getElementById("console");
     var consoles=parseInt(window.getComputedStyle(consol, null).getPropertyValue("height"));
     document.getElementById("archivos").style.height=((lar-consoles)-3)+'px';
	  
   };

};

var movecon=new moveconsole();
function menuVent(argument) {
	var ventmenu=movecon.hgthcosole();
    return ventmenu;
}

function mvconsole(argument) {
  lar=movecon.largo();
  movecon.move();
};

function classmove(){ 
   this.ancho=function(){
    var ancho= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return ancho;
   };
  this.move=function(id){
         
    var mv=function() {

      var evento = evento || window.event;
      switch(evento.type){
        case 'mousedown':
           inix=event.clientX;
           puntoxy=(event.clientX);
           elementoarchivo=document.getElementById("archivos");
           anarchivo = parseInt(window.getComputedStyle(elementoarchivo, null).getPropertyValue("width"));
           move=true;
        break;
        case 'mouseup':
                move=false;
        break;
        //establece la posicion y ancho de los campor pertenecientes al editor al activar el evento mousemove
        case 'mousemove':
                   var acx=event.clientX;
                   if(acx>inix){
                    //document.getElementById("c1").innerHTML='mayor'; solo para prueba
                   }else{
                    //document.getElementById("c1").innerHTML='menor';
                   }
                    var subcontedi=document.getElementById("editor");
                    var csubcontedi=parseInt(window.getComputedStyle(subcontedi, null).getPropertyValue("width"));
              //document.getElementById("c1").innerHTML='edi '+ceditor+' '+(-(event.clientX-event.clientX)+ceditor);
                  if(move==true){
              //document.getElementById("c2").innerHTML=ancho+'ca'+(event.clientX-(puntoxy-anarchivo));
              if((event.clientX-(puntoxy-anarchivo))<(50) || (csubcontedi<59&& acx>inix)){  

              }else{
              classfun.wdthnumlinea();
              document.getElementById("archivos").style.width=(event.clientX-(puntoxy-anarchivo))+'px';
              document.getElementById("conteditor").style.paddingLeft=(event.clientX-(puntoxy-anarchivo)+wdthtamanio)+'px';
              document.getElementById("conteditor").style.marginLeft='-'+(event.clientX-(puntoxy-anarchivo)+wdthtamanio)+'px';
              document.getElementById("vent").style.paddingLeft=(event.clientX-(puntoxy-anarchivo)+wdthtamanio)+'px';
              document.getElementById("vent").style.marginLeft='-'+(event.clientX-(puntoxy-anarchivo)+wdthtamanio)+'px';
              document.getElementById("capamenu").style.paddingLeft=(event.clientX-(puntoxy-anarchivo)+wdthtamanio)+'px';
              document.getElementById("capamenu").style.marginLeft='-'+(event.clientX-(puntoxy-anarchivo)+wdthtamanio)+'px';
              //document.getElementById("capaeditor").style.paddingLeft=(event.clientX-(puntoxy-anarchivo)+wdthnumlinea)+'px';
              //document.getElementById("capaeditor").style.marginLeft='-'+(event.clientX-(puntoxy-anarchivo)+wdthnumlinea)+'px';
               teditor(ancho);  
              };

                  }else{                    
                  };   
        break;
        case 'mouseleave':
           move=false;
        break;
        case 'resize':
              var anch= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    classfun.wdthnumlinea();
                    var archivos=document.getElementById("archivos");
                    var anarchiv=parseInt(window.getComputedStyle(archivos, null).getPropertyValue("width"));  
                    //document.getElementById("subcontedi").style.width=((anch-anarchiv)-wdthtamanio)+'px';
                    document.getElementById("ventana").style.width=((anch-anarchiv)-wdthtamanio)+'px';
                    document.getElementById("editor").style.width=((anch-anarchiv)-wdthnumlinea)+'px';
        break;
       };        
        };
        mv();
  };
  //estableciendo ancho del editor segun el ancho del objeto contenedor o el elegido por el usuario
  this.teditor=function(anch){
    classfun.wdthnumlinea();
    var archivos=document.getElementById("archivos");
    var anarchiv=parseInt(window.getComputedStyle(archivos, null).getPropertyValue("width"));  
    //document.getElementById("subcontedi").style.width=((anch-anarchiv)-wdthtamanio)+'px';
    document.getElementById("ventana").style.width=((anch-anarchiv)-wdthtamanio)+'px';
    document.getElementById("editor").style.width=((anch-anarchiv)-wdthnumlinea)+'px';
  };
//estableciendo ancho del campo numlinea (numero de linea)
  this.wdthnumlinea=function() {
   var widthtamanio=document.getElementById("tamanio");
   wdthtamanio=parseInt(window.getComputedStyle(widthtamanio, null).getPropertyValue("width"));
   var widthnumlinea=document.getElementById("numlinea");
   wdthnumlinea=parseInt(window.getComputedStyle(widthnumlinea, null).getPropertyValue("width"));
   wdthnumlinea=wdthnumlinea+wdthtamanio;
  };

  this.editfun=function(objet) {
     var objeto=objet.id;
     var edt=function(obj) {

        var evento = evento || window.event;
         
        switch(evento.type){
                
            case "keydown":
                  //array posicion de la columna numl=(contline.length-1)
                  //Linea anterior (contline.length)
                  //columna borrada (contline[numl].length+1);
                  //ultima linea (ultimaline.length)
                var numl=(contline.length-1);
               ultimaline=document.getElementById("editor").value.split('\n');

               var key= window.Event ? event.keyCode : event.which;     
               if (key == 13) {
                  //agregar nueva linea
                  var  line=(ultimaline.length+1);
                  document.getElementById("numlinea").value=document.getElementById("numlinea").value+'\n'+line;                         
               };
               if(key==8){               
                    //eliminando linea
                    var nulineas=document.getElementById("numlinea").value.split('\n');
                    var line=ultimaline.length;
                  if((contline[numl].length+1)==1){//eliminar solamente desde columna 1              
                       if(contline.length!=1){//no eliminar la ultima linea del editor
                          nulineas.splice(parseInt(line)-1,1);                          
                          document.getElementById("numlinea").value=nulineas.join('\n');
                      }
                      //
                  }
               }
               /*if(key==8){ //codigo antiguo remplazado por el de keyup(mejorado y optimizado)              
                    //eliminando linea
                    var nulineas=document.getElementById("numlinea").value.split('\n');
                    var line=ultimaline.length;
                  if((contline[numl].length+1)==1){//eliminar solamente desde columna 1              
                       if(contline.length!=1){//no eliminar la ultima linea del editor
   
                        if(document.getElementById("numlinea").value.split('\n').length!=contline.length){
                            //eliminar al seleccionar todo
                         alert(document.getElementById("numlinea").value.split('\n').length+' '+contline.length+"-1");
                         nulineas.splice(contline.length,document.getElementById("numlinea").value.split('\n').length)                            
                        }else{
                            nulineas.splice(parseInt(line)-1,1);                          
                        }   

                        //nulineas.splice(parseInt(line)-1,1);
                        document.getElementById("numlinea").value=nulineas.join('\n');
                        
                      }else{//Eliminar al seleccionar todo cuando no se esta en la linea 1 y columna 1
                        if(document.getElementById("numlinea").value.split('\n').length!=contline.length){
                            //eliminar al seleccionar todo
                         alert(document.getElementById("numlinea").value.split('\n').length+' '+contline.length+"-2");
                         nulineas.splice(contline.length,document.getElementById("numlinea").value.split('\n').length)                            
                        }else{
                            //nulineas.splice(parseInt(line)-1,1);                          
                        } 
                        document.getElementById("numlinea").value=nulineas.join('\n');
                      }
                      //
                  }else {//Eliminar al seleccionar todo cuando se esta fuera de la linea 1 o columna 1
                        //alert(ultimaline.length+' '+document.getElementById("numlinea").value.split('\n').length+' '+contline.length+"-3");
                        nulineas.splice(contline.length,document.getElementById("numlinea").value.split('\n').length)
                        document.getElementById("numlinea").value=nulineas.join('\n');
                  }
                   
                }*/            
                //alert(key);
            break;
            case "keypress":
             /*  alert(evento.type);
                var numl=(contline.length-1);
               ultimaline=document.getElementById("editor").value.split('\n');
                var key= window.Event ? event.keyCode : event.which; 
                
               if(key==8){               
                    //eliminando linea
                    var line=ultimaline.length;
                  if((contline[numl].length+1)==1){//eliminar solamente desde columna 1              
                       if(contline.length!=1){//no eliminar la ultima linea del editor
                            if(document.getElementById("numlinea").value.split('\n').length!=contline.length){
                               //eliminar varias lineas
                              deleteSelection(ultimaline.length);
                            }else{
                                //nulineas.splice(parseInt(line)-1,1);                          
                            }   
                      }else{//Eliminar al seleccionar varias lineas cuando no se esta en la linea 1 y columna 1
                            if(document.getElementById("numlinea").value.split('\n').length!=contline.length){
                                //eliminar al seleccionar todo
                             deleteSelection(ultimaline.length);                            
                            }else{
                                //nulineas.splice(parseInt(line)-1,1);                          
                            } 
                      }
                      //
                  }else {//Eliminar al seleccionar varias lineas cuando se esta fuera de la linea 1 o columna 1
                      deleteSelection(ultimaline.length);
                  }
                   
                }*/
            break;                
            case "keyup":
                var numl=(contline.length-1);
               ultimaline=document.getElementById("editor").value.split('\n');
                var key= window.Event ? event.keyCode : event.which; 
                
               if(key==8){               
                    //eliminando linea
                    var line=ultimaline.length;
                  if((contline[numl].length+1)==1){//eliminar solamente desde columna 1              
                       if(contline.length!=1){//no eliminar la ultima linea del editor
                            if(document.getElementById("numlinea").value.split('\n').length!=contline.length){
                               //eliminar varias lineas
                              deleteSelection(ultimaline.length);
                            }else{
                                //nulineas.splice(parseInt(line)-1,1);                          
                            }   
                      }else{//Eliminar al seleccionar varias lineas cuando no se esta en la linea 1 y columna 1
                            if(document.getElementById("numlinea").value.split('\n').length!=contline.length){
                                //eliminar al seleccionar todo
                             deleteSelection(ultimaline.length);                            
                            }else{
                                //nulineas.splice(parseInt(line)-1,1);                          
                            } 
                      }
                      //
                  }else {//Eliminar al seleccionar varias lineas cuando se esta fuera de la linea 1 o columna 1
                      deleteSelection(ultimaline.length);
                  }
                   
                }
            break;    
            case "mousemove"://posicion del cursor
              var sincX=event.pageX;
              var sincY=event.pageY;
              
              //document.getElementById("c4").innerHTML=sincX+' '+sincY; solo para prueba
              
            break;
            case "scroll"://igualar posicion scroll
              var numlineascroll=document.getElementById("numlinea");
              var editorscroll=document.getElementById("editor");
              numlineascroll.scrollTop=editorscroll.scrollTop;
              var scrollx=editorscroll.scrollTop;
            break;

        }
     };
     edt(objeto);
  };
  function deleteSelection(ultimaline){//eliminar varias lineas
      var nulineas=document.getElementById("numlinea").value.split('\n');
      nulineas.splice(ultimaline,document.getElementById("numlinea").value.split('\n').length)
      document.getElementById("numlinea").value=nulineas.join('\n'); 
      //alert(ultimaline);
  }
  this.Positioncursor=function(objeto) {

    var posici = 1;
    // IE soporte
    if (document.selection) {
      // Establecer el foco en el elemento
      objeto.focus();
      // Para obtener la posición del cursor, obtener rango de selección vacía
      var rang = document.selection.createRange();
      // Mueve la selección se inicia en la posición 0
      rang.moveStart('character', -objeto.value.length);
      // La posición del símbolo es la longitud de la selección
      posici = rang.text.length;
    }
    // Firefox supporte
    else if (objeto.selectionStart || objeto.selectionStart == '0'){

     posici = objeto.selectionStart;
    }
    var ca=parseInt(posici+1);
    var line=objeto.value.substring(0,posici);
    contline=line.split('\n');
    var ultimalin=document.getElementById("editor").value.split('\n');
    var numl=(contline.length-1);

    document.getElementById("c5").innerHTML='Linea '+contline.length+', Columna '+(contline[numl].length+1)+", ultima line "+ultimalin.length;
      var key= window.Event ? event.keyCode : event.which;
              /*var evento = evento || window.event;
                 switch(evento.type){
                         case 'mousedown':
                            document.getElementById("c1").innerHTML=contline.length;
                         break;
                      
                 };*/
      
  };    
  
};

var classfun=new classmove();

 function Control_(){
    //var keystroke = String.fromCharCode(event.keyCode).toLowerCase();

      classfun.wdthnumlinea();
     var key= window.Event ? event.keyCode : event.which;
    if (event.ctrlKey && (key == 109 || key == 107 )) {
        event.returnValue = false;
        alert(wdthnumlinea);

     }
 }
function Cursorposition(id) {
  classfun.Positioncursor(id);
}

function editfun(id){
    classfun.editfun(id);
}
function mover(id){
  
  classfun.move(id);
}
function teditor() {
  ancho=classfun.ancho();
  classfun.teditor(ancho);
}

function actualizar() {
  location.reload(true);
}
  
function cantdiv(argument) {
// Selector Padre
var parent = document.querySelector('#numlinea');

// Cantidad de div
var divs = parent.querySelectorAll('div');
var cantidad = divs.length;
alert(cantidad);
}

function lineh() {
   var line=document.getElementById("editor").style.lineHeight;
  alert(line);
}
 

// Vamos a requerir del modulo que provee Node.js 
// llamado child_process
var exec = require('child_process').exec, child;
// Creamos la función y pasamos el string pwd 
// que será nuestro comando a ejecutar
child = exec('uname -a',
// Pasamos los parámetros error, stdout la salida 
// que mostrara el comando
  function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
//document.write("div#capa{  width: 100%;  padding-left:"+pamar+"px; margin-left:-"+pamar+"px;    z-index: 0;}")
//http://ortografiainfinita.blogspot.com.co/2016/02/como-encontrar-cualquier-libro-usando.html



