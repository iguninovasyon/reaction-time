const game = document.getElementById("game");
const title = document.getElementById("title");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

let timeNow;
let greenDisplayed = false;
let reactionTime;

function setGreenColor() { // Burak Talha Arı
    // Oyun alanı arka planı #4bdb6a (yeşil) renk kodu ile değiştir.
    // Ekrana "Click" yaz.

    // "timeNow" değişkenine şimdi ki zamanı milisaniye cinsinden ata.
    greenDisplayed = true;
}

function startGame() { // Alper Dağdelen
    // Oyun alanına tıklandığı zaman arkaplan rengi #ce2636 (kırmızı) renk kodu ile değiştir.
    // Ekrana "Wait for green" yaz.

    // 1000 ile 8000 arasında random sayı üret (1 saniye ile 8 saniye arası)
    // Zaman aşımı oluştur. Üretilen saniye kadar bekleyip setGreenColor function 'ı çalıştırsın.
}

function displayReactionTime() { // Ege Sezer
    // oyun alanı arkaplan rengini #2b87d1 (mavi) renk kodu ile değiştir.
    // ekrana reactionTime değerini yazdır
    greenDisplayed = false;
}

game.addEventListener("click", function () {
    if (greenDisplayed) {
        reactionTime = (new Date.now() - timeNow);
        displayReactionTime();
    } else {
        startGame();
    }
});

