var jumlahAngkot = 10,
angkotBeroperasi = 5,
noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	noAngkot++;
}

for(noAngkot = angkotBeroperasi+1; noAngkot <= jumlahAngkot; noAngkot++){
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}