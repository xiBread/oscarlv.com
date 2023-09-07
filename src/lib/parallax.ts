interface TargetData {
	pos: number;
	top: number;
	height: number;
	speed: number;
	style: string;
}

const updatePos = (speed: number, n: number) => (speed * (100 * (1 - n))) | 0;

export default function parallax(selector: string): void {
	const elements = document.querySelectorAll<HTMLElement>(selector);
	if (!elements.length) return;

	let y = 0;
	let targets: TargetData[] = [];

	function setPosition() {
		const prev = y;
		y = scrollY;

		return prev !== y;
	}

	function defer() {
		removeEventListener("resize", defer);
		removeEventListener("orientationchange", defer);
		removeEventListener("scroll", defer);
		document.removeEventListener("touchmove", defer);

		requestAnimationFrame(update);
	}

	function update() {
		if (setPosition()) {
			transform();
			requestAnimationFrame(update);
		} else {
			addEventListener("resize", defer);
			addEventListener("orientationchange", defer);
			addEventListener("scroll", defer, { passive: true });
			document.addEventListener("touchmove", defer, { passive: true });
		}
	}

	function transform() {
		for (let i = 0; i < elements.length; i++) {
			const next = updatePos(
				targets[i].speed,
				(y - targets[i].top + innerHeight) / (targets[i].height + innerHeight),
			);

			elements[i].style.transform = `translateY(${next - targets[i].pos}px)`;
		}
	}

	function run() {
		for (let i = 0; i < targets.length; i++) {
			elements[i].style.cssText = targets[i].style;
		}

		targets = [];
		setPosition();

		for (const element of elements) {
			const { top } = element.getBoundingClientRect();
			const height = element.clientHeight;
			const speed = +(element.dataset.speed ?? 0);

			targets.push({
				pos: updatePos(speed, (-top + innerHeight) / (height + innerHeight)),
				top,
				height,
				speed,
				style: element.style.cssText,
			});
		}

		transform();
		update();

		addEventListener("resize", run);
	}

	run();
}
