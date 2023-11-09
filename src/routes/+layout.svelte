<script>
	import '../app.scss';
	import 'iconify-icon';
	import { setContext } from 'svelte';
	import Header from '../libs/components/Header.svelte';
	import Footer from '../libs/components/Footer.svelte';
	import Cart from '../libs/components/Cart.svelte';

	setContext('site.title', 'Logitech');
	
	let rtl = false;
	function toggleRTL() {
		rtl=!rtl
	}

	$:rtlValue = rtl === true ? 'rtl' : 'ltr';
</script>

<div class="">
	<div class="mx-auto max-w-screen-lg px-6 py-12">
		<div class="col-start-2">
			<!-- Here you can place your Navigation -->
		</div>
		<div>
			<button on:click={toggleRTL}>Toggle RTl</button>
			<div class="grid gap-6">
				<Header/>
				<slot />
				<Footer/>
			</div>
			<Cart/>
		</div>
	</div>
</div>
