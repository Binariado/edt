//Modulos de control
const electron = require('electron');
var os= require('os');
console.log(os.platform());
const app = electron.app;
const {dialog} = require('electron').remote;
var fs = require('fs');
//--------------------------------------//
var cont=0;// variable solo para prueba

//se crea la variable jsonfeche para la carga de el contenido de cada directorio
var jsonfiche='{"FILES":[' +
'],"DIRECTORY":[' +

'], "CHILDdIR":[' +

 '],"CHILDfILES":['+

 ']}';


var arrayFicheros=[]; //array para carga de ficheros
var arrayDirecObje=[]; //array para carga de directorios main


function verificar(){//función solo para prueba

  //document.getElementById("editor").value=JSON.stringify(directory)+'\n'+directory.directory[0]["FILES"][0]["name"];   //JSON.stringify(ficheros);
  var ind=parseInt(document.getElementById("indicador").value);
document.getElementById("editor").value=JSON.stringify(arrayFicheros[ind]);
}

function elemento(e){ //solo para prueba
  var x=event.clientX;
  var y=event.clientY;

    var button = e.which || e.button;
    if ( button === 1 ) {
      //toggleMenuOff();
    }
    document.getElementById("editor").innerHTML=document.elementFromPoint(x,y).id+' h '+button+' p '+document.elementFromPoint(x,y).parentNode.id + '\n'+ JSON.stringify(arrayDirecObje) ;

}

function nombre(id){//solo para prueba
  document.getElementById("cs").innerHTML=id.id;
}

