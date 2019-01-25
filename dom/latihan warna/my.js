const button = document.querySelector('button');
button.addEventListener('click', function(){
	document.body.classList.toggle('warna');
});

const button1 = document.createElement('button');
const textButton1 = document.createTextNode('Ubah Warna Random');
button1.appendChild(textButton1);
button.after(button1);

const bWarnaRandom = document.getElementsByTagName('button')[1];
bWarnaRandom.onclick = function(){
	let r = Math.floor(Math.random() * 255 + 1);
	let g = Math.floor(Math.random() * 255 + 1);
	let b = Math.floor(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

const sMerah = document.querySelectorAll('input')[0];
const sHijau = document.querySelectorAll('input')[1];
const sBiru = document.querySelectorAll('input')[2];

sMerah.addEventListener('input', function(){
	const r = sMerah.value,
	h = sHijau.value,
	b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')';
});

sHijau.addEventListener('input', function(){
	const r = sMerah.value,
	h = sHijau.value,
	b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')';
});

sBiru.addEventListener('input', function(){
	const r = sMerah.value,
	h = sHijau.value,
	b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')';
});

window.document.addEventListener('mousemove', function(event){
	const pX = Math.round((event.clientX / window.innerWidth) * 255);
	const pY = Math.round((event.clientY / window.innerHeight) * 255);
	const pR = Math.round(Math.random() * 255);
	document.body.style.backgroundColor = 'rgb(' + pX + ',' + pY + ',' + pR + ')';
})