const h1 = document.getElementById('judul');
h1.innerHTML = 'ini baru diganti dengan innerHTML, style.propertycss, setAttribute';
h1.style.color = 'lightblue';
h1.setAttribute('name', 'kusrana');
const idH1 = h1.getAttribute('id');

const pClassP1 = document.getElementsByTagName('p')[0];
pClassP1.setAttribute('name', 'kus');
pClassP1.innerHTML = 'ini menghapus attribute name menggunakan removeAttribute';
pClassP1.removeAttribute('name');

const sectionAClassP2 = document.getElementsByClassName('p2')[0];
sectionAClassP2.classList.add('coba', 'coba1');
sectionAClassP2.innerHTML = "classList.add('' , '')";

const sectionAClassP3 = document.getElementsByClassName('p3')[0];
sectionAClassP3.classList.add('coba', 'coba1');
sectionAClassP3.classList.remove('coba1');
sectionAClassP3.innerHTML = "classList.remove('' , '')";

const SectionBP = document.querySelector('section#b p');
SectionBP.innerHTML = 'ini menggunakan toggle';
SectionBP.addEventListener('click', function(){
	SectionBP.classList.toggle('coba1');
});

const SectionBUl1 = document.querySelectorAll('li')[0];
SectionBUl1.innerHTML = "ini menggunakan classList.replace('baru' ,'lama')";
SectionBUl1.classList.add('coba');
SectionBUl1.classList.replace('coba', 'coba1');