<script>
	import ProductCard from "../../libs/components/ProductCard.svelte";
	export let data;

</script>
<main class="grid grid-flow-col gap-6 md:[grid-template-columns:250px_auto]">
    <div class="border p-6">
        Filters
    </div>
    <section  class="border p-4 grid gap-2">
        <h2 class="font-bold pb-4 text-20">Products</h2>
        <div class="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {#each data.mockProducts as product}
                <ProductCard {...product}/>
            {/each}
        </div>
    </section>
</main>