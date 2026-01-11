// Main JavaScript File

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    // Allow a small delay for header to inject before initializing menu
    setTimeout(initMobileMenu, 100);
});

function loadHeader() {
    // Determine path prefix based on current location
    const path = window.location.pathname;
    const isSubPage = path.includes('/tools/') || path.includes('/articles/');
    const prefix = isSubPage ? '../' : '';

    const headerHTML = `
    <div class="container flex justify-between items-center">
        <a href="${prefix}index.html" class="logo">SmartTools</a>
        <nav class="nav-links flex gap-4">
            <a href="${prefix}index.html">Home</a>
             <a href="${prefix}index.html#tools-section">Tools</a>
            <a href="${prefix}about.html">About</a>
            <a href="${prefix}contact.html">Contact</a>
        </nav>
        <button class="mobile-menu-btn hidden" aria-label="Toggle Menu">
            ☰
        </button>
    </div>
    <div class="mobile-menu hidden" style="padding: 1rem; background: white; border-bottom: 1px solid #eee;">
        <nav class="flex flex-col gap-2">
            <a href="${prefix}index.html">Home</a>
            <a href="${prefix}index.html#tools-section">Tools</a>
            <a href="${prefix}about.html">About</a>
            <a href="${prefix}contact.html">Contact</a>
        </nav>
    </div>
    `;
    const header = document.querySelector('header');
    if (header) header.innerHTML = headerHTML;
}

function loadFooter() {
    // Determine path prefix (same logic as header)
    const path = window.location.pathname;
    const isSubPage = path.includes('/tools/') || path.includes('/articles/');
    const prefix = isSubPage ? '../' : '';

    const footerHTML = `
    <div class="container footer-grid">
        <div>
            <h3>SmartTools</h3>
            <p>Free online calculators, random generators, and productivity tools to make your life easier.</p>
        </div>
        <div>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="${prefix}index.html">Home</a></li>
                <li><a href="${prefix}about.html">About Us</a></li>
                <li><a href="${prefix}contact.html">Contact</a></li>
            </ul>
        </div>
        <div>
            <h3>Legal</h3>
            <ul>
                <li><a href="${prefix}privacy-policy.html">Privacy Policy</a></li>
                <li><a href="${prefix}terms.html">Terms of Service</a></li>
            </ul>
        </div>
    </div>
    <div class="container text-center mt-4" style="border-top: 1px solid #3331; padding-top: 1rem;">
        <p>&copy; ${new Date().getFullYear()} SmartTools. All rights reserved.</p>
    </div>
    `;
    const footer = document.querySelector('footer');
    if (footer) footer.innerHTML = footerHTML;
}

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (btn && menu) {
        btn.classList.remove('hidden');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}
