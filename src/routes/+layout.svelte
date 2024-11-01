<script lang="ts">
	import "$/app.css";
	import { Button, Footer, FooterLink, FooterLinkGroup, Textarea } from "flowbite-svelte";
	import { CaretUpSolid } from "flowbite-svelte-icons";
	import { saveDataJson } from "$/store/save-data";
	import github from "$lib/assets/github.svg";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let mainElement: HTMLElement = $state();
	let toShowTopButton: boolean = $state();
	const onScroll = () => {
		toShowTopButton = mainElement.scrollTop > 50;
	};
	const scrollToTop = () => mainElement.scrollTo(0, 0);
</script>

<div class="px-3 flex flex-col h-screen overflow-hidden">
	<header class="w-full my-5">
		<h1 class="text-center text-4xl">WitchSpring R Editor</h1>
		{#if toShowTopButton}
			<Button class="fixed right-10 z-10" on:click={scrollToTop}>
				<CaretUpSolid/>
			</Button>
		{/if}
	</header>
	<main bind:this={mainElement} class="flex-1 overflow-y-scroll my-2" onscroll={onScroll}>
		{@render children?.()}
	</main>
	<Footer class="w-full mt-2">
		<Textarea class="v-full font-mono" value={$saveDataJson} rows="8" readonly/>
		<FooterLinkGroup ulClass="flex flex-row-reverse">
			<FooterLink href="https://github.com/Attacktive/witchspring-r-editor">
				<img src={github} alt="to the GitHub repository" width={48} height={48}/>
			</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>
