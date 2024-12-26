<template>
  <div class="home">
    <h1>Scheduled Posts</h1>
    <div class="posts-grid">
      <div v-for="post in scheduledPosts" :key="post.scheduledTime" class="post-card">
        <img v-if="post.image" :src="getImagePreview(post.image)" alt="Post preview" />
        <div class="post-details">
          <p>{{ post.content }}</p>
          <p class="scheduled-time">Scheduled for: {{ formatDateTime(post.scheduledTime) }}</p>
          <div class="platforms">
            <span v-for="platform in post.platforms" :key="platform" class="platform-badge">
              {{ platform }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['scheduledPosts'])
  },
  methods: {
    formatDateTime(datetime) {
      return moment(datetime).format('MMMM Do YYYY, h:mm a')
    },
    getImagePreview(image) {
      return image instanceof File ? URL.createObjectURL(image) : image
    }
  }
}
</script>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.post-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.post-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-details {
  padding: 15px;
}

.scheduled-time {
  color: #666;
  font-size: 0.9em;
}

.platform-badge {
  background-color: #4CAF50;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 0.8em;
}
</style> 