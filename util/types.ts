export interface Item {
	id: number;
	slug: string;
	title: string;
	content: string;
}

export interface ArtItem extends Item {
	image: string | null;
	description: string | null;
}

export interface WritingItem extends Item {
	category: string;
	explicit: boolean;
}

export interface AwardItem extends Item {
	date: string;
}
