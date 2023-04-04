export default <T, K extends PropertyKey>(xs: T[], fn: (x: T) => K): Record<K, T[]> => {
	return xs.reduce((prev, group) => {
		(prev[fn(group)] ??= []).push(group);

		return prev;
	}, {} as Record<K, T[]>);
};
