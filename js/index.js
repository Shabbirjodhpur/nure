var quantity = 2;
var price = document.getElementById('nure-price');
var previous_button = document.getElementById('hundred-nure');
var currentMl = 100;
function mapOfPrice(num){
	if(num==100) return 60;
	if(num==150) return 85;
	if(num==350) return 190;
	if(num==500) return 275;
	if(num==1000) return 500;
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
		quantity = 2
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
		quantity = 2
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
		quantity = 1
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
		quantity = 1
	}
	if(num==1000){
		var current_button = document.getElementById('thousand-nure');
		if(previous_button.innerText==current_button.innerText) return;
		current_button.classList.remove('grey-button-dull')
		current_button.classList.add('orange-button-active')
		
		previous_button.classList.remove('orange-button-active')
		previous_button.classList.add('grey-button-dull')

		previous_button = current_button;
		currentMl = 1000
		quantity = 1
	}
	price.innerHTML = `Rs. ${mapOfPrice(num)*quantity}`
	document.getElementById('quantity-nure').innerText = quantity	
}
function decreaseQuantity(){
	if (quantity==2 && currentMl == 100 || quantity==2 && currentMl == 150){
		alert(`minimum order quantity for ${currentMl}ml is 2`)
		return;
	}
	if(quantity==1){
		return;
	}
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
	window.location = `http://wa.me/918125830385?text=Hey%2C%20I%20would%20like%20to%20Pre%2Dorder%20Vanilla%20Soft%20Serve%0AQuantity%3A%20${currentMl}%20ml%0ANumber%3A%20${quantity}%0ATotal%20Price%3A%20Rs%2E%20${mapOfPrice(currentMl)*quantity}`
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var quantityChoco = 2;
var priceChoco = document.getElementById('nure-price-choco');
var previous_button_choco = document.getElementById('hundred-nure-choco');
var currentMlChoco = 100;
function mapOfPriceChoco(num){
	if(num==100) return 60;
	if(num==150) return 85;
	if(num==350) return 190;
	if(num==500) return 275;
	if(num==1000) return 500;
}
function changeMlChoco(num){
	if(num==100){
		var current_button_choco = document.getElementById('hundred-nure-choco');
		if(previous_button_choco.innerText==current_button_choco.innerText) return;
		current_button_choco.classList.remove('grey-button-dull')
		current_button_choco.classList.add('orange-button-active')
		
		previous_button_choco.classList.remove('orange-button-active')
		previous_button_choco.classList.add('grey-button-dull')

		previous_button_choco = current_button_choco;
		currentMlChoco = 100;
		quantityChoco = 2
	}
	if(num==150){
		var current_button_choco = document.getElementById('one-fifty-nure-choco');
		if(previous_button_choco.innerText==current_button_choco.innerText) return;
		current_button_choco.classList.remove('grey-button-dull')
		current_button_choco.classList.add('orange-button-active')
		
		previous_button_choco.classList.remove('orange-button-active')
		previous_button_choco.classList.add('grey-button-dull')

		previous_button_choco = current_button_choco;
		currentMlChoco = 150;
		quantityChoco = 2
	}
	if(num==350){
		var current_button_choco = document.getElementById('three-fifty-nure-choco');
		if(previous_button_choco.innerText==current_button_choco.innerText) return;
		current_button_choco.classList.remove('grey-button-dull')
		current_button_choco.classList.add('orange-button-active')
		
		previous_button_choco.classList.remove('orange-button-active')
		previous_button_choco.classList.add('grey-button-dull')

		previous_button_choco = current_button_choco;
		currentMlChoco = 350
		quantityChoco = 1
	}
	if(num==500){
		var current_button_choco = document.getElementById('five-hundred-nure-choco');
		if(previous_button_choco.innerText==current_button_choco.innerText) return;
		current_button_choco.classList.remove('grey-button-dull')
		current_button_choco.classList.add('orange-button-active')
		
		previous_button_choco.classList.remove('orange-button-active')
		previous_button_choco.classList.add('grey-button-dull')

		previous_button_choco = current_button_choco;
		currentMlChoco = 500
		quantityChoco = 1
	}
	if(num==1000){
		var current_button_choco = document.getElementById('thousand-nure-choco');
		if(previous_button_choco.innerText==current_button_choco.innerText) return;
		current_button_choco.classList.remove('grey-button-dull')
		current_button_choco.classList.add('orange-button-active')
		
		previous_button_choco.classList.remove('orange-button-active')
		previous_button_choco.classList.add('grey-button-dull')

		previous_button_choco = current_button_choco;
		currentMlChoco = 1000
		quantityChoco = 1
	}
	priceChoco.innerHTML = `Rs. ${mapOfPriceChoco(num)*quantityChoco}`
	document.getElementById('quantity-nure-choco').innerText = quantityChoco	
}
function decreaseQuantityChoco(){
	if (quantityChoco==2 && currentMlChoco == 100 || quantityChoco==2 && currentMlChoco == 150){
		alert(`minimum order quantity for ${currentMl}ml is 2`)
		return;
	}
	if(quantityChoco==1){
		return;
	}
	quantityChoco--;
	document.getElementById('quantity-nure-choco').innerText = quantityChoco;
	priceChoco.innerHTML = `Rs. ${mapOfPriceChoco(currentMlChoco)*quantityChoco}`
}
function increaseQuantityChoco(){
	quantityChoco++;
	document.getElementById('quantity-nure-choco').innerText = quantityChoco;
	priceChoco.innerHTML = `Rs. ${mapOfPriceChoco(currentMlChoco)*quantityChoco}`
}

function orderWithSpecificChoco(){
	window.location = `http://wa.me/918125830385?text=Hey%2C%20I%20would%20like%20to%20Pre%2Dorder%20Chocolate%20Soft%20Serve%0AQuantity%3A%20${currentMlChoco}%20ml%0ANumber%3A%20${quantityChoco}%0ATotal%20Price%3A%20Rs%2E%20${mapOfPriceChoco(currentMlChoco)*quantityChoco}`
}





