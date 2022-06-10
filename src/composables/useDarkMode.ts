export default function useDarkMode() {
	const color = useColorMode();

	return [
		color.preference === "dark",
		(): void => void (color.preference = color.preference === "dark" ? "light" : "dark"),
	] as const;
}
