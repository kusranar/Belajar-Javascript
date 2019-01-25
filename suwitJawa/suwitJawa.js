var mainLagi = true;
while(mainLagi){
	// menangkap inputan user
	var inputUser = prompt('Game Suwit Jawa\nPilih : Gajah, Orang, Semut');
	inputUser = inputUser.toUpperCase();

	// menangkap inputan komputer
	var inputKomputer = Math.floor(Math.random()*10);
	if(inputKomputer < 4){
		inputKomputer = 'GAJAH';
	}
	else if(inputKomputer > 3 && inputKomputer < 7){
		inputKomputer = 'ORANG';
	}
	else{
		inputKomputer = 'SEMUT';
	}

	// membandingkan inputan user dan inputan komputer
	var hasil ='';
	if(inputKomputer == inputUser){
		hasil = 'Yaaaah SERI, ayo coba lagi!';
	}
	else if((inputKomputer == 'GAJAH' && inputUser == 'SEMUT') || (inputKomputer == 'ORANG' && inputUser == 'GAJAH') || (inputKomputer == 'SEMUT' && inputUser == 'ORANG')){
		hasil = 'Selamat, Kamu MENANG!';
	}
	else if((inputKomputer == 'GAJAH' && inputUser == 'ORANG') || (inputKomputer == 'ORANG' && inputUser == 'SEMUT') || (inputKomputer == 'SEMUT' && inputUser == 'GAJAH')){
		hasil = 'Hahaha, kasian deh KALAH!';
	}
	else{
		hasil = false;
	}

	// mencetak hasil ke layar
	if(hasil == 'Yaaaah SERI, ayo coba lagi!' || hasil == 'Selamat, Kamu MENANG!' || hasil == 'Hahaha, kasian deh KALAH!'){
		alert('Kamu : ' + inputUser + ' vs Komputer : ' + inputKomputer + '\n\n' + hasil);
	}
	else {
		alert('Input Yang Anda Masukan Salah!');
	}

	// menawarkan untuk main lagi
	mainLagi = confirm('Ingin Main Lagi?');
}



