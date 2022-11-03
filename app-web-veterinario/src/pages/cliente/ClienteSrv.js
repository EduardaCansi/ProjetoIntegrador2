import api from "../../services/axios-common";

class ClienteSrv {
    url = "/clientes";

    async getClientes() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

    async postClientes(Cliente) {
        try {
            const response = await api.post(this.url, JSON.stringify(Cliente));
            return response.data;
        } catch (error) { }
    }

    async putClientes(Cliente) {
        try {
            const response = await api.put(this.url, JSON.stringify(Cliente));
            return response.data;
        } catch (error) { }
    }

    async deletClientes(id) {
        try {
            const response = await api.delete(this.url + "/" + id);
            return response.data;
        } catch (error) { }
    }

    async obterPeloId(id) {
        return await api.get(this.url + "/" + id).catch((err) => {
            throw err;
        });
    }
}
export default new ClienteSrv();
