<template>
  <div class="social-login">
    <h2>Connect Your Accounts</h2>
    
    <div class="platform-connections">
      <div class="platform">
        <h3>Pinterest</h3>
        <button 
          @click="connectPinterest" 
          :class="{ connected: isPinterestConnected }"
        >
          {{ isPinterestConnected ? 'Connected' : 'Connect Pinterest' }}
        </button>
      </div>

      <div class="platform">
        <h3>Instagram</h3>
        <button 
          @click="connectInstagram"
          :class="{ connected: isInstagramConnected }"
        >
          {{ isInstagramConnected ? 'Connected' : 'Connect Instagram' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { authService } from '../services/authService'

export default {
  name: 'SocialLogin',
  data() {
    return {
      isPinterestConnected: false,
      isInstagramConnected: false
    }
  },
  methods: {
    connectPinterest() {
      const authUrl = authService.getPinterestAuthUrl()
      window.location.href = authUrl
    },
    connectInstagram() {
      const authUrl = authService.getInstagramAuthUrl()
      window.location.href = authUrl
    }
  }
}
</script>

<style scoped>
.social-login {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.platform-connections {
  display: grid;
  gap: 20px;
  margin-top: 20px;
}

.platform {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button.connected {
  background-color: #2196F3;
}
</style> 