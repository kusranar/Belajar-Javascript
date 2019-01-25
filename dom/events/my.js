const sectionB = document.getElementById('b');
const p4SectionB = sectionB.querySelector('section#b p');
p4SectionB.addEventListener('click', function(){
	const elementBaru = document.createElement('p');
	const textElementBaru = document.createTextNode('ini baru');
	elementBaru.appendChild(textElementBaru);
	sectionB.appendChild(elementBaru);
});