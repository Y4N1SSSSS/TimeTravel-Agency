<template>
  <header class="header">

        <div class="header-container">
            <div class="nav-logo">
                <div class="logo">
                    <p>TimeTravel Agency</p>
                </div>
                <nav>
                    <RouterLink to="/">Accueil</RouterLink>
                    <RouterLink to="/galerie">Galerie</RouterLink>
                    <RouterLink to="/contact">Contact</RouterLink>
                </nav>
            </div>

            <div>
                <a href="" class="btn">Commandez</a>
            </div>
        </div>
    
  </header>

  <RouterView />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>