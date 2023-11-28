var quantity = 1;
var price = document.getElementById('nure-price');
var previous_button = document.getElementById('hundred-nure');
var currentMl = 100;
function mapOfPrice(num){
	if(num==100) return 80;
	if(num==150) return 85;
	if(num==350) return 190;
	if(num==500) return 300;
}
function changeMl(num){
	if(num==100){
		var current_button = document.getElementById('hundred-nure');
		if(previous_button.innerText==current_button.innerText) return;
		current_button.classList.remove('grey-button-dull')
		current_button.classList.add('orange-button-active')
		
		previous_button.classList.remove('orange-button-active')
		previous_button.classList.add('grey-button-dull')

		previous_button = current_button;
		currentMl = 100;
	}
	if(num==150){
		var current_button = document.getElementById('one-fifty-nure');
		if(previous_button.innerText==current_button.innerText) return;
		current_button.classList.remove('grey-button-dull')
		current_button.classList.add('orange-button-active')
		
		previous_button.classList.remove('orange-button-active')
		previous_button.classList.add('grey-button-dull')

		previous_button = current_button;
		currentMl = 150;
	}
	if(num==350){
		var current_button = document.getElementById('three-fifty-nure');
		if(previous_button.innerText==current_button.innerText) return;
		current_button.classList.remove('grey-button-dull')
		current_button.classList.add('orange-button-active')
		
		previous_button.classList.remove('orange-button-active')
		previous_button.classList.add('grey-button-dull')

		previous_button = current_button;
		currentMl = 350
	}
	if(num==500){
		var current_button = document.getElementById('five-hundred-nure');
		if(previous_button.innerText==current_button.innerText) return;
		current_button.classList.remove('grey-button-dull')
		current_button.classList.add('orange-button-active')
		
		previous_button.classList.remove('orange-button-active')
		previous_button.classList.add('grey-button-dull')

		previous_button = current_button;
		currentMl = 500
	}
	price.innerHTML = `Rs. ${mapOfPrice(num)*quantity}`	
}
function decreaseQuantity(){
	if (quantity==1) return;
	quantity--;
	document.getElementById('quantity-nure').innerText = quantity;
	price.innerHTML = `Rs. ${mapOfPrice(currentMl)*quantity}`
}
function increaseQuantity(){
	quantity++;
	document.getElementById('quantity-nure').innerText = quantity;
	price.innerHTML = `Rs. ${mapOfPrice(currentMl)*quantity}`
}

function orderWithSpecific(){
	window.location = `http://wa.me/918125830385?text=Hey%2C%20I%20would%20like%20to%20Pre%2Dorder%0AQuantity%3A%20${currentMl}%20ml%0ANumber%3A%20${quantity}%0ATotal%20Price%3A%20Rs%2E%20${mapOfPrice(currentMl)*quantity}`
}







