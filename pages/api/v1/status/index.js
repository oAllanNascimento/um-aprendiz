function status(request, response) {
  response.status(200).json({ chave: "É os guri" });
}

export default status;
