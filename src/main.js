// @ts-check
/// <reference types="vite/client" />

import "./style.css";
import discord from "./icons/discord.svg?raw";
import github from "./icons/github.svg?raw";
import x from "./icons/x.svg?raw";

const follower = /** @type {HTMLElement} */ (document.querySelector(".follower"));
const socials = /** @type {HTMLElement} */ (document.getElementById("socials"));
const partyBtn = /** @type {HTMLButtonElement} */ (document.getElementById("party-btn"));

const pos = { x: 0, y: 0 };
const mouse = { x: 0, y: 0 };

function move() {
	pos.x += (mouse.x - pos.x) / 20;
	pos.y += (mouse.y - pos.y) / 20;

	follower.style.transform = `translate(${Math.round(pos.x)}px, ${Math.round(pos.y)}px)`;
	requestAnimationFrame(move);
}

addEventListener("mousemove", (event) => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

move();

for (const { link, icon } of [
	{ link: "https://github.com/xiBread", icon: github },
	{ link: "https://x.com/oliver_mrose", icon: x },
	{ link: "https://discord.com/users/304260051915374603", icon: discord },
]) {
	const anchor = document.createElement("a");
	anchor.className = "btn";
	anchor.href = link;
	anchor.innerHTML = icon;

	socials.append(anchor);
}

partyBtn.addEventListener("click", () => {
	document.body.classList.toggle("party");
});
