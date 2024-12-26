export default {
  pinterest: {
    apiUrl: process.env.VUE_APP_PINTEREST_API_ENDPOINT || 'https://api.pinterest.com/v5',
    clientId: process.env.VUE_APP_PINTEREST_CLIENT_ID,
    clientSecret: process.env.VUE_APP_PINTEREST_CLIENT_SECRET,
    redirectUri: process.env.VUE_APP_PINTEREST_REDIRECT_URI
  },
  instagram: {
    apiUrl: process.env.VUE_APP_INSTAGRAM_API_ENDPOINT || 'https://graph.instagram.com',
    clientId: process.env.VUE_APP_INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.VUE_APP_INSTAGRAM_CLIENT_SECRET,
    redirectUri: process.env.VUE_APP_INSTAGRAM_REDIRECT_URI
  }
} 