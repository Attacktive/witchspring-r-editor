<script lang="ts">
	import "$/app.css";
	import { Button, Footer, FooterLink, FooterLinkGroup, Textarea } from "flowbite-svelte";
	import { CaretUpSolid } from "flowbite-svelte-icons";
	import { saveDataJson } from "$store/save-data";
	import github from "$lib/assets/github.svg";

	let mainElement: HTMLElement;
	let toShowTopButton: boolean;
	const onScroll = () => {
		toShowTopButton = mainElement.scrollTop > 50;
	};
	const scrollToTop = () => mainElement.scrollTo(0, 0);
</script>

<div class="px-3 flex flex-col h-screen overflow-hidden">
	<header class="w-full my-5">
		<h1 class="text-center text-4xl">WitchSpring R Editor</h1>
		{#if toShowTopButton}
			<Button class="fixed right-10" on:click={scrollToTop}>
				<CaretUpSolid/>
			</Button>
		{/if}
	</header>
	<main bind:this={mainElement} class="flex-1 overflow-y-scroll" on:scroll={onScroll}>
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
