var text = '{"archivos":[' +     
            '{"width":"vacio",'+
            '"console":"vacio",'+
            '"paddingLeft":"vacio",'+
            '"marginLeft":"vacio",'+
            '"capaeditor":"vacio",'+
            '"marginTop":"vacio",'+
            '"paddingTop":"vacio"}'+
           ']}'; 

var contrVentanas=JSON.parse(text);

function style(){
   function getventana(dato) {
     contrVentanas.archivos[0].width=(window.getComputedStyle(document.getElementById("archivos"), null).getPropertyValue("width"));
     contrVentanas.archivos[0].console=(window.getComputedStyle(document.getElementById("console"), null).getPropertyValue("height"));     
     var ventmenu=menuVent();
     contrVentanas.archivos[0].paddingLeft=(parseInt(contrVentanas.archivos[0].width)+wdthtamanio)+"px";
     contrVentanas.archivos[0].marginLeft="-"+(parseInt(contrVentanas.archivos[0].width)+wdthtamanio)+"px";
     contrVentanas.archivos[0].capaeditor=(parseInt(contrVentanas.archivos[0].width)+wdthnumlinea)+"px";
     contrVentanas.archivos[0].paddingTop=(parseInt(contrVentanas.archivos[0].console))+"px";
     contrVentanas.archivos[0].marginTop="-"+(parseInt(contrVentanas.archivos[0].console))+"px";
     fs.writeFile("./data0.json",JSON.stringify(contrVentanas), function(err){
            if(err){
              console.log(err);
            }else{
              calert('Se ha escrito correctamente');
            }
     });
  }

   this.anchoelement= function () {
     var evento = evento || window.event;
     switch(evento.type){
       case 'beforeunload':
          fs.open('data0.json', 'a+', (err, dato) => {
            if (err) {
             if (err.code === "EEXIST") {
               alert('myfile already exists');
               return;
             } else {
              throw err;
               }
            }
          getventana(dato);
          });    
       break
     }
    }	
}
var data_style=new style();
function anchosventanas(argument) {
  data_style.anchoelement();
}

           fs.open('data0.json','r+',function(err,dato){
              if(err){
                 if(err.code==='ENOENT'){
                  console.log('restauración de fabrica style');
                  restauraFabricaStyle();
                  
                 }else{
                  throw err;
                 }
              }else{
                setve();
              }
           });

function restauraFabricaStyle(argument) {
    var contrVentan = '{"archivos":[' +
                        '{"width":"300px","console":"240px","paddingLeft":"303px","marginLeft":"-303px","capaeditor":"353px","marginTop":"-240px","paddingTop":"240px"}]}'; 
    var anch= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    controlLayout(contrVentan, anch);	
}
 function setve(){

    fs.readFile('./data0.json', 'utf8', function (err, file) {
       if(err){

          console.log(err);
       }else{
        if(file==""){
            console.log("restauración de fabricaaa");
            restauraFabricaStyle();
        }else{
          var contrVentanas=JSON.parse(file);
          var anch= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         controlLayout(file, anch);
        }

       }
      
    });
 }

