export default {
	props: {
		good: {
			type: Object,
			required: true
		}
	},
	template: `
	<div class="cart__item">
		<img :src="$root.imgUrl">
		<div class="cart__item-description">
			<h3>{{ good.product_name }}</h3>
			<div class="cart__item-quantity">
			   <button
				   class="reduce-item-quantity"
				   @click="$root.reduceCartItem(good.id_product)">
				   <i class="fas fa-minus"></i>
			   </button>

			   <span>{{ good.quantity }}</span>

			   <button 
					class="increase-item-quantity"
					@click="$root.increaseCartItem(good.id_product)">
				   <i class="fas fa-plus"></i>
			   </button>
			</div>
			<div class="cart__item-price">
				<span>{{ good.price * good.quantity }}</span>$
			</div>
		</div>
	</div>
`
}