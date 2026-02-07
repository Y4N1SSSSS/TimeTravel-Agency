<template>
  <main class="gallery-page">
    
    <section class="gallery-hero">
      <div class="container">
        <h1>Nos Destinations</h1>
        <p class="subtitle">Une collection d'instants éternels.</p>
      </div>
    </section>

    <section class="gallery-content">
      <div class="container">
        
        <div 
          v-for="(dest, index) in destinations" 
          :key="dest.id" 
          class="gallery-card"
          :class="`card-${index + 1}`"
        >
          <div class="card-bg" :style="{ backgroundImage: `url(${dest.image})` }"></div>
          
          <div class="card-overlay"></div>

          <div class="card-info">
            <span class="tag">{{ dest.year }}</span>
            <h2>{{ dest.title }}</h2>
            <p>{{ dest.description }}</p>
            <div class="card-actions">
              <a href="#" class="btn-link">En savoir plus <span>→</span></a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Chatbot />

  </main>
</template>

<script setup>
import Chatbot from '../components/Chatbot.vue';

import imgParis from '@/assets/images/destination_1.jpg';
import imgCretace from '@/assets/images/destination_2.jpg';
import imgFlorence from '@/assets/images/destination_3.jpg';

const destinations = [
  {
    id: 1,
    title: 'Paris - Belle Époque',
    year: '1889',
    description: "Flânez sous la Tour Eiffel fraîchement inaugurée et découvrez l'effervescence de l'Exposition Universelle. Un voyage au cœur de l'élégance française.",
    image: imgParis // 2. On utilise la variable importée ici
  },
  {
    id: 2,
    title: 'Le Crétacé Supérieur',
    year: '-65M',
    description: "Une immersion sauvage avant l'extinction. Observez les Triceratops dans leur habitat naturel et ressentez la puissance brute de la nature préhistorique.",
    image: imgCretace
  },
  {
    id: 3,
    title: 'Florence - Renaissance',
    year: '1504',
    description: "L'âge d'or de l'art. Rencontrez Michel-Ange, admirez le David et perdez-vous dans les ruelles d'une ville qui a changé la face du monde.",
    image: imgFlorence
  }
];
</script>

<style scoped lang="scss">
/* --- CONFIGURATION GLOBALE --- */
.gallery-page {
  background-color: #000; /* Fond noir profond */
  min-height: 100vh;
  padding-bottom: 5rem;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- HERO SECTION --- */
.gallery-hero {
  padding: 8rem 0 4rem; /* Espace pour le menu fixe */
  text-align: center;

  h1 {
    font-family: 'InterBold', sans-serif;
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    animation: fadeDown 0.8s ease-out;
  }

  .subtitle {
    color: #888;
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto;
    animation: fadeUp 0.8s ease-out 0.2s backwards;
  }
}

/* --- GRILLE --- */
.gallery-content .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

/* --- CARTE DESIGN --- */
.gallery-card {
  position: relative;
  height: 500px; /* Cartes hautes et élégantes */
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background-color: #111;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  /* L'image de fond */
  .card-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.8s ease; /* Zoom lent */
    z-index: 0;
  }

  /* Le filtre sombre (Overlay) */
  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1));
    z-index: 1;
    transition: background 0.4s ease;
  }

  /* Le contenu textuel */
  .card-info {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    color: white;
    transform: translateY(20px); /* Légèrement décalé vers le bas au repos */
    transition: transform 0.4s ease;
  }

  .tag {
    font-size: 0.85rem;
    font-weight: 700;
    color: #d4af37; /* Touche dorée luxe (ou blanc si tu préfères) */
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    display: block;
  }

  h2 {
    font-family: 'InterBold';
    font-size: 1.8rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  p {
    font-size: 1rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.5;
    margin-bottom: 1.5rem;
    opacity: 0; /* Caché au repos pour effet clean */
    transform: translateY(20px);
    transition: all 0.4s ease;
  }

  .btn-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    opacity: 0; /* Caché au repos */
    transition: opacity 0.4s ease 0.1s;
    
    span {
      display: inline-block;
      transition: transform 0.3s ease;
    }
  }

  /* --- ANIMATIONS AU SURVOL (HOVER) --- */
  &:hover {
    transform: translateY(-10px); /* La carte monte */
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);

    .card-bg {
      transform: scale(1.1); /* Zoom image */
    }

    .card-overlay {
      background: linear-gradient(to top, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.4) 100%);
    }

    .card-info {
      transform: translateY(0);
    }

    p {
      opacity: 1;
      transform: translateY(0);
    }

    .btn-link {
      opacity: 1;
      
      &:hover span {
        transform: translateX(5px);
      }
    }
  }
}

/* --- ANIMATIONS D'ENTRÉE --- */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .gallery-hero h1 { font-size: 2rem; }
  
  .gallery-content .container {
    grid-template-columns: 1fr; /* 1 seule colonne sur mobile */
  }

  .gallery-card {
    height: 400px; /* Un peu moins haut sur mobile */
    
    /* Sur mobile, on affiche le texte tout le temps, pas besoin de hover */
    p, .btn-link {
      opacity: 1;
      transform: translateY(0);
    }
    
    .card-info {
        transform: translateY(0);
    }
  }
}
</style>