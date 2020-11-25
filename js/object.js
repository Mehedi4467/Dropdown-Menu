let car={
		brand: 'Audi',
		color: 'Red',
		model: 'A4',
		price: 5400
	};
	// let changeOption1=car['price'];
	
	function Myprice() {
		document.getElementById('price').innerHTML=car.price;
	}
	function Mybrand() {
		document.getElementById('brand').innerHTML=car.brand;
	}
	function Mycolor() {
		document.getElementById('color').innerHTML=car.color;
	}
	function Mymodel() {
		document.getElementById('model').innerHTML=car.model;
	}
