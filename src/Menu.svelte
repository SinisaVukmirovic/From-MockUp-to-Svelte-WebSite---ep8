<script>
    const menuPics = [
		{ pic: 'img/menu-pic-2.jpg' },
		{ pic: 'img/menu-pic-1.jpg' },
		{ pic: 'img/menu-pic-3.jpg' },
		{ pic: 'img/menu-pic-4.jpg' }
	];
</script>

<style>
    .pic {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5em;
    }
    
    .pic img {
        object-fit: cover;

    }

    @media only screen and (max-width: 768px) {
        .pic {
            grid-gap: .5em;
            order: 2;
            margin-top: 2em;
        }

        .text {
            order: 1;
        }
    }
</style>

<!-- Mark Up -->
<section id="menu">
    <div class="pic">
        {#each menuPics as pic}
            <img src="{pic.pic}" alt="Menu Image"/>
        {/each}
    </div>
    <div class="text">
        <h2 class="cursive">Discover</h2>
        <h2>Menu</h2>
        <span>&#10045;</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta magni illum earum eum exercitationem dignissimos error dicta praesentium veritatis molestias!</p>
        <a href="#home">View the full menu</a>
    </div>
</section>
