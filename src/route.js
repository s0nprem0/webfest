const routes = {
    "home": "/",
    "about": "/pages/about.html",
    "contact": "/pages/contact.html",
    "dev": "/pages/dev.html",

    "404": "/pages/404.html",
};

document.addEventListener("DOMContentLoaded", () => {
    const c = document.querySelectorAll(".header__link  ");
    c.forEach((c) => {
        const l = c.getAttribute("data-location"),
            s = routes[l] || routes[404];
        c.setAttribute("href", s);
    }),
        c.forEach((c) => {
            c.addEventListener("click", async (l) => {
                l.preventDefault();
                try {
                    const l = c.getAttribute("data-location"),
                        s = c.getAttribute("target") || "_self",
                        e = await (async function (c) {
                            return new Promise((l) => {
                                setTimeout(() => {
                                    l(routes[c] || null);
                                }, 750);
                            });
                        })(l);
                    if (!e) throw new Error("Route not found");
                    window.open(e, s);
                } catch (c) {}
            });
        });
});