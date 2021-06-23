export default {
	data() {
		return {
			isVisible: true
		}
	},
	template: `
	<div class="request-error" v-if="isVisible">
		<i class="fas fa-exclamation-circle"></i>
		<p>
			<slot></slot>
		</p>
		<button @click="isVisible = false">&times</button>
	</div>
	`
}