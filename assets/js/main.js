document.addEventListener("DOMContentLoaded", () => {
    fetch("/assets/js/routes.json")
        .then((response) => response.json())
        .then((routes) => {
            const links = document.querySelectorAll(".nav-link");

            links.forEach((link) => {
                const route = link.getAttribute("data-location");
                const path = routes[route] || routes[404];
                link.setAttribute("href", path);
            });

            links.forEach((link) => {
                link.addEventListener("click", async (event) => {
                    event.preventDefault();

                    try {
                        const route = link.getAttribute("data-location");
                        const target = link.getAttribute("target") || "_self";
                        const path = await getPath(route);

                        if (path) {
                            window.open(path, target);
                        } else {
                            throw new Error("Route not found");
                        }
                    } catch (error) {
                        window.open(routes[404], "_self");
                        console.error("Error navigating:", error.message);
                    }
                });
            });

            async function getPath(route) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const path = routes[route] || null;
                        resolve(path);
                    }, 750);
                });
            }
        })
        .catch((error) => console.log("Error fetching data:", error));
});



// Assume that I want to replace all images on the page
const images = document.querySelectorAll('img');

// Loop over them
[].forEach.call(images, function (ele) {
    ele.addEventListener('error', function (e) {
        e.target.src = '/assets/svg/ceit-sc.svg';
    });
});