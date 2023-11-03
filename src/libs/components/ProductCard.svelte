<script>
	import { addToCart } from "../stores/cartItems";
	import { cartOpen } from "../stores/cartOpen";
	import ColorSwatch from "./ColorSwatch.svelte";
	import ProductImage from "./ProductImage.svelte";

    export let title;
    export let variants;
    let selectedVariant;
    let selectedIndexVariant = 0;

    function swatchClicked(index) {
        selectedIndexVariant = index;
    }

    function addToCartClicked() {
        addToCart(title, selectedVariant);
        $cartOpen = true;
    }

    $: selectedVariant = variants[selectedIndexVariant];
</script>
<div class="border p-3 grid gap-2">
    <ProductImage hex={selectedVariant.hex}/>
    <div class="font-bold">{title}</div>
    <div class="flex gap-2">
        {#each variants as variant, index}
            <ColorSwatch hex={variant.hex}
                selected={selectedIndexVariant === index}
                onclick={() => swatchClicked(index)}/>
        {/each}
    </div>
    <div>${selectedVariant.price}</div>
    <div class="cta">
        <button on:click={addToCartClicked} class="bg-black text-white p-2">Add To Cart</button>
    </div>
</div>