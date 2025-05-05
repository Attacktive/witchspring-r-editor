<script lang="ts">
	import { Alert, Button, Fileupload, Img, TabItem, Tabs } from "flowbite-svelte";
	import { saveData, saveDataJson } from "$/store/save-data";
	import { emptyFileList, fileToFileList } from "$/utils/file";
	import AlertWrapper from "$/components/alert/AlertWrapper.svelte";
	import Basic from "$/components/tabs/Basic.svelte";
	import Items from "$/components/tabs/Items.svelte";
	import StatsAugments from "$/components/tabs/StatsAugments.svelte";
	import Spells from "$/components/tabs/Spells.svelte";
	import nyancat from "$lib/assets/nyancat.gif";

	const textDecoder = new TextDecoder();

	let toShowSpinner = $state(false);

	let files: FileList | undefined = $state();
	const file = $derived(files?.[0]);

	let toShowAlert = $state(false);
	let alertMessageLines: string[] = $state([]);
	const showAlert = (...messageLines: string[]) => {
		toShowAlert = true;
		alertMessageLines = messageLines;
	};
	const closeAlert = () => toShowAlert = false;

	const validateFileName = (fileName: string) => /^playerStat_\d+(?:\.json)?$/.test(fileName);

	const tryWithSample = () => {
		fetch("sample/playerStat_49")
			.then(response => response.blob())
			.then(blob => new File([blob], "playerStat_49"))
			.then(sampleFile => (files = fileToFileList(sampleFile)));
	};

	const download = async () => {
		toShowSpinner = true;

		try {
			const blob = new Blob(
				[$saveDataJson],
				{ type: "application/json" }
			);

			return downloadFile(blob);
		} catch (error) {
			console.error(error);

			let output;
			if (error instanceof Error) {
				output = error.toString();
			} else {
				output = `A non-Error "something" is thrown: ${error}`;
			}

			showAlert(output);
		} finally {
			toShowSpinner = false;
		}
	};

	const downloadFile = (blob: Blob) => {
		const url = URL.createObjectURL(blob);
		console.debug("url", url);

		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.setAttribute("download", "playerStat_999");
		anchor.click();
	};

	const resetComponents = () => {
		files = emptyFileList();
		saveData.reset();
	};

	const fileIsLoaded = $derived(Boolean(file));

	$effect(() => {
		if (file) {
			toShowSpinner = true;

			const { name } = file;
			const fileNameIsValid = validateFileName(name);
			if (fileNameIsValid) {
				closeAlert();
			} else {
				showAlert("You might have loaded a wrong file.", "It's named 'playerStat_xxx' by default.");
			}

			file.stream()
				.getReader()
				.read()
				.then(fileStreamResult => textDecoder.decode(fileStreamResult.value))
				.then(content => JSON.parse(content))
				.then(object => saveData.set(object))
				.catch(error => {
					console.error(error);
					showAlert(error.message);
				})
				.finally(() => toShowSpinner = false);
		} else {
			resetComponents();
		}
	});
</script>

{#if toShowSpinner}
	<div class="fixed w-full h-full bg-transparent">
		<Img src={nyancat} class="h-full"/>
	</div>
{/if}

<div class="grid grid-cols-12 mt-2">
	<Fileupload bind:files={files} class="col-span-3"/>
	<Button class="mx-8 col-span-2" disabled={!file} onclick={resetComponents}>Reset</Button>
	<Button class="mx-1 col-span-2" disabled={!file} onclick={download}>Download</Button>
	<Button class="mx-1 col-span-2" disabled={Boolean(file)} onclick={tryWithSample}>Try with Sample</Button>
</div>
<main class="relative">
	{#if toShowAlert}
		<div class="grid grid-cols-4">
			<Alert class="mt-1 mb-3">
				<AlertWrapper messageLines={alertMessageLines} close={closeAlert}/>
			</Alert>
		</div>
	{/if}
	{#if fileIsLoaded}
		<div class="mt-4">
			<Tabs>
				<TabItem title="Basic" open>
					<Basic/>
				</TabItem>
				<TabItem title="Items">
					<Items/>
				</TabItem>
				<TabItem title="Stats Augments">
					<StatsAugments/>
				</TabItem>
				<TabItem title="Spells">
					<Spells/>
				</TabItem>
			</Tabs>
		</div>
	{/if}
</main>
