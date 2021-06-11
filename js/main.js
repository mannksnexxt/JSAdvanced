const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


const App = {
	data() {
		return {
			items: [],
			cartItems: [],
			userSearch: '',
			imgUrl: 'https://via.placeholder.com/300x220',
			cartShow: false
		}
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
	computed: {
		cartTotalPrice() {
			return this.cartItems.reduce( (sum, item) => {
				return sum += item.price * item.quantity;
			}, 0);
		},
		filteredItems() {
			const searchValue = this.userSearch.trim().toLowerCase();
			if ( searchValue ) {
				return this.items.filter( item => {
					return  item.product_name.toLowerCase().includes(searchValue);
				});
			}
			return this.items;
		}
	},
	async mounted() {
		const data = await fetch(`${API}/catalogData.json`);
		this.items = await data.json();

		const cartData = await fetch(`${API}/getBasket.json`);
		let {contents} = await cartData.json();
		this.cartItems = contents;
	}
}


Vue.createApp(App).mount('#app');