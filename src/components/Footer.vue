<template>
    <footer class="footer">
        <div class="container">
            
            <div class="footer-brand">
                <h2>TimeTravel Agency</h2>
                <span class="copyright">© 2026 • Tous droits réservés</span>
            </div>

            <nav class="footer-nav">
                <a href="#">Mentions Légales</a>
                <a href="#">L'Agence</a>
                <a href="#">Contact</a>
            </nav>

        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    background-color: #393939;
    color: #ffffff;
    padding: 5rem 2rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.container {
    max-width: 1270px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-brand h2 {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
    font-weight: 600;
}

.copyright {
    font-size: 0.75rem;
    color: #888;
}

.footer-nav {
    display: flex;
    gap: 30px;
}

.footer-nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    opacity: 0.7;
    position: relative;
    transition: opacity 0.3s ease;
}

.footer-nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -4px; 
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
}

.footer-nav a:hover {
    opacity: 1;
}

.footer-nav a:hover::after {
    width: 100%;
}

@media (max-width: 600px) {
    .container {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-nav {
        flex-direction: column;
        gap: 15px;
    }
}
</style>