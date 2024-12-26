<template>
  <div class="post-scheduler">
    <h2>Schedule Social Media Post</h2>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    
    <form @submit.prevent="schedulePost">
      <div class="form-group">
        <label>Post Content</label>
        <textarea v-model="post.content" required></textarea>
      </div>

      <div class="form-group">
        <label>Image Upload</label>
        <input type="file" @change="handleImageUpload" accept="image/*">
      </div>

      <div class="form-group">
        <label>Schedule Date & Time</label>
        <input type="datetime-local" v-model="post.scheduledTime" required>
      </div>

      <div class="form-group">
        <label>Platforms</label>
        <div>
          <input type="checkbox" v-model="post.platforms" value="pinterest"> Pinterest
          <input type="checkbox" v-model="post.platforms" value="instagram"> Instagram
        </div>
      </div>

      <div class="form-group">
        <label>Pinterest Board</label>
        <input 
          v-if="post.platforms.includes('pinterest')"
          v-model="post.board"
          type="text"
          required
          placeholder="Enter Pinterest board name"
        >
      </div>

      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Scheduling...' : 'Schedule Post' }}
      </button>
    </form>

    <div v-if="success" class="success-message">
      Post scheduled successfully!
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { socialMediaService } from '../services/socialMedia'

export default {
  name: 'PostScheduler',
  data() {
    return {
      post: {
        content: '',
        image: null,
        scheduledTime: '',
        platforms: [],
        board: ''
      },
      isLoading: false,
      error: null,
      success: false
    }
  },
  methods: {
    ...mapActions(['schedulePost']),
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file && file.type.startsWith('image/')) {
        this.post.image = file
        this.error = null
      } else {
        this.error = 'Please select a valid image file'
      }
    },
    async handleSubmit() {
      this.isLoading = true
      this.error = null
      this.success = false

      try {
        await this.schedulePost(this.post)
        this.success = true
        this.resetForm()
      } catch (error) {
        this.error = error.message || 'Failed to schedule post'
      } finally {
        this.isLoading = false
      }
    },
    resetForm() {
      this.post = {
        content: '',
        image: null,
        scheduledTime: '',
        platforms: [],
        board: ''
      }
    }
  }
}
</script>

<style scoped>
.post-scheduler {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  min-height: 100px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.success-message {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style> 