export const emptyFileList = () => filesToFileList([]);

export const fileToFileList = (file: File) => filesToFileList([file]);

export const filesToFileList = (files: File[]) => {
	const reducer = (dataTransfer: DataTransfer, file: File) => {
		dataTransfer.items.add(file);
		return dataTransfer;
	}

	return files.reduce(reducer, new DataTransfer()).files;
}
