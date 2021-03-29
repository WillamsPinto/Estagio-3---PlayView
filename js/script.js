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

function mostrarAtivo(tag, id){
    var tag_li = document.getElementById('item_menu');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ ){
       tag_a[i].style.color = "";
       tag_a[i].classList.remove("marcador");
    }
       tag.style.color = "#ff0000";
       tag.className = "marcador";
       openDiv(id);
}

function openDiv(id) {
    closeDiv();
    var el = document.getElementById(id);
    el.style.width = "100%";
}

function closeDiv() {  
    // fechando todas as paginas - coloca o ID da DIV do corpo. Acrescentar no vetor quando colocar contudos novos.
    var div = {0: 'apostila', 1: "unidade", 2: 'aula1', 3: 'atividade1', 4: 'aula1_2', 5:'atividade2', 6: 'aula1_3', 7:'atividade3', 8: 'dica01',
    9: "aula2", 10: "unidade2",  11: "aula3_1", 12: "atividade4", 13: "aula3_2", 14:"atividade5", 15:"aula3_3" , 16: 'atividade6',
    17: "aula4_1", 18: "atividade7", 19: "aula4_2", 20:"atividade8", 21:"aula5_1" , 22: 'aula5_1_2', 23: 'aula5_2', 24: "aula6_1", 25: "aula6_2", 
    26: "aula7_1", 27:"aula7_2_1", 28:"aula7_2_2" , 29: 'aula8_1', 30: 'aula8_2', 31: 'aula8_3', 32: 'aula8_4', 33: 'aula8_5', 34: 'aula9_1', 35: 'aula9_2',
    36: "atividade9", 37: "atividade10", 38: "atividade11", 39: "atividade12", 40: "atividade13", 41: "atividade14", 42: "atividade15" 
 };

    for (var cont = 0; cont in div; cont++){
        var el =document.getElementById(div[cont]);
        el.style.width = "0";
    }
}

function desativo(id){
    var tag_a = document.getElementById(id);
    tag_a.style.color = "";
}

