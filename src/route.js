import.meta.hot.on('vite:beforeUpdate', () => {
    // Remove event listeners to prevent memory leaks
    document.querySelectorAll('.header__link').forEach((link) => {
      link.removeEventListener('click', () => {});
    });
  });
  
  import.meta.hot.on('vite:updated', () => {
    // Re-run the code after HMR update
    main();
  });
  
  function main() {
    fetch('route.json')
     .then((response) => response.json())
     .then((routes) => {
        const links = document.querySelectorAll('.header__link');
  
        links.forEach((link) => {
          const route = link.getAttribute('data-location');
          const path = routes[route] || routes[404];
          link.setAttribute('href', path);
        });
  
        links.forEach((link) => {
          link.addEventListener('click', async (event) => {
            event.preventDefault();
  
            try {
              const route = link.getAttribute('data-location');
              const target = link.getAttribute('target') || '_self';
              const path = await getPath(route);
  
              if (path) {
                window.open(path, target);
              } else {
                throw new Error('Route not found');
              }
            } catch (error) {
              window.open(routes[404], '_self');
              console.error('Error navigating:', error.message);
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
     .catch((error) => console.log('Error fetching data:', error));
  }
  
  main();