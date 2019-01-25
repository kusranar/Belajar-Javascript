var angkot = ["kusrana", "kus" ,"rizki"];
function tambahPenumpang(namaPenumpang){

	if (!angkot.length) {
  		angkot.push(namaPenumpang);
  		return angkot;
	}
	else{
		for(var i = 0; i <= angkot.length; i++){
			if(angkot[i] === undefined){
				angkot[i] = namaPenumpang;
				return angkot;
			}
			else if(angkot[i] == namaPenumpang){
				console.log(namaPenumpang + ' Sudah Ada Didalam Angkot');
				return angkot;
			}
			else if(angkot[i] == penumpang.length){
				angkot.push(namaPenumpang);
				return angkot;
			}
		}
	}
} 
console.log(tambahPenumpang('kusay'));