function controlLayout(file,anch) {



    var contrVentanas=JSON.parse(file);	
function divarchivos() {
	var archivos=document.getElementById("archivos");
	var archivosstyle="  white-space:nowrap;  width: "+contrVentanas.archivos[0].width+"; height: 100%;background:#131313;position:relative;color:#b8b8b8;z-index: 2;overflow-y: scroll;overflow-x: auto;white-space:nowrap;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select:none; ";
	archivos.setAttribute("style", archivosstyle);
}
divarchivos();

function divlineconsole() {
   var lineconsole=document.getElementById("lineconsole");
   var lconsolestyle=" z-index: 3500; cursor: row-resize; position:relative;width:100%;height:5px;background:#131313;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none; ";
   lineconsole.setAttribute("style", lconsolestyle);
   //alert("cargado");
}
divlineconsole();


function txtareaconsole() {
   var console=document.getElementById("console");
   var consolestyle=" padding:0px; font-size: 1rem;line-height: 18px;width: 100%;height:"+contrVentanas.archivos[0].console+";position: relative;background:#070707;resize: none;z-index: 3500;color:#b8b8b8;border:0px;/*white-space:nowrap; overflow-xoverflow-y: scroll;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;  ";
   console.setAttribute("style", consolestyle);
}
txtareaconsole();

function divMenu() {
   var menu=document.getElementById("menu");
   var menustyle="position:relative;width:100%;height:20px;background:#1b1b1b;color:#b8b8b8;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none; ";
   menu.setAttribute("style", menustyle);
   //alert("cargado");
}
divMenu();

function divcapamenu() {
	var capamenu=document.getElementById("capamenu");
	var capamenustyle="  width: 100%; padding-left:"+contrVentanas.archivos[0].paddingLeft+"; margin-left:"+contrVentanas.archivos[0].marginLeft+";padding-top: 0px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
	capamenu.setAttribute("style", capamenustyle);
}
divcapamenu();

function divcapavent() {
	var vent=document.getElementById("vent");
	var ventstyle=" width: 100%;padding-left:"+contrVentanas.archivos[0].paddingLeft+";margin-left:"+contrVentanas.archivos[0].marginLeft+";padding-top: 0px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none; user-select: none; ";
	vent.setAttribute("style", ventstyle);
}
divcapavent();

function divventana() {
	var ventana=document.getElementById("ventana");
	var ventanastyle="  position: relative; width: 100%;height: 40px;background:transparent;color:#b8b8b8; z-index: 12;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none; user-select: none; ";
	ventana.setAttribute("style", ventanastyle);
}
divventana();

function divcapar() {
	var capaar=document.getElementById("capaar");
	var capaarstyle="   height: 100%;padding-top:"+contrVentanas.archivos[0].paddingTop+"; margin-top:"+contrVentanas.archivos[0].marginTop+";-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none; user-select: none;";
	capaar.setAttribute("style", capaarstyle);
}

divcapar();

function divcondeditor() {
	var ventmenu=menuVent();
	var pconeditop=ventmenu['hgtlargo']+parseInt(contrVentanas.archivos[0].paddingTop);
	var mconeditop=-ventmenu['hgtlargo']+(parseInt(contrVentanas.archivos[0].marginTop));
	var conteditor=document.getElementById("conteditor");
	var conteditorstyle="  width: 100%; height: 100%;padding-left:"+contrVentanas.archivos[0].paddingLeft+";margin-left:"+contrVentanas.archivos[0].marginLeft+"; padding-top:"+pconeditop+"px; margin-top:"+mconeditop+"px;z-index: 0;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; ";
	conteditor.setAttribute("style", conteditorstyle);
}
divcondeditor();
/*
function divsubcontedi() {
	var subcontedi=document.getElementById("subcontedi");
	var subcontedistyle="  width: 0px;height: 100%;position: relative;background: green;/*overflow-x: scroll;";
	subcontedi.setAttribute("style", subcontedistyle);
}
divsubcontedi();

function divcapaeditor() {
	var capaeditor=document.getElementById("capaeditor");
	var capaeditorstyle="  width: 100%;height: 100%;padding-left:"+contrVentanas.archivos[0].capaeditor+";margin-left:-"+contrVentanas.archivos[0].capaeditor+";z-index: 3500;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
	capaeditor.setAttribute("style", capaeditorstyle);
}
divcapaeditor();*/
 
function diveditor() {
	var editor=document.getElementById("editor");
	var editorstyle=" font-size: 1rem;line-height: 18px;width: 0px;height: 100%;position: relative;background: #252525;resize: none;z-index: 3500;color:white;border:0px;/*white-space:nowrap; overflow-x*/overflow-y: scroll;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
	editor.setAttribute("style", editorstyle);
    
  
}
diveditor();
/*
function divcapaline(argument) {
	var capaline=document.getElementById("capaline");
	var capalinestyle="  height: 100%;padding-top: 40px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; "
	capaline.setAttribute("style", capalinestyle);
}
divcapaline();*/

function divtamanio() {
	var tamanio=document.getElementById("tamanio");
	var tamaniostyle="  width: 3px; height: 100%;background:#131313;cursor: col-resize;position: relative;z-index: 300;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
	tamanio.setAttribute("style", tamaniostyle);
}
divtamanio();

function divnumline() {
	var numlinea=document.getElementById("numlinea");
	var numlineastyle="  font-size: 1rem;line-height: 18px;width: 70px;height: 100%;background:#252525;position: relative;z-index: 300;resize: none;border:0px;text-align: center;color:white;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none; user-select: none;overflow: hidden;border-right:1px;border-style: solid;border-right-color: #1d1d1d";
	numlinea.setAttribute("style", numlineastyle);
}
divnumline();

classfun.teditor(anch);

function visibles() {
	document.getElementById("capaar").style.display="block";
	document.getElementById("vent").style.display="block";
	document.getElementById("conteditor").style.display="block";
	document.getElementById("capamenu").style.display="block";
	document.getElementById("lineconsole").style.display="block";
	document.getElementById("console").style.display="block";

}
visibles();
/*
function divcapachat() {
	var capachat=document.getElementById("capachat");
	var capachatstyle="    height: 100%;padding-top: 20px;"
	capachat.setAttribute("style", capachatstyle);
}
divcapachat();

function divchat() {
	var chat=document.getElementById("chat");
    var chatstyle="width:200px; height: 100%;position:relative;background: red;"
    chat.setAttribute("style", chatstyle);
}
divchat;*/ 
}
