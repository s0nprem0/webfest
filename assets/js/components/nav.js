const $ = (e) => { return document.querySelector(e); }

const navbar_component = `
<nav class="wrapper header__navbar">
        <div class="site-branding">
            <img class="logo" width="64px" src="../assets/org/elits.svg" alt="ELITS">
            </div>
        </div>
        <ul class="nav-menu">
            <li><a class="nav-link" href="" data-location="">Home</a></li>
            <li><a class="nav-link" href="" data-location="">About</a></li>
            <li><a class="nav-link" href="" data-location="">Shop</a></li>
            <li><a class="nav-link" href="" data-location="">about/dev</a></li>
        </ul>
    </nav>
    `
$('.navbar').innerHTML = navbar_component;
$('.navbar').innerHTML = footer_component;