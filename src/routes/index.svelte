<main>
	<nav class="navbar">
		<h3>Nutri Search</h3>
		<!-- <img class="nav-logo-img" src="/icons/5.png" alt="nav-logo" /> -->
	</nav>

	<div class="spinner-card">
		<div class="lds">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
</main>

<style>
	.navbar {
		height: 8vh;
		background-color: #e0e0e0;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.nav-logo-img {
		height: 4vh;
	}

	.spinner-card {
		height: 92vh;
		display: grid;
		align-items: center;
		justify-content: center;
	}

	.lds {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}

	.lds div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		/* background: #fff; */
		background: rgb(209, 209, 209);
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}

	.lds div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}

	.lds div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}

	.lds div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}

	.lds div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}

	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}

	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(0);
		}
	}

	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(24px, 0);
		}
	}
</style>
