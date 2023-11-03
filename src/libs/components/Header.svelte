<script>
	import { cartCount } from "../stores/cartCounter";
	import { cartOpen } from "../stores/cartOpen";
    
</script>
<header class="border p-4 gap-6 flex justify-between items-center">
    <div class="font-bold uppercase text-blue text-24">Logitech</div>
    <button on:click={()=> $cartOpen = true} class="relative">
        <iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon>
        {#if $cartCount}
            <div class="absolute -top-2 -right-1 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
        {/if}
    </button>
</header>