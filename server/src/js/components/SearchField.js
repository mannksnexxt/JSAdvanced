export default {
	props: {
		search: {
			type: String,
			required: true
		}
	},
	emits: ['update:search'],
	template: `
		<input
			type="text"
			:value="search"
			@input="$emit('update:search', $event.target.value)">
		<i class="fas fa-search"></i>
	`
}