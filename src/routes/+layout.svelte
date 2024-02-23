<script>
	import "$/app.css";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
</script>

<div class="relative px-4">
	<div class="fixed w-full">
		<Header/>
		<div class="mb-40">
			<slot/>
		</div>
	</div>
	<div class="fixed bottom-0 w-full">
		<Footer/>
	</div>
</div>
