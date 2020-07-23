// const API_URL = "https://high-service-api.herokuapp.com/transacao";
const API_URL = "http://localhost:3000/transacao";
import axios from "axios";

export default {
  async buscarPedidosCliente(clienteId) {
    return axios
      .get(`${API_URL}/cliente/${clienteId}`)
      .then((response) => response.data);
  },
};
