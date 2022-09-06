export default function slugify(string: string): string {
	return string.toLowerCase().replace(/ /g, "-");
}
