(() => {
	const useDark = matchMedia?.("(prefers-color-scheme: dark)").matches;
	const theme = localStorage.getItem("vueuse-color-scheme") ?? "auto";

	if (theme === "dark" || (useDark && theme !== "light")) {
		document.documentElement.classList.add("dark");
	}
})();
