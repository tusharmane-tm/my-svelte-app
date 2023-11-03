<script>
	import FooterLink from "./FooterLink.svelte";

</script>
<footer class="p-4 flex justify-between items-center gap-6 bg-black text-white">
    <div class="italic">&#169;2023 Logitech</div>
    <nav class="flex p-2 gap-4 text-blue">
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/support">Support</FooterLink>
        <FooterLink href="/privacy">Privacy</FooterLink>
    </nav>
</footer>