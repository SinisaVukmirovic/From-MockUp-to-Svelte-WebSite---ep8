<script>
    import Navbar from './Navbar.svelte';
</script>

<style>
    header {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('img/cover.jpg');
        background-size: cover;
        background-position: center;
    }

    h1 {
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.75rem;
        letter-spacing: 10px;
    }

    p {
        text-transform: capitalize;
        color: #fff;
        letter-spacing: 5px;
        text-align: center;
        margin: 0 2em;
    }

    span {
        color: burlywood;
        margin: .5em;
        position: relative;
    }
        span::before,
        span::after {
            content: '';
            width: 8rem;
            height: 2px;
            margin: 0 1em;
            background-color: #fff;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        span::before {
            right: 1rem;
        }
        span::after {
            left: 1rem;
        }

    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 1.75rem;
            letter-spacing: 5px;
        }
    }
</style>

<!-- Mark Up -->
<header id="home">
    <Navbar />
    
    <h2 class="cursive">Welcome</h2>
    <h1>The Rosa</h1>
    <span>&#10045;</span>
    <p>From MockUp to Svelte WebSite ep-8</p>
</header>