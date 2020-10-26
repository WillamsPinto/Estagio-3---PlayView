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


