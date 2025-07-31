function status(request, response) {
  response.status(200).json( { chave: "api funcionando, nomrmalmente" }  )
}

export default status