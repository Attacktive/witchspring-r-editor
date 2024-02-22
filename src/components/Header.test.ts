import Header from "./Header.svelte";
import { describe, expect, test } from "vitest";

describe(
	"Header component",
	() => {
		test(
			"Should render the component.",
			() => {
				const container = document.createElement("div");
				document.body.appendChild(container);

				const instance = new Header({ target: container });

				expect(instance).toBeTruthy();
				expect(container.textContent).toContain("WitchSpring R Editor");
			}
		);
	}
);
