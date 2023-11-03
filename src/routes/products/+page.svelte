<script>
	import Header from "../libs/components/Header.svelte";
	import Footer from "../libs/components/Footer.svelte";
	import PipPageLayout from "../libs/components/PipPageLayout.svelte";
	import Cart from "../libs/components/Cart.svelte";

	let rtl = false;
	function toggleRTL() {
		rtl=!rtl
	}

	$:rtlValue = rtl === true ? 'rtl' : 'ltr';
</script>
<button on:click={toggleRTL}>Toggle RTl</button>
<div class="grid gap-6 {rtlValue}">
	<Header/>
	<PipPageLayout/>
	<Footer/>
</div>
<Cart/>