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
              <div class="markdown-body" v-html="renderMarkdown(msg.content)"></div>
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
import { marked } from 'marked';

const userInput = ref('');
const loading = ref(false);
const isOpen = ref(false);
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

const renderMarkdown = (text) => {
  return marked.parse(text);
};

const toggleChat = () => {
  isOpen.value = !isOpen.value;
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
/* POLICE GLOBALE */
.chatbot-wrapper {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: fixed;
  bottom: 20px;
  right: 20px; /* CHANGEMENT ICI : positionné à DROITE */
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* CHANGEMENT ICI : alignement à DROITE */
  gap: 10px;
}

/* BOUTON ROND PRINCIPAL */
.toggle-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #000000;
  color: white;
  border: 1px solid #333;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  transform: scale(1.05);
  background-color: #1a1a1a;
}

/* FENÊTRE DE CHAT */
.chat-window {
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

/* HEADER */
.header {
  background: #000000;
  color: #ffffff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}
.header h3 { 
  margin: 0; 
  font-size: 0.95rem; 
  font-weight: 500; 
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.close-btn { 
  background: none; 
  border: none; 
  color: white; 
  cursor: pointer; 
  font-size: 1.2rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.close-btn:hover { opacity: 1; }

/* MESSAGES */
.messages { 
  flex: 1; 
  padding: 20px; 
  overflow-y: auto; 
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.user { 
  align-self: flex-end;
  background: #000000;
  color: white;
  padding: 12px 16px;
  border-radius: 12px 12px 0 12px;
  max-width: 85%;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.assistant { 
  align-self: flex-start;
  background: #f9f9f9;
  color: #000000;
  padding: 12px 16px;
  border-radius: 12px 12px 12px 0;
  max-width: 85%;
  font-size: 0.9rem;
  line-height: 1.6;
  border: 1px solid #e0e0e0;
  border-left: 3px solid #000000;
}

.user strong, .assistant strong { 
  display: block; 
  font-size: 0.7rem; 
  margin-bottom: 6px; 
  opacity: 0.7; 
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* MARKDOWN */
.markdown-body :deep(p) { margin: 0 0 10px 0; }
.markdown-body :deep(p:last-child) { margin-bottom: 0; }
.markdown-body :deep(ul), .markdown-body :deep(ol) { margin: 5px 0 10px 0; padding-left: 20px; }
.markdown-body :deep(li) { margin-bottom: 5px; }
.markdown-body :deep(strong) { font-weight: 600; }

/* INPUT */
.input-area { 
  padding: 15px; 
  border-top: 1px solid #eee; 
  display: flex; 
  gap: 10px; 
  background: white;
}

input { 
  flex: 1; 
  padding: 12px; 
  border: 1px solid #ccc; 
  border-radius: 12px;
  outline: none;
  font-size: 0.9rem;
  transition: border-color 0.2s;
  background: #fdfdfd;
}
input:focus { 
  border-color: #000000;
  background: #fff;
}

.input-area button { 
  background: #000000;
  color: white; 
  border: none; 
  width: 42px; 
  height: 42px; 
  border-radius: 12px;
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.input-area button:hover { background: #333; }
.input-area button:disabled { background: #ccc; cursor: not-allowed; }

/* ANIMATIONS */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>