function archivo(arch) {//carga de archivo file

   this.selectArchivo=function(argument) {

    dialog.showOpenDialog({  filters: [
    {name: 'All Files', extensions: ['*']},
    {name: 'Html', extensions: ['html', 'htm']},
    {name: 'JavaScript', extensions: ['js']},
    {name: 'Php', extensions: ['php']},
    {name: 'Images', extensions: ['jpg', 'png', 'gif']},
    //{name: 'Movies', extensions: ['mkv', 'avi', 'mp4']},
    {name: 'Custom File Type', extensions: ['as']}],
    properties: [ 'openFile','multiSelections' ]}, function ( filename ){
          console.log( filename.toString());
           var fs = require('fs');

      });
   };


   function namepath(name) { //capturar el nombre de un directorio desde su ruta
            if(os.platform()=='linux'){ //linux and mac

               var separador=name.split("");
               separador=separador[0];
            }else{//windows
               var separador=name.split("");
               separador=separador[2];
            }

              var nombre= name.split(separador)[parseInt(( name.split(separador).length)-1)];
              this.name=nombre;//crear el objeto name (nombre del directorio)
   }

    this.selectDirectorio=function(argument) {//carga directorios
      dialog.showOpenDialog({
      properties: [ 'openFile','openDirectory','multiSelections'],title: 'Selecione un directorio o Multiple'}, function ( filenames ){
          console.log(filenames);//ruta

          var i=arrayDirecObje.length;
          for (i in filenames) {

            //alert(arrayDirecObje.length);
            nombre= new namepath(filenames[i]);
            var posicion= arrayDirecObje.length;
            arrayDirecObje.push(filenames[i]);
            arrayFicheros.push(JSON.parse(jsonfiche));

            var item=document.createElement("li");
              item.setAttribute("class","lbel");
           /* var input=document.createElement("input");
            input.setAttribute("id","group_main_"+arrayDirecObje.length);
            input.setAttribute("type","checkbox");*/

            var label=document.createElement("label");
            label.setAttribute("for","group_main_"+arrayDirecObje.length);
            label.setAttribute("id", (filenames[i]));
            label.setAttribute("class", "directorio");
            label.setAttribute("onclick", "explorar(this)");
            var span_iconleft=document.createElement("span");
            span_iconleft.setAttribute("class","ml dir_list icon-angle-left");
            var span_iconfolder=document.createElement("span");
            span_iconfolder.setAttribute("class","icon-folder");
            span_iconfolder.innerHTML=" "+nombre.name;

            label.appendChild(span_iconleft);
            label.appendChild(span_iconfolder);
            var ul=document.createElement("ul");
            ul.setAttribute("class","group-list");

            //item.appendChild(input);
            item.appendChild(label);
            item.appendChild(ul);
           // directorio.appendChild(item);
            //crendo objeto del directorio main*/
            var directorio_main = document.getElementById("main_folders");
            //agragar div creado en el directorio main
            directorio_main.appendChild(item);
            //alert('i ='+i+' y i-1='+(i-1)+'\n'+ JSON.stringify(arrayFicheros[i])+'\n'+' f - d '+arrayDirecObje[i]+' >'+filenames.length );
          }
          for (var i in filenames) {
              var indicativo=i+1;
              var j;
              for (j in arrayDirecObje){
                if(arrayDirecObje[j]==filenames[i]){
                  //console.log(arrayDirecObje[j]+' '+filenames[i]);
                  var indicador=j;
                  break;
                }

              };

             //constructorjson(indicador,filenames[i]);
          }

      });
    };


    function constructorjson(indicador,fiDir,objnode) {
          this.indicador=indicador;
          this.fiDir=fiDir;
          this.objnode=objnode;
          var cargadir=new cargaDirectory(this.indicador,this.fiDir,this.objnode);
    }

    function cargaDirectory(indicador,filename,objnode) {
          var ul=objnode.parentNode.lastChild;
          var divdirec=document.createElement("div");
          var divfile=document.createElement("div");
          divdirec.setAttribute("class","divdirec");
          ul.appendChild(divdirec);
          ul.appendChild(divfile);
            fs.readdir(filename.toString(), function(err, files) {
              //cont=cont+1;
               //console.log((files)+' '+cont)
               //alert("leyendo "+nombre+': '+(files)+' '+cont);
            
                  files.forEach(function (file) {

                     //console.log(filename.toString()+'/'+file);
                     fs.stat(filename.toString()+'/'+file,  function(err,stats){
                            if (err) {
                               return console.error(err);
                             }
                         if(stats.isFile()){
                           //console.log(filename.toString()+'/'+file+'- file');
                          /* var posicion= arrayFicheros[indicador].FILES.length;
                           arrayFicheros[indicador].FILES.push({"name":file,"nameid":(file+"-"+posicion+"-"+indicador),"path":(filename.toString())});

                          var posicion= arrayFicheros[indicador].FILES.length-1;
                          var objeto= new objetofirechos(arrayFicheros[indicador].FILES[posicion]);
                          */
                            var elepad=document.getElementById(filename.toString());
                            var elepaddin = parseInt(window.getComputedStyle(elepad, null).getPropertyValue("padding-left"));
                            //alert(elepaddin);
                          elepaddin=elepaddin+14;
                          var afile=document.createElement("a");
                          afile.setAttribute("style",'padding-left:'+elepaddin+'px;');
                          afile.setAttribute("href","#");
                          afile.setAttribute("id",filename.toString()+'/'+file);  
                             afile.innerHTML=file.toString();
                          var lifile=document.createElement("li");
                          lifile.appendChild(afile);
                             ul.appendChild(lifile);
                          //ul.innerHTML+='<li><a id="'+filename.toString()+'/'+file+'" style="padding-left:'+elepaddin+'px;" href="#">'+file.toString()+'</a></li>';
                          // document.getElementById('ul'+arrayDirecObje[indicador].toString()).innerHTML+='<li id="li'+objeto.nameid+'" ><a  oncontextmenu="elemento(event)" onclick="elemento(event)" id="a'+objeto.nameid+'" >'+objeto.name+'</a></li>';

                         }else{
                          //console.log(filename.toString()+'/'+file+'- Dir');
                         // var posicion= arrayFicheros[indicador].DIRECTORY.length;
                         // arrayFicheros[indicador].DIRECTORY.push({"name":file,"nameid":(file+"-"+posicion+"-"+indicador),"path":filename.toString()});

                        //var posicion= arrayFicheros[indicador].DIRECTORY.length-1;
                        //var objeto= new objetofirechos(arrayFicheros[indicador].DIRECTORY[posicion]);
                             //alert(filename.toString()+'/'+file);
            //<li><input id="group_main_1" type="checkbox"><label for="group_main_1" id="D:\yarenis" class="directorio" onclick="explorar(this)"><span class="ml dir_list icon-angle-left"></span><span class="icon-folder"> yarenis</span></label></li>


                            var item=document.createElement("li");
                            item.setAttribute("class","lbel");
                            /*var input=document.createElement("input");
                            input.setAttribute("id","group_main_"+arrayDirecObje.length+'_'+arrayFicheros[indicador].DIRECTORY.length);
                            input.setAttribute("type","checkbox");*/

                            var label=document.createElement("label");
                            //label.setAttribute("for","group_main_"+arrayDirecObje.length+'_'+arrayFicheros[indicador].DIRECTORY.length);
                            var elepad=document.getElementById(filename.toString());
                            var elepaddin = parseInt(window.getComputedStyle(elepad, null).getPropertyValue("padding-left"));
                            //alert(elepaddin);
                             elepaddin=elepaddin+14;
                            label.setAttribute("id", (filename.toString()+'/'+file));
                            label.setAttribute("class", "directorio");
                            label.setAttribute("style","padding-left:"+elepaddin+"px;");
                            label.setAttribute("onclick", "explorar(this)");
                            var span_iconleft=document.createElement("span");
                            span_iconleft.setAttribute("class","ml dir_list icon-angle-left");
                            var span_iconfolder=document.createElement("span");
                            span_iconfolder.setAttribute("class","icon-folder");
                            span_iconfolder.innerHTML=" "+file;

                            label.appendChild(span_iconleft);
                            label.appendChild(span_iconfolder);
                            var subul=document.createElement("ul");
                            subul.setAttribute("class","group-list");

                            //item.appendChild(input);
                            item.appendChild(label);
                            item.appendChild(subul);
                            //ul.innerHTML="<li>"+(item.innerHTML)+"</li>"+ul.innerHTML;
                            
                            ul.childNodes[0].appendChild(item);//="<li>"+(item.innerHTML)+"</li>"+ul.innerHTML;
                         /* var subdirectorio = document.createElement("div");
                          subdirectorio.setAttribute("id", (objeto.nameid));
                          subdirectorio.setAttribute("class", "directorio");
                          subdirectorio.innerHTML='<li id="li'+objeto.nameid+'" ><a  oncontextmenu="elemento(event)" onclick="elemento(event)" id="a'+objeto.nameid+'" >'+objeto.name+'</a><ul id="ul'+objeto.nameid+'" class="submenu"></ul></li>';
                          var contenedor=document.createElement("div");
                          contenedor.appendChild(subdirectorio);
                          var directorio_submain = document.getElementById('ul'+arrayDirecObje[indicador]);


                          directorio_submain.innerHTML=(contenedor.innerHTML)+directorio_submain.innerHTML;


                          //var ruta=(filename.toString())
                          //console.log(ruta+' '+objeto.path)
                          var nom=objeto.nameid+'-'+indicador;*/
                            //cosntruirAcceso(indicador,objeto.name,objeto.nameid,objeto.path);
                         };
                     });
                  });

            });

    };


    function cosntruirAcceso(indicador, file, nameid, path) {
      this.indicador=indicador;
      this.file=file;
      this.path=(path+'/'+file);
      //alert(this.path+'  construir');
      this.nameid=nameid;
      constructor(this.indicador, this.nameid, this.path);

    }

    function objetofirechos(objeto) {
      this.name=objeto['name'];
      var path= new namepath(objeto["path"]);
      this.pathName=path.name;
      this.path=objeto["path"];
      this.nameid=objeto["nameid"];
     // alert(objeto['name']+'\n\n'+path.name)
    }
    
    function agregarDirFile(indicador, dirfile, path) {

                            //document.getElementById("cs").innerHTML=arrayDirecObje[indicador];
                           // alert(path+' agregarDirFile')
        fs.readdir(path, function(err,files) {
           //alert(' ficheros')
            files.forEach( function(file) {
               fs.stat(path+'/'+file,function (err,stats) {
                  if(err){
                    return console.log(err);
                  }
                  if (stats.isFile()) {

                        var posicion= arrayFicheros[indicador].CHILDfILES.length;

                        arrayFicheros[indicador].CHILDfILES.push({"name":file,"nameid":file+posicion,"path":path});
                        var posicion= arrayFicheros[indicador].CHILDfILES.length-1;
                        var objeto= new objetofirechos(arrayFicheros[indicador].CHILDfILES[posicion]);

                        document.getElementById('ul'+dirfile).innerHTML+='<li id="li'+objeto.nameid+'" ><a oncontextmenu="elemento(event)" id="a'+objeto.nameid+'" >'+objeto.name+'</a></li>';
                  } else {
                    //console.log(this.path);
                   //console.log(files);
                      //alert(indicador);
                    var posicion= arrayFicheros[indicador].CHILDdIR.length;
                    arrayFicheros[indicador].CHILDdIR.push({"name":file,"nameid":file+posicion,"path":path});

                        var posicion= arrayFicheros[indicador].CHILDdIR.length-1;
                        var objeto= new objetofirechos(arrayFicheros[indicador].CHILDdIR[posicion]);

                           var subdirectorio = document.createElement("div");
                          subdirectorio.setAttribute("id", (objeto.nameid+indicador));
                          subdirectorio.setAttribute("class", "directorio");
                          subdirectorio.innerHTML='<li id="li'+objeto.nameid+'" ><a  oncontextmenu="elemento(event)" onclick="elemento(event)" id="a'+objeto.nameid+'" >'+objeto.name+'</a><ul id="ul'+objeto.nameid+'" class="submenu"></ul></li>';
                          var contenedor=document.createElement("div");
                          contenedor.appendChild(subdirectorio);
                          var directorio_submain = document.getElementById('ul'+dirfile);


                          directorio_submain.innerHTML=(contenedor.innerHTML)+directorio_submain.innerHTML;

                    var ruta=path.toString();
                    var nomdir=objeto.nameid+posicion;
                    //alert(ruta+' '+objeto.path)
                    cosntruirAcceso(indicador, objeto.name, objeto.nameid, objeto.path);
                  }
               });

            });
        });

    }

    function constructor(indicador, nameid, path) {
      this.indicador=indicador;
      this.path=path;
      //alert(this.path+' constructor');
      this.nameid=nameid;
      agregarDirFile(this.indicador, this.nameid, this.path);
    }
    
  this.explorar_=function (pathname) {
   var indicador="";
      //alert(pathname.parentNode.parentNode.id);
   var inptf= pathname.parentNode.firstChild;
  // namep= new namepath(pathname.id);
    //alert(inptf.checked);
   if(pathname.dataset.to_listTrue==undefined){
    for (var j in arrayDirecObje){
          if(arrayDirecObje[j]==pathname.id){
              //alert(arrayDirecObje[j]+' '+pathname.id);
             indicador=j;
            break;
          }
    };
    pathname.setAttribute("data-to_list-true","");
    constructorjson(indicador,pathname.id,pathname);
   /*var paddingLeft =parseInt(window.getComputedStyle(pathname, null).getPropertyValue("padding-left"));
    alert(paddingLeft);
    var ul=pathname.parentNode.lastChild;
    ul.innerHTML='<li><a href="#">1st level item</a></li><li><a href="#">1st level item</a></li><li><a href="#">1st level item</a></li><li><a href="#">1st level item</a></li>';*/

   }else{
     pathname.removeAttribute("data-to_list-true");
     var ul=pathname.parentNode.lastChild;
     ul.innerHTML="";
   }
    
  }


}


