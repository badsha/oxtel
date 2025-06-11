import express from 'express'
import path from 'path'

const app = express()

// Serve static files from the static directory
app.use(express.static(path.resolve(process.cwd(), 'static')))

// Serve index.html for all routes (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'static', 'index.html'))
})

const PORT = 5000
app.listen(PORT, '0.0.0.0', () => {
  console.log('✓ Static website running on http://0.0.0.0:5000')
})
