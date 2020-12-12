// Axios
import axios from 'axios'

// Config
import { Config } from '../../../config'

const translate = async (text, from = 'es', to = 'en') => {
  try {
    const { data } = await axios.post(
      'https://microsoft-translator-text.p.rapidapi.com/translate',
      [{ Text: text }],
      {
        params: { to, 'api-version': '3.0', profanityAction: 'NoAction', textType: 'plain' },
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-key': Config.RapidApi.apiKey,
          'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
        }
      }
    )
    return { response: data[0]?.translations[0]?.text || text, hasError: false }
  } catch (error) {
    return { response: 'Error while translating text', hasError: true }
  }
}

export const TranslationService = { translate }
