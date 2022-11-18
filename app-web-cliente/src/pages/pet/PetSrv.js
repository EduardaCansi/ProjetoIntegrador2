import api from "../../services/axios-common";

class PetSrv {
    url = "/pets";

    async listarByCliente(ClienteId) {
        try {
            const response = await api.get('/petsByCliente/' + ClienteId);
            return response.data;
        } catch (error) { }
    }

}
export default new PetSrv();
