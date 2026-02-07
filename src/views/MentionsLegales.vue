<template>
    <main class="mentions-page">
        <div class="container">
            <h1>Mentions Légales</h1>
            
            <div class="content">
                <section>
                    <h2>1. Présentation du site</h2>
                    <p>
                        Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <strong>TimeTravel Agency</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                    </p>
                    <p>
                        <strong>Propriétaire :</strong> TimeTravel Agency (Fictif)<br>
                        <strong>Statut :</strong> Projet Pédagogique Étudiant<br>
                        <strong>Adresse :</strong> 123 Rue du Temps, 75000 Paris, France<br>
                        <strong>Contact :</strong> contact@timetravel-student.com
                    </p>
                </section>

                <section>
                    <h2>2. Hébergement</h2>
                    <p>
                        Le site est hébergé par :<br>
                        <strong>Vercel Inc.</strong><br>
                        340 S Lemon Ave #4133<br>
                        Walnut, CA 91789<br>
                        États-Unis
                    </p>
                </section>

                <section>
                    <h2>3. Propriété intellectuelle</h2>
                    <p>
                        Ce site est un <strong>projet scolaire</strong> réalisé dans un but éducatif.
                        Les images utilisées proviennent de banques d'images libres de droits ou ont été générées par IA (Midjourney/DALL-E) dans le cadre du cours.
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                    </p>
                </section>

                <section>
                    <h2>4. Données personnelles</h2>
                    <p>
                        Ce site ne récolte aucune donnée personnelle réelle à des fins commerciales. Les formulaires présents (newsletter, contact) sont des simulations et aucune donnée n'est stockée ou revendue.
                    </p>
                </section>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>
.mentions-page {
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    padding: 8rem 2rem 5rem;
    font-family: 'Inter', sans-serif;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    font-family: 'InterBold', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    text-align: center;
    border-bottom: 1px solid #333;
    padding-bottom: 2rem;
}

section {
    margin-bottom: 2.5rem;
}

h2 {
    font-size: 1.2rem;
    color: #d4af37;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

p {
    line-height: 1.6;
    color: #ccc;
    font-size: 0.95rem;
}

strong {
    color: #fff;
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.8rem;
    }
    .mentions-page {
        padding-top: 6rem;
    }
}
</style>