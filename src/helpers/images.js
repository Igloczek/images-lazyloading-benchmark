import fs from 'node:fs/promises'

export default async function() {
  const srcDir = new URL('../../public/images', import.meta.url)
  const images = await fs.readdir(srcDir)
  const numbers = Array.from(Array(2000).keys())

  return numbers.map(
    index => `/images/${images[Math.floor(Math.random() * images.length)]}?cache${index}`
  )
}
