var bannerAD=new Array();
var adNum=0;


bannerAD[0]="./img/destaque/aula.jpg";
bannerAD[1]="./img/destaque/ead.jpg";
bannerAD[2]="./img/destaque/ead1.jpg";
bannerAD[3]="./img/destaque/ead2.jpg";


var preloadedimages=new Array();
    for (i=1;i<bannerAD.length;i++){
        preloadedimages[i]=new Image();
        preloadedimages[i].src=bannerAD[i];
    }

function setTransition(){
    if (document.all){
        bannerADrotator.filters.revealTrans.Transition=Math.floor(Math.random()*23);
        bannerADrotator.filters.revealTrans.apply();
    }
}

function playTransition(){
    if (document.all)
        bannerADrotator.filters.revealTrans.play()
}

function nextAd(){
    if(adNum<bannerAD.length-1)adNum++;
    else adNum=0;
        setTransition();
        document.images.bannerADrotator.src=bannerAD[adNum];
        playTransition();
        theTimer=setTimeout("nextAd()", 5000);
}

function jump2url(){
    jumpUrl=bannerADlink[adNum];
    jumpTarget='_self';
    if (jumpUrl != ''){
    if (jumpTarget != '')window.open(jumpUrl,jumpTarget);
    else location.href=jumpUrl;
    }
}

function displayStatusMsg() { 
    status=bannerADlink[adNum];
    document.returnValue = true;
}

