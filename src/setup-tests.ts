if (typeof window !== 'undefined') {
	class DataTransferStub {}

	interface WindowStub extends Window {
		DataTransfer: typeof DataTransferStub;
	}

	if (typeof window.DataTransfer === 'undefined') {
		(window as WindowStub).DataTransfer = DataTransferStub;
	}

	if (typeof window.matchMedia === 'undefined') {
		Object.defineProperty(
			window,
			'matchMedia',
			{
				writable: true,
				value: (query: string) => ({
					matches: false,
					media: query,
					onchange: null,
					addListener: () => {},
					removeListener: () => {},
					addEventListener: () => {},
					removeEventListener: () => {},
					dispatchEvent: () => false
				})
			}
		);
	}
}