function function_name(argument) {
  // body...
function Persona(primerNombre) {
  this.primerNombre = primerNombre;
  this.primerNombre.forEach(function(arr){
      if(arr instanceof Array){
         alert('Uesta variable es array '+arr);
          constructor(arr);
      }else{

        alert('esta variable es '+ arr+' '+ typeof arr);
      }

  });

}
var dirfi=["exe","txt"];
var dir=[dirfi,"html","rb"];
var co=["css",dir,"js"];
function constructor(data) {
  var persona1 = new Persona(data);
}

constructor(co);

}

function explorar(obj) {
  //alert(obj.id+' '+obj.parentNode.id);
    var fichero=new archivo();
    fichero.explorar_(obj);
};


function Abrir(argument) {
  var Abrir=new archivo;
  Abrir.selectDirectorio();
}

function open(argument) {
  alert("sd");
}

function createDir(argument) {

fs.readdir(argument, (err, stats) => {
  if (err){

      if(err.code==="ENOENT"){
        alert(" NO existe");

      }else{
        throw err;
      }

    }else{
      alert(stats);
    }

});

var http=require('http');
var fs = require('fs');
fs.readFile('./index.html', 'utf8', function(err, data) {
    if( err ){
        console.log(err);
    }
    else{
        document.getElementById("editor").value=(data);
    }
});


dialog.showOpenDialog(
                { properties: [ 'openFile' ] }, function ( filename ) {

                    console.log( filename.toString() );
  var fs = require('fs');
fs.readFile(filename.toString(), 'utf8', function(err, data) {
    if( err ){
        console.log(err);
    }
    else{
        document.getElementById("editor").value=(data);
    }
});
                }
            );


function read(argument) {
  var fs = require('fs');
fs.readFile(argument, 'utf8', function(err, data) {
    if( err ){
        console.log(err);
    }
    else{
        document.getElementById("editor").value=(data);
    }
});
}


}