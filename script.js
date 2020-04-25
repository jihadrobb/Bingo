var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var indexFilled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //untuk menandai index yg sudah di klik
var gameEnded = false;

// Isi kotak dengan nomor random
function fillGameBoard() {
    for (let i = 0; i < gameBoard.length; i++) {
        var temp = Math.floor((Math.random() * 25) + 1);
        while (true) {
            var check = false;
            for (let j = 0; j < gameBoard.length; j++) {
                if (gameBoard[j] === temp) {
                    check = true;
                }
            }
            if (!check) {
                break;
            } else {
                temp = Math.floor((Math.random() * 25) + 1);
            }
        }
        gameBoard[i] = temp;
        indexFilled[i] = 0;
        document.getElementById(i).innerHTML = gameBoard[i];
        document.getElementById(i).onclick = function () {
            boxCLicked(i)
        };
    }
}
//untuk restart ulang game
// function restart(){
//     gameEnded = false;
//     fillGameBoard();
// }
//untuk mengetahui status game
function gameStatus() {
    var lineCollected = checkLine();
    switch (lineCollected) {
        case 0:
            return '';
        case 1:
            return 'B';
        case 2:
            return 'B I';
        case 3:
            return 'B I N';
        case 4:
            return 'B I N G';
        default:
            gameEnded = true;
            return 'B I N G O ! Congratulations, You Win!';
    }
}

//klik salah satu nomor di box (kasih highlight)
function boxCLicked(index) {
    if (gameEnded) {
        return;
    } else {
        var status = document.querySelector(".game-status");
        indexFilled[index] = 1;
        document.getElementById(index).style.background = '#81d4fa';
        status.innerHTML = gameStatus();
    }
}

//cek sudah berapa baris yang didapat
function checkLine() {
    var lineCollected = 0;
    if (indexFilled[0] === 1 && indexFilled[1] === 1 && indexFilled[2] === 1 && indexFilled[3] === 1 && indexFilled[4] === 1) { //baris pertama
        lineCollected++;
    }
    if (indexFilled[5] === 1 && indexFilled[6] === 1 && indexFilled[7] === 1 && indexFilled[8] === 1 && indexFilled[9] === 1) { //baris kedua
        lineCollected++;
    }
    if (indexFilled[10] === 1 && indexFilled[11] === 1 && indexFilled[12] === 1 && indexFilled[13] === 1 && indexFilled[14] === 1) { //baris ketiga
        lineCollected++;
    }
    if (indexFilled[15] === 1 && indexFilled[16] === 1 && indexFilled[17] === 1 && indexFilled[18] === 1 && indexFilled[19] === 1) { //baris keempat
        lineCollected++;
    }
    if (indexFilled[20] === 1 && indexFilled[21] === 1 && indexFilled[22] === 1 && indexFilled[23] === 1 && indexFilled[24] === 1) { //baris kelima
        lineCollected++;
    }
    if (indexFilled[0] === 1 && indexFilled[5] === 1 && indexFilled[10] === 1 && indexFilled[15] === 1 && indexFilled[20] === 1) { //kolom pertama
        lineCollected++;
    }
    if (indexFilled[1] === 1 && indexFilled[6] === 1 && indexFilled[11] === 1 && indexFilled[16] === 1 && indexFilled[21] === 1) { //kolom kedua
        lineCollected++;
    }
    if (indexFilled[2] === 1 && indexFilled[7] === 1 && indexFilled[12] === 1 && indexFilled[17] === 1 && indexFilled[22] === 1) { //kolom ketiga
        lineCollected++;
    }
    if (indexFilled[3] === 1 && indexFilled[8] === 1 && indexFilled[13] === 1 && indexFilled[18] === 1 && indexFilled[23] === 1) { //kolom keempat
        lineCollected++;
    }
    if (indexFilled[4] === 1 && indexFilled[9] === 1 && indexFilled[14] === 1 && indexFilled[19] === 1 && indexFilled[24] === 1) { //kolom kelima
        lineCollected++;
    }
    if (indexFilled[0] === 1 && indexFilled[6] === 1 && indexFilled[12] === 1 && indexFilled[18] === 1 && indexFilled[24] === 1) { //diagonal \
        lineCollected++;
    }
    if (indexFilled[4] === 1 && indexFilled[8] === 1 && indexFilled[12] === 1 && indexFilled[16] === 1 && indexFilled[20] === 1) { //diagonal /
        lineCollected++;
    }
    return lineCollected;
}
//program utama
fillGameBoard();
