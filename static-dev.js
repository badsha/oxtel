import { createServer } from 'vite'

const server = await createServer({
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  root: './client'
})

await server.listen()
console.log('Static site running on http://0.0.0.0:5000')