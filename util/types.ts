import type { Document } from "@contentful/rich-text-types";

export interface Entry {
	title: string;
	body: Document;
}

export interface ContentEntry extends Entry {
	slug: string;
}

export interface ArtEntry extends ContentEntry {
	image: any;
	description: string;
}

export interface WritingEntry extends ContentEntry {
	category: string;
	explicit: boolean;
}

export interface AwardEntry extends Entry {
	order: number;
	date: string;
}
