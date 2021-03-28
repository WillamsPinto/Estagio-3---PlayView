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
    var el = document.getElementById(id);
    el.style.width = "100%";
}
  
function closeDiv(id) {
    var el = document.getElementById(id);
    el.style.width = "0";
}

function mostrarAtivo(tag){
    var tag_li = document.getElementById('item_menu');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ ){
       tag_a[i].style.color = "";
    }
       tag.style.color = "#ff0000";
    }

