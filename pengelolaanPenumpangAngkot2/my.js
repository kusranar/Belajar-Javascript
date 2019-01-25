var angkot = ["kusrana", "kus" ,"rizki"];
var penumpangNaik  = function(namaPenumpang){

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
			else if(i == angkot.length){
				angkot.push(namaPenumpang);
				return angkot;
			}
		}
	}
}

var penumpangTurun = function(namaPenumpang){
	if (!angkot.length){
		console.log('Angkot Kosong');
		return angkot;
	}
	else {
		for(var i = 0; i <= angkot.length; i++){
			if(namaPenumpang == angkot[i]){
				angkot[i] = undefined;
				return angkot;
			}
			else if(i == angkot.length){
				console.log('Tidak Ada ' + namaPenumpang + ' di Angkot');
				return angkot;
			}
		}
	}
}

