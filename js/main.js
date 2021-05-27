class ProductsList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this._fetchProducts();
	}
	_fetchProducts() {
		this.goods = [
			{id: 1, title: 'Notebook', price: 2000},
			{id: 2, title: 'Mouse', price: 20},
			{id: 3, title: 'Keyboard', price: 200},
			{id: 4, title: 'Gamepad', price: 50},
		]
	}
	getProductsQuantity() {
		return this.goods.length;
	}
	render() {
		const container = document.querySelector(this.container);
		this.goods.forEach(item => {
			const itemObj = new ProductItem(item);
			container.insertAdjacentHTML('beforeend', itemObj.render() )
		})
	}
}

class ProductItem {
	constructor(item, img = 'https://via.placeholder.com/300x220') {
		this.title = item.title;
		this.price = item.price;
		this.id = item.id;
		this.img = img;
	}
	render() {
		return `<div class="product-item" data-id="${this.id}">
			<img src="${this.img}"/>
			<h3>${this.title}</h3>
			<p>${this.price}$</p>
			<button class="buy-btn">Купить</button>
		</div>`
	}
}


// cart classes


 class Cart {
	 constructor(container = '.cart') {
		this.container = container;
		this.goods = [];
		this.totalPrice = 0;
		this._init();
	 }
	 _init() {
		
	 }
	 addCartItem() {
		
	 }
	 removeCartItem() {
		
	 }
 }

 class CartItem extends ProductItem {
	 constructor(item, img = 'https://via.placeholder.com/300x220', quantity = 1) {
		 super(item, img);
		 this.quantity = quantity;
	 }
	 increase() {

	 }
	 reduce() {

	 }
 }


const products = new ProductsList();
products.render();






 //////// humburger
 const sizes = [
	{
		name: 'small',
		price: 50,
		calories: 20
	},
	{
		name: 'big',
		price: 100,
		calories: 40
	}
];
const fillings = [
	{
		name: 'cheese',
		price: 10,
		calories: 20
	},
	{
		name: 'salad',
		price: 20,
		calories: 5
	},
	{
		name: 'potato',
		price: 15,
		calories: 10
	}
];
const toppings = [
	{
		name: 'spice',
		price: 15,
		calories: 0
	},
	{
		name: 'mayonnaise',
		price: 20,
		calories: 5
	}
];

 // burger class
 class Hamburger {
	constructor( {size = 'small', filling = 'cheese'} ) {
		this._availableSizes = sizes;
		this._availableFillings = fillings;
		this._availableToppings = toppings;

		this._init(size, filling);
	}
	_init(size, filling) {
		const validSize = this._availableSizes.find(item => item.name === size.toLowerCase());
		const validFilling = this._availableFillings.find(item => item.name === filling.toLowerCase());

		if ( !validSize || !validFilling) {
			return new Error('Invalid parameters');
		} 
		this._size = validSize;
		this._filling = validFilling;
		this._toppings = [];
	}
	addTopping(toppingName) {
		const topping = this._availableToppings.find(item => item.name === toppingName.toLowerCase());
		if (!topping) {
			return new Error('Unknown topping');
		}

		const alreadyAdded = this._toppings.includes(topping);

		if (alreadyAdded) {
			console.warn('The topping has already been added');
		} else {
			this._toppings.push(topping);
		}
	}
	removeTopping(toppingName) {
		const topping = this._availableToppings.find(item => item.name === toppingName.toLowerCase());
		if (!topping) {
			return new Error('Unknown topping');
		}

		const alreadyAdded = this._toppings.includes(topping);

		if (alreadyAdded) {
			this._toppings = this._toppings.filter(item => item !== topping);
		} else {
			console.warn('The topping not added');
		}
	}
	calculatePrice() {
		let totalPrice = this._filling.price + this._size.price;
		if (this._toppings) {
			this._toppings.forEach(topping => totalPrice += topping.price)
		}
		return totalPrice;
	}
	calculateCalories() {
		let totalCalories = this._filling.calories + this._size.calories;
		if (this._toppings) {
			this._toppings.forEach(topping => totalCalories += topping.calories)
		}
		return totalCalories;
	}
	getToppings() {
		return this._toppings.map(topping => topping.name);
	}
	getSize() {
		return this._size.name;
	}
	getFilling() {
		return this._filling.name;
	}

 }

 const burger = new Hamburger({
	size: 'big',
	filling: 'salad'
});
