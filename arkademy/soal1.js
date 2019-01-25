var cetak = '';

function drawLine(panjangPersegi, bilanganGanjil){
	for(var i = 1; i <= panjangPersegi; i++){
		for(var j = 1; j <= panjangPersegi; j++){
			if((i == 1 && j % 2 == 1) || (i == bilanganGanjil && j % 2 == 1) || (i == panjangPersegi && j % 2 == 1) || (i % 2 == 1 && i > 1 && j % 2 == 1 && j == bilanganGanjil) || (i % 2 == 1 && i > 1 && j % 2 == 1 && j == panjangPersegi) || (i % 2 == 1 && i > 1 && j % 2 == 1 && j == 1)){
				cetak += '*';
			}
			else {
				cetak += ' ';
			}
		}
		cetak += '\n';
	}
	
	return cetak;
}

console.log(drawLine(13, 7));