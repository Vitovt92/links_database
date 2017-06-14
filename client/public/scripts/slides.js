 var slideIndex = []; //выполнено в виде массива, чтобы у каждого документа был свой   slideIndex 
// функция создает таблицу Докуменов
function makeTable() {
    var outloop ="";
    var l =0;
    var adr1, adr2, akt, tu, dog, pupk;
    for (l=0;l<cable.length;l++){
    adr1=cable[l].urid.pochAdr;
    adr2=cable[l].urid.kincAdr;
    akt=cable[l].urid.akt.doc;
    tu=cable[l].urid.tu.doc;
    dog=cable[l].urid.dog.doc;
    pupk=cable[l].urid.papka;
    outloop += "<div class='accordion' ><table class='listOfDox'><tr><td>"+String(l)+"</td><td>"+adr1+"</td><td>"+adr2+"</td><td>"+akt+"</td><td>"+tu+"</td><td>"+dog+"</td><td>"+pupk+"</td></tr></table></div>"+
   "<div class='panel'>"+
       "<div>"+
       "<ul class='menuDox'>"+
         "<li class='menuDox'><a class='tablinks"+String(l)+"' onclick='showSlides(slideIndex["+String(l)+"],1,"+String(l)+"), difrentColors(event,"+String(l)+")'>Акты</a></li>"+
         "<li class='menuDox'><a class='tablinks"+String(l)+"' onclick='showSlides(slideIndex["+String(l)+"],2,"+String(l)+"), difrentColors(event,"+String(l)+")'>ТУ</a></li>"+  
		   "<li class='menuDox'><a class='tablinks"+String(l)+"' onclick='showSlides(slideIndex["+String(l)+"],3,"+String(l)+"), difrentColors (event,"+String(l)+")' >Договора</a></li>"+  
         "<li class='menuDox'><a class='tablinks"+String(l)+"' onclick='showSlides(slideIndex["+String(l)+"],4,"+String(l)+"), difrentColors(event,"+String(l)+")' >Картограмма</a></li>"+     
         "<li class='menuDox'><a class='tablinks"+String(l)+"' onclick='difrentColors(event,"+String(l)+"), initMap("+String(l)+"), myMap("+String(l)+")' >Карта</a></li></ul>"+
       "</div>"+
"<div class='fotoOfdox' id='fotoOfdox"+String(l)+"'></div>"+
 "</div>"
    slideIndex[l] = 1;
    };
    // Создает <th> В таблице
    var tableTh = "<table class='tableTh'><tr><th>№</th><th>Початкова адреса</th><th>Кінцева адреса</th><th>АКТ №</th><th>ТУ №</th><th>Договор №</th><th>Папка №</th></tr></table>";
    var out="<div id='listOfDox' style='overflow-x:auto;'>"+tableTh+outloop+"</div>";
    document.getElementById("contentofpage").innerHTML = out;
	
 // Аккордион работает когда находится в этой функции
    var acc = document.getElementsByClassName("accordion");
    var pan = document.getElementsByClassName("panel");
var Ac;
for (Ac=0;Ac<acc.length;Ac++){
    acc[Ac].onclick=function(){
        
       this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
};
   
//showSlides(slideIndex);

// Функция подсвечивающая нажатые кнопки верхнего меню белым 
function difrentColors1(evt){
	var tablinks = document.getElementsByClassName('nav');
    for ( var i = 0; i < tablinks.length; i++) {
        console.log(tablinks[i]);
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

// Функция подсвечивающая нажатые кнопки зеленым 
function difrentColors (evt,nambOfDox){

	var tablink = "tablinks"+String(nambOfDox);
	var tablinks = document.getElementsByClassName(tablink);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

function plusSlides(n,type,nambOfDox) {
  showSlides(slideIndex[nambOfDox] += n, type,nambOfDox);
}

function currentSlide(n,type,nambOfDox) {
  showSlides(slideIndex[nambOfDox] = n,type,nambOfDox);
}
// Весь последующий огород нужно как-нибудь переделать. Но пока работает, пусть будет



//Функция слайдшоу
function showSlides(n,type,nambOfDox) {
	 var inpitInDiv1=" <div  class='slideshow-container'>";
  var inpitInDiv3_1="";
  var jnew;
  var infoArr;
  var infoDoc
   // Разные значения в зависимости от выбора
    if (type==1){ //если выберут Акты
		infoArr=cable[nambOfDox].urid.akt.url;
		infoDoc=cable[nambOfDox].urid.akt.doc;
	} else if (type==2){  // если выберут ТУ
		infoArr=cable[nambOfDox].urid.tu.url;
		infoDoc=cable[nambOfDox].urid.tu.doc;
	}
	else if (type==3){  // если выберут Договора
		infoArr=cable[nambOfDox].urid.dog.url;
		infoDoc=cable[nambOfDox].urid.dog.doc;
	}
	else if (type==4){ // если выберут Карту
		infoArr=cable[nambOfDox].urid.map.url;
		infoDoc=cable[nambOfDox].urid.map.doc;
	}
	// Цикл перебирает и подставляет все фотки, ведь у каждого документа их разное количество
  for (var j=0;j<infoArr.length;j++){
  inpitInDiv1+="<div><div class='mySlides"+nambOfDox+" fade'><a href='"+infoArr[j]+" 'target='_blank' title='"+infoDoc+"' alt='"+infoDoc+"'><img class='fotoimg' src=' "+infoArr[j]+"'></a><div class='text'><div class='infoDoctext'>"+infoDoc +"</div></div></div>";
  jnew=j+1;
  inpitInDiv3_1+="<span class='dot dot"+nambOfDox+"' onclick='currentSlide("+ jnew +","+type+","+nambOfDox+")'></span>";
      }
     // Кнопки "Дальше" и "Назад"
   var inpitInDiv2=" <a class='prev' onclick='plusSlides(-1,"+type+","+nambOfDox+")' > &#10094; </a> <a class='next' onclick='plusSlides(1,"+type+","+nambOfDox+")'> &#10095;</a> </div><br>";
	// "Точки"
    var inpinInDiv3="<div style='text-align:center'>"+ inpitInDiv3_1 + "</div>";
   // Выводит весь "огород" в HTML
     document.getElementById("fotoOfdox"+String(nambOfDox)).innerHTML=inpitInDiv1+inpitInDiv2 + inpinInDiv3;
    
	// Переключение слайдов
	
  var i;    
  var slides = document.getElementsByClassName("mySlides"+String(nambOfDox));
  var dots = document.getElementsByClassName("dot"+String(nambOfDox));
  if (n > slides.length) {slideIndex[nambOfDox] = 1}
  if (n < 1) {slideIndex[nambOfDox] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[nambOfDox]-1].style.display = "block";
  dots[slideIndex[nambOfDox]-1].className += " active";
}

	 
		 // Карта
		 // Функция которая создает HTML объект в который вставляется карта
   function initMap(nambOfDox) {
       var mapon = "<div id='map"+String(nambOfDox)+"' style='width:400px;height:400px;background:#2d8659'>my map</div>";
       document.getElementById('fotoOfdox'+String(nambOfDox)).innerHTML=mapon;
   }      
		 //Функция создающая карту
   function myMap(nam) {
  var nambOfConM=nam;  // чтобы вставлять разный кабель в одну функцию.

  var mapCanvas = document.getElementById("map"+String(nambOfConM));
  var   myPosition= cable[nambOfConM].fiz.path[0].coords;
  var mapOptions = {
    center: myPosition,
    zoom: 17
  }
    var map = new google.maps.Map(mapCanvas, mapOptions); // Инициализирует Карту
  
 var image1 = {
	 url:'foto/icon/Camera-icon_1_p.png'  //Иконка для маркеров с фото
	 
 };
 var image2 = {
	    path: google.maps.SymbolPath.CIRCLE, //Иконка для маркеров без фото
        scale: 3
 };
  var locations = cable[nambOfConM].fiz.path;
  var cablePathCoords1=[];
		 for (var n=0;n<locations.length;n++){
			 cablePathCoords1[n]= new google.maps.LatLng(locations[n].coords[0], locations[n].coords[1]); // Путь кабель  
		 }
	   setMarkers(map,locations)
	   function setMarkers(map,locations){
		   var marker, i;
		   for (i = 0; i < locations.length; i++)
 {  
	 var latlngset = new google.maps.LatLng(locations[i].coords[0], locations[i].coords[1]);
	 var title = locations[i].what;
	  
	   var marker = new google.maps.Marker({  // Маркеры
    		 position: latlngset,
    		 title: title,
		     icon: image1,
		     map:map
			 	});
	 if (locations[i].foto[0]==undefined){  // Если у маркера нет фото, то использовать иконку 2, без камеры
	 marker.icon = image2;
	 };
 			 map.setCenter(marker.getPosition())
			 var fotocontent ="";
			for (var f=0; f<locations[i].foto.length ;f++){
                
				fotocontent +="<a href='"+ locations[i].foto[f]+"'target='_blank'><img style='width:50px' src='"+locations[i].foto[f]+"'></a> "
			} 
	        
			var content ="<h6>"+locations[i].what+"</h6>"+fotocontent;
	 
	 var infowindow = new google.maps.InfoWindow() //Информационные окна
	 
	google.maps.event.addListener(marker,'click',   (function(marker,content,infowindow){
		return function() {
			infowindow.setContent(content); //События на клик
			infowindow.open(map,marker);
		};
	})(marker,content,infowindow)); 
	
	   }
	   }

	
  var cablePath= new google.maps.Polyline({ // Кабель
	  path:cablePathCoords1,
	  geodesic:true,
	  strokeColor: '#FF0000',
	  strokeOpacity: 1.0,
	  title:'cable',
      strokeWeight: 3
  });
cablePath.setMap(map);  // Инициализирует путь кабеля
       
 var contentCab=cable[nambOfConM].fiz.cabTipe; //Для того, чтобы при нажатии на кабель появлялось окно с маркой кабеля
       var infoWindow = new google.maps.InfoWindow({
               content:contentCab
           });
       cablePath.addListener('click', function(e) {
           
          infoWindow.setPosition(e.latLng);
           infoWindow.open(map);
       });
  }

// Форма поиска

function filterFunction() {
    var input, filter, acc, tables, tds, td, i, j;
    input=document.getElementById("myInput");
    filter=input.value.toUpperCase();
    acc= document.getElementsByClassName("accordion");
    for (i=0; i<acc.length;i++){
        
        tds=acc[i].getElementsByTagName("td");
        td="";
        for(j=0;j<tds.length;j++){
            td +=tds[j].innerHTML;
        }
            if (td){
                console.log(td.toUpperCase());
                console.log(td.toUpperCase().indexOf(filter));
                
                if (td.toUpperCase().indexOf(filter)>-1){
                    acc[i].style.display="";
                    acc[i].nextElementSibling.style.display="";
                } else {
                    acc[i].style.display="none";
                    acc[i].nextElementSibling.style.display="none";
                }
            }
        
    }
}
function functionRelativeTopnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className+=" responsive";
    } else {
        x.className="topnav";
    }
}




