const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
	constructor(container = '.products', cart) {
		this.container = container;
		this.goods = [];
		this.cart = cart;
		this._getProducts()
		.then(data => {
			this.goods = [...data];
			this.render()
			document.querySelectorAll('.buy-btn')
			.forEach(item => item.addEventListener('click', e => {
				const obj = this.goods.find(good => good.id_product === +e.target.dataset.id);
				this.cart.addCartItem(obj)
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
		const desiredItem = this.goods.find(i => i.id_product === good.id_product);
		if ( desiredItem ) {
			desiredItem.quantity++;
		} else {
			const item = new CartItem(good);
			this.goods.push(item);
		}
		this.render();
	 }
	 removeCartItem(goodID) {
		const desiredItem = this.goods.find(i => i.id_product === +goodID);
		if ( desiredItem.quantity !== 1 ) {
			desiredItem.quantity--;
		} else {
			this.goods.splice(desiredItem, 1);
		}
		this.render();
	 }
	 render() {
		this.container.innerHTML = '';
		this.goods.forEach(good => {
			this.container.insertAdjacentHTML('beforeend', good.render() );
		})
		document.querySelectorAll('.reduce-item-quantity').forEach(item => {
			item.addEventListener('click', (e) => {
				this.removeCartItem(e.currentTarget.dataset.id);
			});
		});
		document.querySelectorAll('.increase-item-quantity').forEach(item => {
			item.addEventListener('click', (e) => {
				const obj = this.goods.find(good => {
					return good.id_product === +e.currentTarget.dataset.id
				});
				if (obj) {
					this.addCartItem(obj);
				}
			});
		})
	 }
 }

 class CartItem extends ProductItem {
	 constructor(item, img = 'https://via.placeholder.com/300x220', quantity = 1) {
		 super(item, img);
		 this.quantity = quantity;
	 }
	 render() {
		 return `
		 <div class="cart__item" data-id="${this.id_product}">
			 <img src="${this.img}">
			 <div class="cart__item-description">
				 <h3>${this.product_name}</h3>
				 <div class="cart__item-quantity">
					<button class="reduce-item-quantity" data-id="${this.id_product}">
						<i class="fas fa-minus"></i>
					</button>
					<span>${this.quantity}</span>
					<button class="increase-item-quantity" data-id="${this.id_product}">
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

async function request(url) {
	const response = await fetch(url);
	return await response.json();
}

//cart init
let cart;
let products;

async function shopInit() {
	const data = await request(`${API}/getBasket.json`);
	cart = new Cart('.cart__items', data);
	products = new ProductsList('.products', cart);
	products.render();
}
shopInit();

