<script>
	import { getContext } from "svelte";
	import { cartCount } from "../stores/cartCounter";
	import { cartOpen } from "../stores/cartOpen";

    const title = getContext('site.title');
    
</script>
<header class="border p-4 gap-6 flex justify-between items-center">
    <a href="/" class="font-bold uppercase text-blue text-24">{title}</a>
    <div class="flex gap-4">
        <a class="hover:text-blue hover:underline" href="/my-account">My Account</a>
        <a class="hover:text-blue hover:underline" href="/products">Products</a>
        <a class="hover:text-blue hover:underline" href="/fetch/1">Blogs</a>
    </div>
    <button on:click={()=> $cartOpen = true} class="relative">
        <iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon>
        {#if $cartCount}
            <div class="absolute -top-2 -right-1 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
        {/if}
    </button>
</header>