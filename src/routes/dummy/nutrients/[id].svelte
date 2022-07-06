<script>
	import { page } from '$app/stores';
	import { nutriProp } from '../../../store/nutriStore';
	let id = $page.params.id;
	let item = $nutriProp[id];
	item.nutrients = Object.keys(item.nutrients)
		.sort()
		.reduce((obj, key) => {
			// @ts-ignore
			obj[key] = item.nutrients[key];
			return obj;
		}, []);
</script>

<div class="page">
	<div class="card">
		<div class="header">
			<h4 class="title">{item.name}</h4>
			<h5 class="sub-title">{item.category}</h5>
			<h5 class="sub-title">{item.source}</h5>
			<h5 class="sub-title">Nutrients Found : {Object.keys(item.nutrients).length}</h5>
		</div>
		<div class="footer">
			{#each Object.entries(item.nutrients) as [key, value], index (key)}
				<div class="nutriRow">
					<h5 class="content-left">{key}</h5>
					<h5 class="content-right">{value}</h5>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.page {
		padding: 2vh 0;
	}
	.card {
		width: 50vw;
		margin: 0 auto;
		border-radius: 5px;
		box-shadow: 0px 0px 5px -2px black;
		cursor: pointer;
	}
	.header {
		padding: 2vh 2vw;
		background-color: rgb(255, 187, 187);
		text-align: center;
	}
	.footer {
		padding: 2vh 2vw;
		background-color: rgb(245, 226, 201);
	}
	.title {
		font-size: 18px;
		font-weight: 450;
		text-transform: capitalize;
	}
	.sub-title {
		margin: 1vh 0;
		text-transform: capitalize;
	}
	.nutriRow {
		padding: 0 2vw;
		display: grid;
		grid-template-columns: 2fr 1fr;
		margin: 2vh 0;
	}
	.content-right {
		justify-self: end;
	}
	@media (orientation: portrait) {
		.card {
			width: 90vw;
		}
	}
</style>
