const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this._getProducts()
		.then(data => {
			this.goods = [...data];
			this.render()
			document.querySelectorAll('.buy-btn')
			.forEach(item => item.addEventListener('click', e => {
				
			}));
		});

	}
	_getProducts() {
		return fetch(`${API}/catalogData.json`)
		.then( data => data.json() )
	}
	getTotalPrice() {
		return this.goods.reduce( (sum, item) => sum += item.price, 0 );
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
		this.product_name = item.product_name;
		this.price = item.price;
		this.id_product = item.id_product;
		this.img = img;
	}
	render() {
		return `<div class="product-item">
			<img src="${this.img}"/>
			<h3>${this.product_name}</h3>
			<p>${this.price}$</p>
			<button class="buy-btn" data-id="${this.id_product}">Купить</button>
		</div>`
	}
}


// cart classes


 class Cart {
	 constructor(container = '.cart__items', {amount, countGoods, contents = []}) {
		this.container = document.querySelector(container);
		this.goods = [];
		this.countGoods = 0;
		this.totalPrice = 0;
		this._init(contents);
	 }
	 _init(goodsList) {
		if ( goodsList instanceof Array && goodsList.length) {
			this.countGoods = goodsList.length;
			this.totalPrice = goodsList.reduce( (sum, item) => sum += item.price, 0);
		}
		
		goodsList.forEach( good => {
			this.addCartItem( good );
		});
	 }
	 addCartItem(good) {
		if (good.target) {
			
		}
		const item = new CartItem(good);
		this.goods.push(item);
		this.render();
	 }
	 removeCartItem(good) {
		
	 }
	 render() {
		this.container.innerHTML = '';
		this.goods.forEach(good => {
			this.container.insertAdjacentHTML('beforeend', good.render() );
		})
	 }
 }

 class CartItem extends ProductItem {
	 constructor(item, img = 'https://via.placeholder.com/300x220', quantity = 1) {
		 super(item, img);
		 this.quantity = quantity;
	 }
	 increase() {
		this.quantity++;
	 }
	 reduce() {
		if (this.quantity !== 1) {
			this.quantity--;
		}
	 }
	 render() {
		 return `
		 <div class="cart__item" data-id="${this.id_product}">
			 <img src="${this.img}">
			 <div class="cart__item-description">
				 <h3>${this.product_name}</h3>
				 <div class="cart__item-quantity">
					 <button class="reduce-item-quantity">
						 <i class="fas fa-minus"></i>
					 </button>
					 <span>${this.quantity}</span>
					 <button class="increase-item-quantity">
						 <i class="fas fa-plus"></i>
					 </button>
				 </div>

				 <div class="cart__item-price">
					 <span>${this.price}</span>$
				 </div>
			 </div>
		 </div>
		 `
	 }

 }


const products = new ProductsList();
products.render();

let cart;
async function cartInit() {
	const data = await request(`${API}/getBasket.json`);
	cart = new Cart('.cart__items', data);
}
cartInit();




// const cartData = ;





async function request(url) {
	const response = await fetch(url);
	return await response.json();
}




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
