function getPilComp(){
	let comp = Math.random();
	if(comp <= 0.3) return 'gajah';
	if(comp > 0.3 && comp <= 0.6) return 'orang';
	return 'semut';
}

let totalMenang = 0;
let totalKalah = 0;
function getHasil(player, comp){
	function menang(){
		totalMenang++;
		const menang = document.querySelector('.player');
		menang.innerHTML = totalMenang;
		return 'MENANG';
	}
	function kalah(){
		
		totalKalah++;
		const kalah = document.querySelector('h2');
		kalah.innerHTML = totalKalah;
		return 'KALAH';
	}
	if(comp == player) return 'SERI';
	if(player == 'gajah') return (comp == 'orang') ? menang() : kalah();
	if(player == 'orang') return (comp == 'semut') ? menang() : kalah();
	if(player == 'semut') return (comp == 'gajah') ? menang() : kalah();
}

function putar(){
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	}, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilComp = getPilComp();
		const pilPlayer = pil.className;
		const hasil = getHasil(pilPlayer, pilComp);
		
		putar();
		
		setTimeout(function(){
			const iComp = document.querySelector('.img-computer');
			iComp.setAttribute('src', 'img/' + pilComp + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);
	});
});