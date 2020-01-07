//https://www.babelcoder.com/blog/posts/avoid-callback-hell-using-promise-async-await
const doAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() >= 0.5) resolve('BabelCoder!')
        else reject(new Error('Less than 0.5!'))
      }, 2000)
    })
  }
  
  doAsync().then((text) => {
    console.log(text)
  }).catch((error) => {
    console.error(error.message)
  })