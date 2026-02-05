<template>

    <main>
    
        <section class="hero">
            <div class="container">
                <h1>TimeTravel Agency</h1>
                <h2>Découvrez l’élégance du voyage dans le temps</h2>
                <p class="text">Plongez dans des époques fascinantes et vivez des aventures uniques, du passé mythique au futur étonnant. Avec TimeTravel Agency, chaque voyage est une expérience inoubliable.</p>
                <div class="btn-container">
                    <a href="" class="btn">Partir en voyage</a>
                    <a href="" class="btn white">Voir la bande-annonce</a>
                </div>
            </div>
        </section>

        <section class="presentation">
            <div class="container">
                <div class="left">
                </div>
                <div class="right">
                    <h3>Voyagez à travers le temps</h3>
                    <p>
                        Chez TimeTravel Agency, nous transformons l’imaginaire en réalité.
                        <br><br>Explorez les civilisations antiques, revivez des moments historiques marquants, ou découvrez un futur que vous n’auriez jamais osé imaginer. Chaque voyage est conçu sur mesure pour vous offrir une expérience unique et mémorable, où l’élégance rencontre l’aventure.
                    </p>
                    <a href="" class="btn">Contactez-nous</a>
                </div>
            </div>
        </section>

        <section class="destination">
            <div class="container">
                <div class="grid-content destun">
                    <h4>Paris 1889</h4>
                    <p>Exposition universelle & Belle Époque</p>
                    <a href="" class="btn">Découvrir</a>
                </div>
                <div class="grid-content destdeux">
                    <h4>Crétacé -65M années</h4>
                    <p>Derniers jours des dinosaures</p>
                    <a href="" class="btn">Découvrir</a>
                </div>
                <div class="grid-content desttrois">
                    <h4>Renaissance Florence 1504</h4>
                    <p>Âge d'or artistique</p>
                    <a href="" class="btn">Découvrir</a>
                </div>
            </div>
        </section>

        <Chatbot />

    </main>

</template>

<script setup>
import Chatbot from './../components/Chatbot.vue';
</script>