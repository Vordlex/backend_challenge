import server from "./server"

const PORT = 3333

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
