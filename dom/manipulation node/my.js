const sectionAP4 = document.createElement('p');
const textSectionAP4 = document.createTextNode("ini baru menggunakan .createElement .createTextNode dan .appendChild('');");
sectionAP4.appendChild(textSectionAP4);
const sectionA = document.getElementById('a');
sectionA.appendChild(sectionAP4);


const sectionAP2_P3 = document.createElement('p');
const textSectionAP2_P3 = document.createTextNode("ini menggunakan .createElement .createTextNode dan parentNode.insertBefore('yg mau diinsert','path node sesudah path yg mau ditaro')");
sectionAP2_P3.appendChild(textSectionAP2_P3);
const sectionAP3 = sectionA.querySelector('p:nth-child(4)');
sectionA.insertBefore(sectionAP2_P3, sectionAP3);

const ulClassM = document.getElementsByClassName('m')[0];
const l1 = ulClassM.getElementsByTagName('li')[0];
const l2 = ulClassM.getElementsByTagName('li')[1];
const l3 = ulClassM.getElementsByTagName('li')[2];

l1.innerHTML = 'ini item 1, tadinya item 3 ada tapi di remove menggunakan parentNode.removeChild(path yg mau diremove);';

ulClassM.removeChild(l3);

const buatReplace = document.createElement('li');
const textBuatReplace = document.createTextNode('ini item 2 dan direplace menggunakan parentNode.replaceChild(element baru, path element yg mau diganti);');
buatReplace.appendChild(textBuatReplace);
ulClassM.replaceChild(buatReplace, l2);