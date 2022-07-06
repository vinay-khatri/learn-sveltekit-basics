<script>
	let openSideNav = false;
</script>

<nav>
	<div
		class="mob burger"
		class:burgerCross={openSideNav}
		on:click={() => (openSideNav = !openSideNav)}
	>
		<span />
		<span />
		<span />
	</div>

	<div class="navLogoBox">
		<a href="/dummy" class="navLogo">NutriSearch</a>
	</div>

	<div class="desk navLinks">
		<a href="/dummy" class="navLink">Home</a>
		<a href="/dummy/nutrients" class="navLink">Nutrients</a>
	</div>

	<div class="mob navIcons">
		<!-- <a href="/" class="navIcon">#</a>
		<a href="/" class="navIcon">#</a> -->
	</div>

	<div class="mob sideNav" class:sideNavOpen={openSideNav}>
		<ul class="sideNavLinks">
			<li class="sideNavLink" on:click={() => (openSideNav = false)}><a href="/dummy">Home</a></li>
			<li class="sideNavLink" on:click={() => (openSideNav = false)}>
				<a href="/dummy/nutrients">Nutrients</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		height: 8vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: rgb(128, 210, 208);
		background-color: rgb(140, 205, 203);
		background: rgb(142, 222, 202);
		align-items: center;
	}
	.navLogo {
		padding-left: 3vw;
		font-weight: 600;
		font-size: 1.2em;
	}
	.navLinks {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.navLink {
		padding: 5px 15px;
		border: 1px solid black;
		border-radius: 10px;
	}
	.mob {
		display: none;
	}

	@media (orientation: portrait) {
		.desk {
			display: none;
		}
		.mob {
			display: block;
		}
		nav {
			grid-template-columns: 1fr 5fr 2fr;
		}
		.navLinks {
			display: none;
		}
		.burger {
			display: relative;
			/* font-size: 1.2em; */
			padding-left: 2vw;
			cursor: pointer;
			z-index: 1;
		}
		.burgerCross {
			position: relative;
		}
		.burgerCross span:nth-child(2) {
			width: 0;
		}
		.burgerCross span:nth-child(1) {
			transform: rotate(45deg) translate(4px, 4px);
		}
		.burgerCross span:nth-child(3) {
			transform: rotate(-45deg) translate(4px, -4px);
		}
		.burger span {
			display: block;
			width: 20px;
			height: 2px;
			margin: 4px 0;
			background: black;
			transition: all ease-in 0.3s;
		}
		.navIcons {
			display: flex;
			justify-content: space-evenly;
		}
		.sideNav {
			position: absolute;
			height: 100vh;
			background-color: rgb(124, 198, 196);
			background-color: rgb(140, 205, 203);
			background: rgb(142, 222, 202);
			box-shadow: 0px 0px 20px -5px #222;
			width: 60vw;
			left: -60vw;
			transition: left ease-in 0.3s;
		}
		.sideNavOpen {
			left: 0;
		}
		.sideNavLinks {
			margin-top: 20vh;
		}
		.sideNavLink {
			margin: 10px 0;
			border: 1px solid black;
			/* border-radius: 10px; */
		}
		.sideNavLink a {
			padding: 5px 10px;
			display: block;
			background: wheat;
			background-color: antiquewhite;
		}
	}
</style>
