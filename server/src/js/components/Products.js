import ProductsItem from "./ProductsItem.js";

export default {
	props: {
		search: String,
		items: Array,
		cartItems: Array
	},
	components: {
		ProductsItem
	},
	computed: {
		filteredItems() {
			const searchValue = this.search.trim().toLowerCase();
			if ( searchValue ) {
				return this.items.filter( item => {
					return  item.product_name.toLowerCase().includes(searchValue);
				});
			}
			return this.items;
		}	
	},
	template: `
	<div class="products">
		<template v-if="filteredItems.length">
			<products-item v-for="item in filteredItems" :item="item" />
		</template>
		<span v-else class="no-data">No data...</span>
	</div>
	`
}