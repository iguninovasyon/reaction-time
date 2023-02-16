const game = document.getElementById("game");
const title = document.getElementById("title");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

let timeNow;
let greenDisplayed = false;
let reactionTime;

function setGreenColor() { // Burak Talha Tarı
    // Oyun alanı arka planı #4bdb6a (yeşil) renk kodu ile değiştir.
    game.style.backgroundColor = "#4bdb6a";
    // Ekrana "Click" yaz.
    title.innerHTML="Click"
    description.innerHTML=""
    icon.innerHTML='<svg aria-hidden="true" widht="100" height="100" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>'
    // "timeNow" değişkenine şimdi ki zamanı milisaniye cinsinden ata.
    var timeNow = Date.now();
    greenDisplayed = true;
}




function startGame() { // Alper Dağdelen
    //(Yapıldı) Oyun alanına tıklandığı zaman arkaplan rengi #ce2636 (kırmızı) renk kodu ile değiştir.
    // (Yapıldı)Ekrana "Wait for green" yaz.
    
        game.style.background="#ce2636";
            title.innerHTML="Wait For Green..."
            description.innerHTML=""
            icon.innerHTML='<svg width="100" height="128" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>'
            let randoms=Math.floor(Math.random()*8000);   
            const delay=setTimeout(setGreenColor,randoms);
            console.log(randoms)
    // (Yapıldı)1000 ile 8000 arasında random sayı üret (1 saniye ile 8 saniye arası)
    // (Yapıldı)Zaman aşımı oluştur. Üretilen saniye kadar bekleyip setGreenColor function 'ı çalıştırsın.
}

function displayReactionTime() { // Ege Sezer
    // oyun alanı arkaplan rengini #2b87d1 (mavi) renk kodu ile değiştir.
    // ekrana reactionTime değerini yazdır
    greenDisplayed = false;
    game.style.backgroundColor = "#2b87d1";
    title.innerHTML=reactionTime +  " ms ";
    description.innerHTML="";
    icon.innerHTML="";
    
}


game.addEventListener("click", function () {
    if (greenDisplayed) {
        reactionTime = (new Date.now() - timeNow);  56
        displayReactionTime();
    } else {
        startGame();
    }
});

