<script lang="ts">
	import { Button, Fileupload, Img, TabItem, Tabs, Textarea } from "flowbite-svelte";
	import { store } from "$store/store";
	import Basic from "$components/tabs/Basic.svelte";
	import Items from "$components/tabs/Items.svelte";
	import nyancat from "$lib/assets/nyancat.gif";

	const textDecoder = new TextDecoder();

	let fileLoadKey = {};
	let toShowSpinner = false;
	let files: FileList | undefined;

	let file: File | undefined;
	$: file = files?.[0];

	$: {
		if (file) {
			file.stream()
				.getReader()
				.read()
				.then(fileStreamResult => textDecoder.decode(fileStreamResult.value))
				.then(content => store.set(JSON.parse(content)));
		} else {
			resetFile();
		}
	}

	let output: string;
	store.subscribe(value => {
		if (file) {
			output = JSON.stringify(value);
		} else {
			output = "";
		}
	});

	const resetFile = () => {
		output = "";
		resetComponents();
	};

	const download = async () => {
		toShowSpinner = true;

		try {
			const blob = new Blob(
				[output],
				{ type: "application/json" }
			);

			return downloadFile(blob);
		} catch (error) {
			console.error(error);

			if (error instanceof Error) {
				output = error.toString();
			} else {
				output = `A non-Error "something" is thrown: ${error}`;
			}
		} finally {
			toShowSpinner = false;
		}
	};

	const downloadFile = (blob: Blob) => {
		const url = URL.createObjectURL(blob);
		console.debug("url", url);

		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.setAttribute("download", "cheated.sav");
		anchor.click();
	};

	const resetComponents = () => {
		fileLoadKey = {};
		files = undefined;
		store.reset();
	};

	let toShowTopButton: boolean;
	const onScroll = () => {
		toShowTopButton = document?.documentElement.scrollTop > 50;
	};

	const scrollToTop = () => document?.documentElement.scrollIntoView();
</script>

<svelte:window on:scroll={onScroll}/>

{#if toShowSpinner}
	<div class="overlay">
		<Img src={nyancat} class="h-full"/>
	</div>
{/if}

<div class="grid grid-cols-12 mt-2">
	{#key fileLoadKey}
		<Fileupload bind:files={files} class="col-span-3"/>
	{/key}
	<Button class="mx-8 col-span-2" disabled={!file} on:click={resetFile}>Reset</Button>
	<Button class="mx-1 col-span-2" disabled={!file} on:click={download}>Download</Button>
</div>
<div class="mt-4">
	<Tabs>
		<TabItem title="Basic" open>
			<Basic/>
		</TabItem>
		<TabItem title="Items">
			<Items/>
		</TabItem>
	</Tabs>
</div>
<div class="mt-4">
	<Textarea value={output} rows="8" readonly/>
</div>
{#if toShowTopButton}
	<div class="fixed">
		<Button on:click={scrollToTop}>△</Button>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgb(0 0 0 / 22.22%);
	}

	.fixed {
		position: fixed;
		left: 50%;
		bottom: 10px;
	}
</style>
