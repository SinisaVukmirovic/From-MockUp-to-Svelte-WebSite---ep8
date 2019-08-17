<script>
    const pics = [
		{ pic: 'img/ver-1.jpg' },
		{ pic: 'img/ver-2.jpg' }
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
            margin-top: 2em;
        }
    }
</style>

<!-- Mark Up -->
<section id="reservations">
    <div class="text">
        <h2 class="cursive">Culinary</h2>
        <h2>Delight</h2>
        <span>&#10045;</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta magni illum earum eum exercitationem dignissimos error dicta praesentium veritatis molestias consec dignissimos error exercit elit.</p>
        <a href="#home">Make a reservation</a>
    </div>
    <div class="pic">
        {#each pics as pic}
            <img src="{pic.pic}" alt="Reservations Image"/>
        {/each}
    </div>
</section>