const app = require('express')()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  next()
})
// Register all routes inside tests/mock-api/routes.
require('../mock-api')(app)

module.exports = () => {
  return new Promise((resolve, reject) => {
    ;(global as any).mockApiServer = app.listen(process.env.MOCK_API_PORT, resolve)
  })
}
