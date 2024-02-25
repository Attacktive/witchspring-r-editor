import Main from "./Main.svelte";
import { describe, expect, test } from "vitest";

function getAncestors(element: Element) {
	const ancestors: Element[] = [];
	for (let i = 0; i < element.children.length; i++) {
		const child = element.children.item(i);
		if (child) {
			const childrenOfChild = getAncestors(child);
			ancestors.push(child, ...childrenOfChild);
		}
	}

	return ancestors;
}

describe(
	"Main component",
	() => {
		test(
			"Should have a file input.",
			() => {
				const container = document.createElement("div");
				document.body.appendChild(container);

				const instance = new Main({ target: container });

				expect(instance).toBeTruthy();

				const ancestors = getAncestors(container);
				expect(ancestors).toSatisfy((children: Element[]) => children.some(child => child instanceof HTMLInputElement && child.type === "file"));
			}
		);
	}
);
