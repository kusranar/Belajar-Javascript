const container = document.querySelector('.container');


container.addEventListener('click', function(e){
	const jumbo = document.querySelector('.jumbo');
	if(e.target.className == 'thumb'){
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		e.target.classList.toggle('abc');
		setTimeout(function(){
			jumbo.classList.remove('fade');
		}, 500);
	}
});