<script>
    export let hex;
    export let selected;
    export let onclick;
</script>
<button class="border w-[24px] h-[24px] rounded-full"
    class:border-2={selected}
    style:background-color={hex}
    on:click={onclick}>
</button>