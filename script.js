var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var indexFilled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Isi kotak dengan nomor random
function fillGameBoard(gameBoard) {
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
    }
    return gameBoard;
}

function boxCLicked(index, indexFilled) {
    indexFilled[index] = 1;
    return indexFilled;
}

var lineCollected = 0;

function checkLine(indexFilled) {
    lineCollected = 0;
    if(indexFilled[0] === 1 && indexFilled[1] === 1 && indexFilled[2] === 1 && indexFilled[3] === 1 && indexFilled[4] === 1) {//baris pertama
        lineCollected++;
    }
    if (indexFilled[5] === 1 && indexFilled[6] === 1 && indexFilled[7] === 1 && indexFilled[8] === 1 && indexFilled[9] === 1) {//baris kedua
        lineCollected++;
    }
    if (indexFilled[10] === 1 && indexFilled[11] === 1 && indexFilled[12] === 1 && indexFilled[13] === 1 && indexFilled[14] === 1) {//baris ketiga
        lineCollected++;
    }
    if (indexFilled[15] === 1 && indexFilled[16] === 1 && indexFilled[17] === 1 && indexFilled[18] === 1 && indexFilled[19] === 1) {//baris keempat
        lineCollected++;
    }
    if (indexFilled[20] === 1 && indexFilled[21] === 1 && indexFilled[22] === 1 && indexFilled[23] === 1 && indexFilled[24] === 1) {//baris kelima
        lineCollected++;
    }
    if(indexFilled[0] === 1 && indexFilled[5] === 1 && indexFilled[10] === 1 && indexFilled[15] === 1 && indexFilled[20] === 1) {//kolom pertama
        lineCollected++;
    }
    if(indexFilled[1] === 1 && indexFilled[6] === 1 && indexFilled[11] === 1 && indexFilled[16] === 1 && indexFilled[21] === 1) {//kolom kedua
        lineCollected++;
    }
    if(indexFilled[2] === 1 && indexFilled[7] === 1 && indexFilled[12] === 1 && indexFilled[17] === 1 && indexFilled[22] === 1) {//kolom ketiga
        lineCollected++;
    }
    if(indexFilled[3] === 1 && indexFilled[8] === 1 && indexFilled[13] === 1 && indexFilled[18] === 1 && indexFilled[23] === 1) {//kolom keempat
        lineCollected++;
    }
    if(indexFilled[4] === 1 && indexFilled[9] === 1 && indexFilled[14] === 1 && indexFilled[19] === 1 && indexFilled[24] === 1) {//kolom kelima
        lineCollected++;
    }
    if(indexFilled[0] === 1 && indexFilled[6] === 1 && indexFilled[12] === 1 && indexFilled[18] === 1 && indexFilled[24] === 1) {//diagonal \
        lineCollected++;
    }
    if(indexFilled[4] === 1 && indexFilled[8] === 1 && indexFilled[12] === 1 && indexFilled[16] === 1 && indexFilled[20] === 1) {//diagonal /
        lineCollected++;
    }
    return lineCollected;
}
console.log(checkLine(indexFilled))