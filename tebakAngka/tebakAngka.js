// mulai, penentuan variable
var kesempatan = 3;
var percobaan = true;
alert('Tebak Angka Dari 1 - 10\nKamu Punya ' + kesempatan + ' Kesempatan');


// menentukan inputan komputer
var komputerInput = Math.floor(Math.random()*10)+1;
console.log(komputerInput);



// pemrosesan inputan user dan komputer
while(percobaan){
	
	// menangkap inputan user
	var userInput = parseInt(prompt('Masukan Angka Tebakan Anda'));
	console.log(userInput);

	if(userInput == komputerInput){
		hasil = "Anda Benar!\n\nAngka Yang Dicari Adalah : " + komputerInput;
		percobaan = false;
	}
	
	else if(userInput < komputerInput){
		kesempatan -= 1;
		hasil = "Tebakan Anda Terlalu Rendah\n\nAyoo Masih Ada " + kesempatan + " Kesempatan Lagi";
		percobaan = true;
	}

	else if(userInput > komputerInput){
		kesempatan -= 1;
		hasil = "Tebakan Anda Terlalu Tinggi\n\nnAyoo Masih Ada " + kesempatan + " Kesempatan Lagi";
		percobaan = true;
	}

	else{
		hasil = "Nilai Yang Anda Masukan Bukan Angka";
		percobaan = false;
	}

	if(kesempatan == 0){
		alert('Kesempatan Anda Habis\n\nNilai Yang Harus Ditebak Adalah ' + komputerInput);
		percobaan = false;
	}
	else {
	 	alert(hasil);
	}
}

// mencetak kelayar