import type { Document } from "@contentful/rich-text-types";
import type { AssetFields } from "contentful";

interface Asset {
	fields: AssetFields;
}

export interface Entry {
	title: string;
	body: Document;
}

export interface ContentEntry extends Entry {
	slug: string;
}

export interface ArtEntry extends ContentEntry {
	image: Asset;
	description: string;
}

export interface WritingEntry extends ContentEntry {
	category: string;
	explicit: boolean;
}

export interface AwardEntry extends Entry {
	order: number;
	date: string;
	ref: Asset;
}
