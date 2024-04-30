const $ = (e) => { return document.querySelector(e); }

const navbar_component = `
<nav class="header__navbar">
        <img data-location="home" class="nav-link logo" src="/assets/org/elits.svg" alt="ELITS">
        <ul class="nav-menu">
            <li><a class="nav-link" href="" data-location="home" >Home</a></li>
            <li><a class="nav-link" href="" data-location="about" >About</a></li>
            <li><a class="nav-link" href="" data-location="" >Shop</a></li>
            <li><a class="nav-link" href="" data-location="dev">About/Dev</a></li>
        </ul>
    </nav>
`

$('.navbar').outerHTML = navbar_component;