import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;

// menu btn functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
	navLinks.classList.toggle('closed');
}