<template>
    <header class="header">

        <div class="header-container">
            <div class="nav-logo">
                <div class="logo">
                    <p>TimeTravel Agency</p>
                </div>
                <button class="burger-btn" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                    <RouterLink to="/">Accueil</RouterLink>
                    <RouterLink to="/galerie">Galerie</RouterLink>
                    <RouterLink to="/contact">Contact</RouterLink>
                </nav>
            </div>

            <div class="commandez">
                <a href="" class="btn">Commandez</a>
            </div>

            <transition name="slide-fade">
                <nav v-if="isMenuOpen" class="mobile-nav">
                    <RouterLink to="/" @click="toggleMenu">Accueil</RouterLink>
                    <RouterLink to="/galerie" @click="toggleMenu">Galerie</RouterLink>
                    <RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink>
                    <a href="" class="btn mobile-btn">Commandez</a>
                </nav>
            </transition>
        </div>
    
    </header>

    <RouterView />

    <Footer />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
</script>

<style scoped>

</style>