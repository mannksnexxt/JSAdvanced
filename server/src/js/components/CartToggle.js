export default {
	props: {
		isVisible: Boolean
	},
	emits: ['update:isVisible'],
	template: `
	<label
		:class="['btn-cart', {active: isVisible} ]"
		@click="$emit('update:isVisible', !isVisible)"
		for="cart-toggle">
		<i class="fas fa-shopping-cart"></i>
		Корзина
	</label>
	<input
		:value="isVisible"
		type="checkbox"
		id="cart-toggle">
	`
}