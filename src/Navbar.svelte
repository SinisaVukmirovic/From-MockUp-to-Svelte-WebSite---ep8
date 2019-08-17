<script>
    const links = [
		{ link: 'welcome' },
		{ link: 'menu' },
		{ link: 'reservations' },
		{ link: 'news' },
		{ link: 'contact' }
	];
	
	let active = links[0];
</script>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 10%;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .logo,
    .link {
        text-transform: uppercase;
        text-decoration: none;
        color: #eee;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bolder;
        letter-spacing: 10px;
        border-bottom: solid 2px #fff;
    }

    ul.nav-links {
        display: flex;
        list-style: none;
    }
        ul.nav-links li {
            margin: 0 1em;
            padding-bottom: 3px;
        }

    .active,
    li:hover {
        border-bottom: solid 1px #ddd;
    }

    .link {
        color: #ddd;
        font-size: .85rem;
        letter-spacing: 2px;
    }

    .menu-btn {
        display: none;
        transform: rotateY(180deg);
    }

    @media only screen and (max-width: 768px) {
        nav {
            flex-direction: column;
            align-items: flex-start;
        }

        ul.nav-links.closed {
            transform: scaleY(0);
        }

        ul.nav-links {
            flex-direction: column;
            align-self: flex-end;
            transform: scaleY(1);
            transform-origin: top;
            transition: all 250ms;
            text-align: right;
            padding: 1em 0;
        }
        .active,
        li:hover {
            border-bottom: none;
        }

        .menu-btn {
            display: flex;
            position: absolute;
            top: 1.5rem;
            right: 10%;
            color: #fff;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
</style>

<!-- Mark Up -->
<nav>
    <a href="#home" class="logo">Rosa</a>
    <ul class="nav-links closed">
        {#each links as link}
            <li
            class:active={active === link}
            on:click={() => active = link}
            >
                <a href="#{link.link}" class="link">{link.link}</a>
            </li>
        {/each}
    </ul>
</nav>

<div class="menu-btn"><img src="img/hamburger.svg" alt="Menu button"></div>