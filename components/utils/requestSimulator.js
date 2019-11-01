export async function requestSimulator (responseType = 'success', timeout = 3000) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (responseType === 'success') resolve('Succesfull!')
      else reject(new Error('Failed!'))
    }, 3000)
  })
}
