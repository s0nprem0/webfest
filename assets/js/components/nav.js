const $ = (e) => { return document.querySelector(e); }

const navbar_component = `
    <div class="nav-container">
        <div class="brand">
        <div class="logo-container">
            <a href="#">
                <img src="../assets/svg/ceit-sc-white.svg">
                <div class="logo-name-container">
                <span class="univ">Cavite State University - Don Severino De las Alas Campus</span>
                <span class="logo-name">College of Enginnering and Information Technology<br>Student Council</span>
                </div>
            </a>
        </div>
        </div>

        <div class="nav-menu">
            <div class="nav-links">
                <a class="nav-link hyperlink" href="" data-location="home">Home</a>
                <a class="nav-link hyperlink" href="" data-location="about">About</a>
                <a class="nav-link hyperlink" href="" data-location="organization" target="_self">Organizations</a>
                <a class="nav-link hyperlink" href="" data-location="">Services</a>
                <a class="nav-link hyperlink" href="" data-location="">Contact</a>
            </div>
        </div>
</div>`;

$('.navbar').innerHTML = navbar_component;