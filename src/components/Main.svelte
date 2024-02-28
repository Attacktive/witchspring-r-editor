<script lang="ts">
	import type { ComponentType } from "svelte";
	import { Alert, Button, Fileupload, Img, TabItem, Tabs } from "flowbite-svelte";
	import { saveData, saveDataJson } from "$store/save-data";
	import SuspiciousFileName from "$components/alert/SuspiciousFileName.svelte";
	import DownloadError from "$components/alert/DownloadError.svelte";
	import Basic from "$components/tabs/Basic.svelte";
	import Items from "$components/tabs/Items.svelte";
	import StatsAugments from "$components/tabs/StatsAugments.svelte";
	import Spells from "$components/tabs/Spells.svelte";
	import nyancat from "$lib/assets/nyancat.gif";

	const textDecoder = new TextDecoder();

	let toShowSpinner = false;

	let files: FileList | undefined;
	let file: File | undefined;
	$: file = files?.[0];

	let toShowBlocker = true;
	$: toShowBlocker = !file;

	interface AlertParameters {
		toShow?: boolean;
		alertType?: AlertType;
		errorMessage?: string;
	}

	type AlertType = "suspiciousFileName" | "downloadError";

	let toShowAlert = false;
	let alertComponent: ComponentType | undefined;
	let alertErrorMessage: string | undefined;
	const showAlert = ({ toShow = true, alertType, errorMessage }: AlertParameters) => {
		switch (alertType) {
			case "suspiciousFileName":
				alertComponent = SuspiciousFileName;
				break;
			case "downloadError":
				alertComponent = DownloadError;
				break;
		}

		alertErrorMessage = errorMessage;
		toShowAlert = toShow;
	};
	const closeAlert = () => {
		toShowAlert = false;
		alertComponent = undefined;
		alertErrorMessage = undefined;
	};

	const validateFileName = (fileName: string) => /^playerStat_\d+$/.test(fileName);

	$: {
		if (file) {
			const { name } = file;
			const fileNameIsValid = validateFileName(name);
			if (fileNameIsValid) {
				showAlert({ toShow: false });
			} else {
				showAlert({ alertType: "suspiciousFileName" });
			}

			file.stream()
				.getReader()
				.read()
				.then(fileStreamResult => textDecoder.decode(fileStreamResult.value))
				.then(content => saveData.set(JSON.parse(content)));
		} else {
			resetComponents();
		}
	}

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

			showAlert({ alertType: "downloadError", errorMessage: output });
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
		files = undefined;
		saveData.reset();
	};
</script>

{#if toShowSpinner}
	<div class="fixed w-full h-full bg-transparent">
		<Img src={nyancat} class="h-full"/>
	</div>
{/if}

<div class="grid grid-cols-12 mt-2">
	<Fileupload bind:files={files} class="col-span-3"/>
	<Button class="mx-8 col-span-2" disabled={!file} on:click={resetComponents}>Reset</Button>
	<Button class="mx-1 col-span-2" disabled={!file} on:click={download}>Download</Button>
</div>
<main class="relative">
	{#if toShowAlert}
		<div class="grid grid-cols-4">
			<Alert class="mt-1 mb-3">
				<svelte:component this={alertComponent} message={alertErrorMessage} on:close={closeAlert}/>
			</Alert>
		</div>
	{/if}
	{#if toShowBlocker}
		<div class="fixed w-full h-full bg-gray-200 bg-opacity-50"></div>
	{/if}
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
</main>
