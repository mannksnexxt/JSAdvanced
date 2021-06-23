import CartItem from './CartItem.js';

export default {
	props: {
		goods: {
			type: Array,
			required: true
		}
	},
	components: {
		CartItem
	},
	computed: {
		cartTotalPrice() {
			return this.goods.reduce( (sum, item) => {
				return sum += item.price * item.quantity;
			}, 0);
		},
	},
	template: `
	<div>
		<h2>Cart</h2>		
		<div class="cart__items">
			<cart-item
				v-for="item in goods"
				:good="item"
				:key="item.id_product"
				/>
		</div>
		<div class="cart__total-price">
			<h3>Total price: </h3>
			<span>{{ cartTotalPrice }}<span>$</span></span>
		</div>
	</div>
	`
}