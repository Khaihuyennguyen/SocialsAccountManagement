import axios from 'axios'
import config from '../config/social-api'

export const authService = {
  // Pinterest OAuth
  getPinterestAuthUrl() {
    const scope = 'boards:read,pins:read,pins:write'
    return `https://www.pinterest.com/oauth/?client_id=${config.pinterest.clientId}&redirect_uri=${config.pinterest.redirectUri}&response_type=code&scope=${scope}`
  },

  async getPinterestToken(code) {
    const response = await axios.post('https://api.pinterest.com/v5/oauth/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: config.pinterest.redirectUri
    }, {
      auth: {
        username: config.pinterest.clientId,
        password: config.pinterest.clientSecret
      }
    })
    return response.data.access_token
  },

  // Instagram OAuth
  getInstagramAuthUrl() {
    const scope = 'basic,publish_media'
    return `https://api.instagram.com/oauth/authorize?client_id=${config.instagram.clientId}&redirect_uri=${config.instagram.redirectUri}&scope=${scope}&response_type=code`
  },

  async getInstagramToken(code) {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', {
      client_id: config.instagram.clientId,
      client_secret: config.instagram.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: config.instagram.redirectUri,
      code
    })
    return response.data.access_token
  }
} 