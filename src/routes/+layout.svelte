<script>
	import "$/app.css";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
</script>

<div class="p-3">
	<Header/>
</div>
<div class="px-3 py-1">
	<slot/>
</div>
<div class="px-3">
	<Footer/>
</div>
