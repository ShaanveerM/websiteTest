// Load the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Populate the page content dynamically
        const pageTitle = document.getElementById('page-title');
        const pageContent = document.getElementById('page-content');
        const navLinks = document.getElementById('nav-links');

        // Get the current page (for example, 'home')
        const currentPage = data.pages.find(page => page.url === window.location.pathname.split('/').pop());

        // Set the page title and content
        pageTitle.innerText = currentPage.title;
        pageContent.innerText = currentPage.content;

        // Create navigation links
        data.pages.forEach(page => {
            const link = document.createElement('li');
            link.innerHTML = `<a href="${page.url}">${page.name}</a>`;
            navLinks.appendChild(link);
        });
    })
    .catch(error => console.log("Error loading JSON: ", error))