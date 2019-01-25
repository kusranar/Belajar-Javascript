const divContainer = document.getElementById('container');
divContainer.style.backgroundColor = 'lightblue';

const sectionA = divContainer.getElementsByTagName('section')[0];
sectionA.style.backgroundColor = 'lime';

const classP1 = sectionA.getElementsByClassName('p1')[0];
classP1.innerHTML = 'ini baru pake getElementsByClassName';

const li1 = document.querySelector('section#b ul li:nth-child(1)');
li1.innerHTML = 'ini baru pake querySelector';

const li2 = document.querySelectorAll('li')[1];
li2.innerHTML = 'ini baru pake querySelectorAll';