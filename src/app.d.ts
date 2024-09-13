/* eslint-disable ts/method-signature-style */

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface ViewTransition {
		readonly finished: Promise<void>;
		readonly ready: Promise<void>;
		readonly updateCallbackDone: Promise<void>;

		skipTransition(): void;
	}

	interface Document {
		startViewTransition?(callback?: () => Promise<void>): ViewTransition;
	}
}

export {};
