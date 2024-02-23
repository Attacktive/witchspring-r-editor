<script lang="ts">
	import { Footer, FooterLink, FooterLinkGroup, Textarea } from "flowbite-svelte";
	import github from "$lib/assets/github.svg";

	let output = "asdf";
</script>

<Footer>
	<Textarea class="v-full" value={output} rows="8" readonly/>
	<FooterLinkGroup ulClass="flex flex-row-reverse">
		<FooterLink href="https://github.com/Attacktive/witchspring-r-editor"><img src={github} alt="to the GitHub repository" width={48} height={48}/></FooterLink>
	</FooterLinkGroup>
</Footer>
