/**
 * Mimics a request to server
 */

async function requestSimulator(responseType = 'success', timeout = 1000) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (responseType === 'success') {
        resolve({ message: 'Success!' })
      } else {
        reject(new Error('Register failed!'))
      }
    }, timeout)
  })
}

export default requestSimulator
