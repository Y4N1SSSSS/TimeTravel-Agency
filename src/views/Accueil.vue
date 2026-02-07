<template>

    <main>
    
        <section class="hero">
            <div class="container">
                <h1>TimeTravel Agency</h1>
                <h2>Découvrez l’élégance du voyage dans le temps</h2>
                <p class="text">Plongez dans des époques fascinantes et vivez des aventures uniques, du passé mythique au futur étonnant. Avec TimeTravel Agency, chaque voyage est une expérience inoubliable.</p>
                <div class="btn-container">
                    <RouterLink to="/#presentation" class="btn">Partir en voyage</RouterLink>
                    <a href="" class="btn white" @click.prevent="openVideo">Voir la bande-annonce</a>
                </div>
            </div>
        </section>

        <transition name="fade">
            <div v-if="isVideoOpen" class="video-overlay" @click="closeVideo">
                <div class="video-wrapper">
                    <button class="close-video" @click="closeVideo">✕</button>
                    
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/BMYAN6A8QKc?autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </transition>

        <section class="presentation" id="presentation">
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
                    <RouterLink to="/galerie" class="btn white">Découvrir</RouterLink>
                </div>
                <div class="grid-content destdeux">
                    <h4>Crétacé -65M années</h4>
                    <p>Derniers jours des dinosaures</p>
                    <RouterLink to="/galerie" class="btn white">Découvrir</RouterLink>
                </div>
                <div class="grid-content desttrois">
                    <h4>Renaissance Florence 1504</h4>
                    <p>Âge d'or artistique</p>
                    <RouterLink to="/galerie" class="btn white">Découvrir</RouterLink>
                </div>
            </div>
        </section>

        <Chatbot />

    </main>

</template>

<script setup>
import Chatbot from './../components/Chatbot.vue';
import { ref } from 'vue';

const isVideoOpen = ref(false);

const openVideo = () => {
    isVideoOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeVideo = () => {
    isVideoOpen.value = false;
    document.body.style.overflow = '';
};
</script>

<style scoped>

.video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85); 
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.video-wrapper {
    position: relative;
    width: 80%;
    max-width: 900px;
    aspect-ratio: 16 / 9;
    background: black;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    cursor: default;
    animation: zoomIn 0.3s ease-out;
}

.close-video {
    position: absolute;
    top: -40px;
    right: -10px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.2s;
}

.close-video:hover {
    transform: scale(1.1) rotate(90deg);
    color: #d4af37;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes zoomIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@media (max-width: 768px) {
    .video-wrapper {
        width: 95%;
    }
    .close-video {
        top: -40px;
        right: 0;
    }
}

</style>