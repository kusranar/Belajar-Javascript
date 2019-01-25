var jumlahAngkot = 10;
for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
	if(noAngkot == 5 || noAngkot == 8 || noAngkot == 10){
		console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
	}
	else if(noAngkot <= 6){
		console.log('Angkot No. ' + noAngkot + ' sedang beroperasi.');
	}
	else{
		console.log('Angkot No. ' + noAngkot + ' tidak beroperasi.');
	}
}