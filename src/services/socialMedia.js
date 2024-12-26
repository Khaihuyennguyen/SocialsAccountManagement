import axios from 'axios'
import config from '../config/social-api'

export const socialMediaService = {
  async postToPinterest(post, token) {
    // First upload the image
    const formData = new FormData()
    formData.append('image', post.image)
    
    const mediaResponse = await axios.post(`${config.pinterest.apiUrl}/media`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })

    // Create the pin with the uploaded media
    const response = await axios.post(`${config.pinterest.apiUrl}/pins`, {
      board_id: post.board,
      media_source: {
        source_type: 'image_url',
        url: mediaResponse.data.media_url
      },
      title: post.content.substring(0, 100),
      description: post.content
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },

  async postToInstagram(post, token) {
    // First create a container
    const containerResponse = await axios.post(`${config.instagram.apiUrl}/media`, {
      image_url: post.image,
      caption: post.content
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    // Check the status of the container
    const mediaId = containerResponse.data.id
    const publishResponse = await axios.post(`${config.instagram.apiUrl}/media_publish`, {
      creation_id: mediaId
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    return publishResponse.data
  }
} 