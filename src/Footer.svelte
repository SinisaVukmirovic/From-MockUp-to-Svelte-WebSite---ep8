<style>
    footer {
        background-color: #222;
        color: #ccc;
        padding: 5em 10%;
        position: relative;
    }
        footer a.to-top-btn {
            position: absolute;
            top: -2.5em;
            left: 50%;
            transform: translateX(-50%);
            background-color: #fff;
            color: #000;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            padding-top: .5em;
            padding-left: 4px;
            font-size: .8rem;
            font-weight: bold;
            letter-spacing: 3px;
            text-decoration: none;
            text-transform: uppercase;
        }
            footer a.to-top-btn::before {
                content: '\005E';
                position: absolute;
                top: .5em;
                left: 53%;
                transform: translateX(-50%);
                font-size: 1rem;
            }

    .info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1em;
    }
        .info h3 {
            color: #eee;
            margin: 1.5em 0;
            letter-spacing: 3px;
        }

    .location div,
    .hours div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 1em;
    }

    .copy {
        display: flex;
        justify-content: space-between;
        padding: 1.5em 10%;
        background-color: #111;
        color: var(--theme-color);
    }
        .copy a {
            color: var(--theme-color);
            text-decoration: none;
        }
            .copy a:hover {
                color: #ccc;
            }
    
    @media only screen and (max-width: 768px) {
        footer {
            padding: 2em 10%;
        }
        .info {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: .5em;
        }
        .info h3 {
            margin: 1em 0;
        }
        
        .copy {
            flex-direction: column;
            padding: 1em 10%;
        }
    }
</style>

<!-- Mock Up -->
<footer id="contact">
    <a href="#home" class="to-top-btn">Top</a>
    <div class="info">
        <div class="location">
            <h3>Location</h3>
            <div>
                <div>
                    <p>376 Van Brunt St <br>Brooklyn, NY - 11231</p>
                </div>
                <div>
                    <p>25 Union Square West <br>New York, NY - 10003</p>
                </div>
            </div>
        </div>
        <div class="hours">
            <h3>Hours</h3>
            <div>
                <div>
                    <p>Monday - Thursday <br>5:30pm - 10:00pm</p>
                </div>
                <div>
                    <p>Friday & Saturday <br>5:30pm - 11:00pm</p>
                </div>
                <div>
                    <p>Available for private <br>events on Sunday</p>
                </div>
            </div>
        </div>
    </div>
</footer>
<div class="copy">
    <p>From MockUp to Svelte WebSite - ep8</p>
    <a href="https://www.youtube.com/watch?v=AdNJ3fydeao" target="_blank">SVELTE.js Presentation - A Must Watch</a>
</div>