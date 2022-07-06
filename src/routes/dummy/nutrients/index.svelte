<script>
	import { nutriList, nutriProp } from '../../../store/nutriStore';

	let list = new Array();
	let searchString = '';

	// fetch nutrients on form submit
	const handleFormSubmit = (/** @type {{ preventDefault: () => void; }} */ e) => {
		e.preventDefault();
		searchString &&
			fetch(`http://localhost/api/dum/veggies/searchNutris?str=${searchString}`)
				.then((res) => res.json())
				.then((res) => {
					if (!res.success) return console.log(res.error);
					list = res.data.list;
					list.sort((a, b) => a.name.length - b.name.length);
					nutriList.set(list);
					console.log(list);
				})
				.catch((err) => console.log(err));
	};
</script>

<form action="" on:submit={handleFormSubmit}>
	<input bind:value={searchString} placeholder="Search Food Item Nutrients" />
	<!-- <button>🔎</button> -->
</form>

<div class="usda-list">
	{#each $nutriList as item (item.id)}
		<a href={`/dummy/nutrients/${item.id}`} on:click={() => nutriProp.set({ [item.id]: item })}>
			<div
				class="card"
				class:fd={item.source == 'usda foundation food'}
				class:sr={item.source == 'usda sr legacy food'}
				class:su={item.source == 'usda survey food'}
			>
				<h4 class="title">{item.name}</h4>
				<h6 class="sub-title">{item.category}</h6>
				<h6 class="sub-title">Nutrients Found : {Object.keys(item.nutrients).length}</h6>
				<h6 class="content">Calorie : {item.nutrients.Energy}</h6>
				<h6 class="content">Carbs : {item.nutrients['Carbohydrate, by difference']}</h6>
				<h6 class="content">Protein : {item.nutrients.Protein}</h6>
				<h6 class="alt-sub-title">{item.source}</h6>
			</div>
		</a>
	{/each}
</div>

<style>
	form {
		width: 50%;
		text-align: center;
		margin: 5vh auto;
	}
	form input {
		width: 80%;
		height: 6vh;
		font-size: 14px;
		padding: 4px 10px;
		background-color: antiquewhite;
		border-radius: 10px;
		box-shadow: 0px 2px 2px 0px rgb(100, 100, 100);
		border: none;
		outline: none;
	}
	input:focus {
		box-shadow: none;
		border: none;
		outline: none;
		box-shadow: 0px 3px 4px 0px rgb(84, 173, 232);
		transition: all ease-in 0.2s;
	}
	.usda-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.usda-list .fd {
		background: rgb(142, 222, 202);
	}
	.usda-list .sr {
		background: rgb(139, 188, 234);
	}
	.usda-list .su {
		background: rgb(147, 214, 226);
	}
	.card {
		width: 40vw;
		padding: 2vh 2vw;
		margin: 2vh 0;
		background: rgb(164, 209, 229);
		border-radius: 5px;
		box-shadow: 2px 2px 5px -2px black;
		cursor: pointer;
		/* display: grid;
		grid-template-rows: 6vh 2vh; */
	}
	.title {
		text-transform: capitalize;
		margin-bottom: 5px;
		font-size: 18px;
		font-weight: 500;
	}
	.sub-title {
		font-size: 14px;
		text-transform: capitalize;
		margin-bottom: 5px;
	}
	.content {
		font-size: 12px;
	}
	.alt-sub-title {
		font-size: 14px;
		text-transform: capitalize;
		margin-top: 5px;
	}
	@media (orientation: portrait) {
		form {
			width: 80%;
		}
		.card {
			width: 90vw;
			grid-template-rows: 10vh 2vh;
		}
	}
</style>
