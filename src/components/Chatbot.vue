<template>
  <div class="chatbot-wrapper">
    
    <transition name="fade">
      <div v-if="isOpen" class="chat-window">
        <div class="header">
          <h3>Assistant TimeTravel</h3>
          <button class="close-btn" @click="toggleChat">✕</button>
        </div>
        
        <div class="messages" ref="messagesContainer">
          <template v-for="(msg, index) in messages" :key="index">
            <div v-if="msg.role !== 'system'" :class="msg.role">
              <strong>{{ msg.role === 'user' ? 'Vous' : 'TimeTravel' }}</strong>
              <p>{{ msg.content }}</p>
            </div>
          </template>
        </div>

        <div class="input-area">
          <input 
            v-model="userInput" 
            @keyup.enter="sendMessage" 
            placeholder="Une question ?" 
            :disabled="loading"
          />
          <button @click="sendMessage" :disabled="loading">
            <span v-if="!loading">➤</span>
            <span v-else>...</span>
          </button>
        </div>
      </div>
    </transition>

    <button class="toggle-btn" @click="toggleChat">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>

  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const userInput = ref('');
const loading = ref(false);
const isOpen = ref(false); // État pour ouvrir/fermer le chat
const messagesContainer = ref(null);

const API_KEY = 'kLCOJnFoikQbSiTdfWnnGDvVzFU3bscF';

const messages = ref([
  {
    role: "system",
    content: `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
    Ton rôle : conseiller les clients sur les meilleures destinations temporelles.
    Ton ton : Professionnel mais chaleureux, passionné d'histoire, toujours enthousiaste sans être trop familier. Expert en voyage temporel (fictif mais crédible).
    Tu connais parfaitement :
    - Paris 1889 (Belle Époque, Tour Eiffel, Exposition Universelle)
    - Crétacé -65M (dinosaures, nature préhistorique)
    - Florence 1504 (Renaissance, art, Michel-Ange)
    Tu peux suggérer des destinations selon les intérêts du client.`
  }
]);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  // Scroll vers le bas à l'ouverture
  if(isOpen.value) scrollToBottom();
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  const userMessage = { role: 'user', content: userInput.value };
  messages.value.push(userMessage);
  
  userInput.value = ''; 
  loading.value = true;
  scrollToBottom();

  try {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: messages.value,
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      messages.value.push(data.choices[0].message);
      scrollToBottom();
    }

  } catch (error) {
    console.error("Erreur API :", error);
    messages.value.push({ role: 'assistant', content: "Une perturbation temporelle empêche la réponse..." });
  } finally {
    loading.value = false;
    scrollToBottom();
  }
};
</script>

<style scoped>
/* Conteneur global fixé en bas à GAUCHE */
.chatbot-wrapper {
  position: fixed;
  bottom: 20px;
  left: 20px; /* C'est ici qu'on définit la position */
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligne le bouton à gauche */
  gap: 10px;
}

/* Le bouton rond (Logo) */
.toggle-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d4af37; /* Or luxueux */
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background-color 0.2s;
}

.toggle-btn:hover {
  transform: scale(1.1);
  background-color: #b5952f;
}

/* La fenêtre de chat */
.chat-window {
  width: 320px;
  height: 450px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.header {
  background: #2c3e50;
  color: #d4af37;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h3 { margin: 0; font-size: 1rem; }
.close-btn { background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem; }

.messages { 
  flex: 1; 
  padding: 15px; 
  overflow-y: auto; 
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user { 
  align-self: flex-end;
  background: #2c3e50;
  color: white;
  padding: 8px 12px;
  border-radius: 12px 12px 0 12px;
  max-width: 80%;
  font-size: 0.9rem;
}

.assistant { 
  align-self: flex-start;
  background: white;
  border: 1px solid #d4af37;
  color: #333;
  padding: 8px 12px;
  border-radius: 12px 12px 12px 0;
  max-width: 80%;
  font-size: 0.9rem;
}

.user strong, .assistant strong { display: block; font-size: 0.75rem; margin-bottom: 4px; opacity: 0.8; }
.user p, .assistant p { margin: 0; }

.input-area { 
  padding: 10px; 
  border-top: 1px solid #eee; 
  display: flex; 
  gap: 5px; 
  background: white;
}

input { 
  flex: 1; 
  padding: 8px; 
  border: 1px solid #ccc; 
  border-radius: 20px; 
  outline: none;
}
input:focus { border-color: #d4af37; }

.input-area button { 
  background: #d4af37; 
  color: white; 
  border: none; 
  width: 35px; 
  height: 35px; 
  border-radius: 50%; 
  cursor: pointer; 
}

/* Animations d'ouverture/fermeture */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }
</style>