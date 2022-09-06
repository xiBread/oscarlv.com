export default function nbc(string: string): string {
	return string.replace(/([^\s])\s+([^\s]+)\s*$/, (_, head: string, last: string) => {
		if (last.indexOf("-") >= 0) {
			return `${head} ${last.replace(/-/g, "&#8209;")}`;
		}

		return `${head}&nbsp;${last}`;
	});
}
