const app = require("./config/app")
const http = require("http")

// starting server to listen on port
const server = http.createServer(app)
const port = process.env.SERVER_PORT || 9988
const host = process.env.HOST || "localhost"

server.listen({ host, port }, () => {
    console.log(`server is running on http://${host}:${port}`)
})
