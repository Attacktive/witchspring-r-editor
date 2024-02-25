<script>
	import "$/app.css";
	import { Footer, FooterLink, FooterLinkGroup, Textarea } from "flowbite-svelte";
	import { saveDataJson } from "$store/save-data";
	import github from "$lib/assets/github.svg";
</script>

<div class="flex flex-col h-screen overflow-hidden">
	<header class="w-full text-center">
		<h1 class="text-4xl">WitchSpring R Editor</h1>
	</header>
	<main class="flex-1 overflow-y-scroll">
		<slot/>
	</main>
	<Footer class="w-full">
		<Textarea class="v-full font-mono" value={$saveDataJson} rows="8" readonly/>
		<FooterLinkGroup ulClass="flex flex-row-reverse">
			<FooterLink href="https://github.com/Attacktive/witchspring-r-editor">
				<img src={github} alt="to the GitHub repository" width={48} height={48}/>
			</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>
