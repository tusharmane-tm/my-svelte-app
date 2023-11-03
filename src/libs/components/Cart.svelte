<script>
	import { fly } from "svelte/transition";
    import { cartItems } from "../stores/cartItems";
    import { cartOpen } from "../stores/cartOpen";
	import CartItem from "./CartItem.svelte";
    
</script>

{#if $cartOpen}
    <div transition:fly={{x: "100%"}} class="fixed top-0 right-0 w-[350px] bg-white h-full border-l">
       <div class="bg-black text-white flex gap-6 justify-between items-center p-3 ">
        Your Cart
        <button on:click={() => $cartOpen = false}>
            <iconify-icon class="text-30" icon="material-symbols:close"></iconify-icon>
        </button>
       </div>
        <div class="p-3 grid gap-3">
            {#each Object.values($cartItems) as item}
                <CartItem {...item}/>
            {/each}
        </div> 
    </div>
{/if}