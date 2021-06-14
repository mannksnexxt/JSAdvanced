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
		addToCart(id) {
			const item = this.items.find(item => item.id_product === id);
			const cartItem = this.cartItems.find(item => item.id_product === id);
			if (item && !cartItem) {
				this.cartItems.push({ ...item, quantity: 1 });
			} else {
				this.increaseCartItem(id)
			}
		},
		removeFromCart(id) {
			const cartItem = this.cartItems.find(item => item.id_product === id);
			this.cartItems.splice(cartItem, 1);
		},
		increaseCartItem(id){
			this.cartItems.find(item => item.id_product === id).quantity++;
		},
		reduceCartItem(id) {
			let cartItem = this.cartItems.find(item => item.id_product === id);
			if (cartItem.quantity === 1) {
				this.removeFromCart(id);
			} else {
				cartItem.quantity--;
			}
		}
	},
	async mounted() {
		try {
			const data = await fetch(`${API}/atalogData.json`);
			this.items = await data.json();	
		} catch (error) {
			this.requestError = true;
		}
		
		const cartData = await fetch(`${API}/getBasket.json`);
		let {contents} = await cartData.json();
		this.cartItems = contents;
	}
}


Vue.createApp(App).mount('#app');