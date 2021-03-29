function togglePerfil(id, id2) {
    var n = document.getElementById(id);
	if (n.style.display != 'none') 
	  {
	  n.style.display = 'none';
      document.getElementById(id2).setAttribute('aria-expanded', 'true');
  }else{
    n.style.display = 'block';
    document.getElementById(id2).setAttribute('aria-expanded', 'false');
	}
}

function videoController(){
    var myVideo = document.querySelector(".v").pause();
        

}

function openDiv(id) {
    closeDiv();
    var el = document.getElementById(id);
    el.style.width = "100%";
}

function closeDiv() {  
    
    var div = {0: 'apostila', 1: "unidade", 2: 'aula1', 3: 'atividade1', 4: 'aula1_2', 5:'atividade2', 6: 'aula1_3', 7:'atividade3', 8: 'aula2'};

    for (var cont = 0; cont in div; cont++){
        var el =document.getElementById(div[cont]);
        el.style.width = "0";
    }
}

function mostrarAtivo(tag){
    var tag_li = document.getElementById('item_menu');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ ){
       tag_a[i].style.color = "";
       tag_a[i].classList.remove("marcador");
    }
       tag.style.color = "#ff0000";
       tag.className = "marcador";
 
}

function desativo(id){
    var tag_a = document.getElementById(id);
    tag_a.style.color = "";
}

