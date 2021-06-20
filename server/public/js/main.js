const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



const App = {
	data() {
		return {
			items: [],
			cartItems: [],
			userSearch: '',
			imgUrl: 'https://via.placeholder.com/300x220',
			cartShow: false,
			requestError: false
		}
	},
	components: {
		Cart,
		SearchField,
		CartToggle,
		Products,
		RequestError
	},
	methods: {
		changeLocalStorage() {
			localStorage.setItem('cartData', JSON.stringify(this.cartItems));
		},
		addToCart(id) {
			const item = this.items.find(item => item.id_product === id);
			const cartItem = this.cartItems.find(item => item.id_product === id);
			if (item && !cartItem) {
				this.cartItems.push({ ...item, quantity: 1 });
			} else {
				this.increaseCartItem(id)
			}
			this.changeLocalStorage();
		},
		removeFromCart(id) {
			const cartItem = this.cartItems.find(item => item.id_product === id);
			this.cartItems.splice(cartItem, 1);
			this.changeLocalStorage();
		},
		increaseCartItem(id){
			this.cartItems.find(item => item.id_product === id).quantity++;
			this.changeLocalStorage();
		},
		reduceCartItem(id) {
			let cartItem = this.cartItems.find(item => item.id_product === id);
			if (cartItem.quantity === 1) {
				this.removeFromCart(id);
			} else {
				cartItem.quantity--;
			}
			this.changeLocalStorage();
		}
	},
	async mounted() {
		try {
			const data = await fetch(`/api/products`);
			this.items = await data.json();	
		} catch (error) {
			this.requestError = true;
		}
		if (!localStorage.getItem('cartData')) {
			const cartData = await fetch(`/api/cart`);
			let {contents} = await cartData.json();
			this.cartItems = contents;
			localStorage.setItem('cartData', JSON.stringify(contents));
		} else {
			this.cartItems = JSON.parse(localStorage.getItem('cartData'));
		}
	}
}


Vue.createApp(App).mount('#app');