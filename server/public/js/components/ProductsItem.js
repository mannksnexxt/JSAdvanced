const ProductsItem = {
	props: {
		item: Object
	},
	template: `
	<div class="product-item">
		<img :src="$root.imgUrl"/>
		<h3>{{ item.product_name }}</h3>
		<p>{{ item.name }}</p>
		<button class="buy-btn" @click="$root.addToCart(item.id_product)">Купить</button>
	</div>
	`
}